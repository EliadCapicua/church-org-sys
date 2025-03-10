import { authRouter } from "./router/auth";
import { orgRouter } from "./router/org";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
	auth: authRouter,
	org: orgRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
