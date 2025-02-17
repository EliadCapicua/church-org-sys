import { randomUUID } from "node:crypto";
import { prisma } from "@acme/db/client";
import { skipCSRFCheck } from "@auth/core";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type {
	DefaultSession,
	NextAuthConfig,
	Session as NextAuthSession,
} from "next-auth";
import { encode as defaultEncode } from "next-auth/jwt";
import { env } from "../env";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
		} & DefaultSession["user"];
	}
}

const adapter = PrismaAdapter(prisma);

export const isSecureContext =
	env.NODE_ENV !== "development" && env.USE_TRUST_PROXY;

export const authConfig = {
	adapter,
	// In development, we need to skip checks to allow Expo to work
	...(!isSecureContext
		? {
				skipCSRFCheck: skipCSRFCheck,
				trustHost: true,
			}
		: {}),
	secret: env.AUTH_SECRET,
	debug: true,
	providers: [],
	callbacks: getCallBacks(),
	jwt: getJwt(),
} satisfies NextAuthConfig;

export async function validateToken(
	token: string,
): Promise<NextAuthSession | null> {
	const sessionToken = token.slice("Bearer ".length);
	const session = await adapter.getSessionAndUser?.(sessionToken);

	return session
		? {
				user: {
					...session.user,
				},
				expires: session.session.expires.toISOString(),
			}
		: null;
}

export async function invalidateSessionToken(token: string) {
	const sessionToken = token.slice("Bearer ".length);
	await adapter.deleteSession?.(sessionToken);
}

function getCallBacks() {
	return {
		session: (opts) => {
			if (!("user" in opts))
				throw new Error("unreachable with session strategy");

			return {
				...opts.session,
				user: {
					...opts.session.user,
					id: opts.user.id,
				},
			};
		},
		async jwt({ account, token }) {
			if (account?.provider === "credentials") {
				token.credentials = true;
			}
			return token;
		},
	} satisfies NextAuthConfig["callbacks"];
}

function getJwt() {
	return {
		encode: async (params) => {
			// credentials was added in the jwt callback
			if (params.token?.credentials) {
				const sessionToken = randomUUID();
				const expires = new Date(Date.now() + 60 * 60 * 24 * 30 * 1000); // 30 days

				if (!params.token.sub) {
					throw new Error("No user id found in token");
				}

				const session = await adapter.createSession?.({
					userId: params.token.sub,
					sessionToken,
					expires,
				});

				if (!session) {
					throw new Error("Failed to create session");
				}

				return session.sessionToken;
			}

			return defaultEncode(params);
		},
	} satisfies NextAuthConfig["jwt"];
}
