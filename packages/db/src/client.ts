import { type Prisma, PrismaClient } from "@prisma/client";

import { env } from "../env";

const globalForPrisma = globalThis as {
	prisma?: PrismaClient<Prisma.PrismaClientOptions, Prisma.QueryEvent["query"]>;
};

const log: (Prisma.LogLevel | Prisma.LogDefinition)[] = [
	{
		emit: "event",
		level: "query",
	},
];

if (env.NODE_ENV !== "test") {
	log.push("info", "warn", "error");
}

export const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log,
		errorFormat: "pretty",
	});

prisma.$on("query", (e) => {
	if (env.LOG_SQL) {
		console.log(`[prisma] query: ${e.query}`);
		console.log(`[prisma] query params: ${e.params}`);
		console.log(`[prisma] duration: ${e.duration}ms`);
	}
});

if (env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
