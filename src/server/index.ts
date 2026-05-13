import { router } from "./trpc";
import { authRouter } from "@/server/router/auth-router";

export const appRouter = router({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;