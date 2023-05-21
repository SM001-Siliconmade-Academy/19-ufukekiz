import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { userRouter } from "./routers/users";
import { productsRouter } from "./routers/products";
import { contentsRouter } from "./routers/contents";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  users: userRouter,
  products : productsRouter,
  contents : contentsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
