import { router } from "../trpc";
import { downloadRouter } from "./download";

export const appRouter = router({
  download: downloadRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
