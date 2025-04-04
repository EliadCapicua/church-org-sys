import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		AUTH_SECRET:
			process.env.NODE_ENV === "production"
				? z.string().min(1)
				: z.string().min(1).optional(),
		NODE_ENV: z.enum(["development", "production", "test"]).optional(),
		USE_TRUST_PROXY: z.boolean().default(true),
	},
	client: {},
	experimental__runtimeEnv: {
		USE_TRUST_PROXY: process.env.USER_TRUST_PROXY === "true",
	},
	skipValidation:
		!!process.env.CI || process.env.npm_lifecycle_event === "lint",
});
