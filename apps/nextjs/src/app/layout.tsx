import { cn } from "@acme/ui";
import { Toaster } from "@acme/ui/toast";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

import "@/app/globals.css";

import { env } from "@/env";

export const metadata: Metadata = {
	metadataBase: new URL(
		env.VERCEL_ENV === "production"
			? "https://turbo.t3.gg"
			: "http://localhost:3000",
	),
	title: "Iafcj Colombia",
	description: "Iafcj Colombia",
	openGraph: {
		title: "Iafcj Colombia",
		description: "Iafcj Colombia",
		url: "https://create-t3-turbo.vercel.app",
		siteName: "Iafcj Colombia",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default async function RootLayout(props: { children: React.ReactNode }) {
	const locale = await getLocale();
	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={cn(
					"h-screen max-h-screen overflow-hidden bg-background font-inter text-foreground antialiased",
					inter.variable,
				)}
			>
				<NextIntlClientProvider messages={messages}>
					<TRPCReactProvider>{props.children}</TRPCReactProvider>
				</NextIntlClientProvider>
				<Toaster />
			</body>
		</html>
	);
}
