"use client";

import { env } from "@/env";
import type { AppRouter } from "@acme/api";
import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	loggerLink,
	splitLink,
	unstable_httpBatchStreamLink,
	unstable_httpSubscriptionLink,
} from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { useState } from "react";
import SuperJSON from "superjson";
import { createQueryClient } from "./query-client";

let clientQueryClientSingleton: QueryClient | undefined = undefined;
const getQueryClient = () => {
	if (typeof window === "undefined") {
		// Server: always make a new query client
		return createQueryClient();
	}
	// Browser: use singleton pattern to keep the same query client
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	return (clientQueryClientSingleton ??= createQueryClient());
};

export const api = createTRPCReact<AppRouter>();

export function TRPCReactProvider(props: { children: React.ReactNode }) {
	const queryClient = getQueryClient();

	const [trpcClient] = useState(() =>
		api.createClient({
			links: [
				loggerLink({
					enabled: (op) =>
						env.NODE_ENV === "development" ||
						(op.direction === "down" && op.result instanceof Error),
				}),
				splitLink({
					condition: (op) => op.type === "subscription",
					/**
					 * @link https://trpc.io/docs/client/links/httpSubscriptionLink
					 */
					true: unstable_httpSubscriptionLink({
						transformer: SuperJSON,
						url: getUrl(),
					}),
					/**
					 * @link https://trpc.io/docs/client/links/httpBatchStreamLink
					 */
					false: unstable_httpBatchStreamLink({
						transformer: SuperJSON,
						url: getUrl(),
						headers() {
							const headers = new Headers();
							headers.set("x-trpc-source", "nextjs-react");
							return headers;
						},
					}),
				}),
			],
		}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			<api.Provider client={trpcClient} queryClient={queryClient}>
				{props.children}
			</api.Provider>
			<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
		</QueryClientProvider>
	);
}

function getUrl() {
	const base = (() => {
		if (typeof window !== "undefined") return window.location.origin;
		if (env.VERCEL_URL) return `https://${env.VERCEL_URL}`;
		return `http://localhost:${process.env.PORT ?? 3000}`;
	})();

	return `${base}/api/trpc`;
}
