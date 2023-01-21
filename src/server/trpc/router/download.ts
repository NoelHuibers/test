import fs from "fs";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const downloadRouter = router({
  download: publicProcedure
    .input(z.object({ filename: z.string().nullish() }))
    .mutation(({ input }) => {
      // What i probably should use somehow here:
      const file = fs.readFileSync("./" + input.filename);
      return file.toString();
    }),
});
