import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().min(1),
		NODE_ENV: z.enum(["development", "production", "test"]).optional(),
		LOG_SQL: z.boolean().optional().default(false),
	},
	client: {},
	experimental__runtimeEnv: {
		LOG_SQL: process.env.LOG_SQL === "true",
	},
	skipValidation:
		!!process.env.CI || process.env.npm_lifecycle_event === "lint",
});
