import { publicProcedure, router } from "../trpc.js"
import { z } from "zod"
import { fanapis } from "../api/fanapis.js"

export const gameRouter = router({
  getGames: publicProcedure
    .input(
      z.object({
        size: z.number(),
      })
    )
    .query(async ({ input }) => {
      if (input.size > 100 || input.size < 2) throw new Error("Invalid size")

      let data = await fanapis.getGames(input.size)
      console.log("data", data)
      return data
    }),
})
export default gameRouter
