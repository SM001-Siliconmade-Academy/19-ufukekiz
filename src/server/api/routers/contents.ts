import { createTRPCRouter, publicProcedure } from "../trpc";

export const contentsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.content.findMany();
  }),
});