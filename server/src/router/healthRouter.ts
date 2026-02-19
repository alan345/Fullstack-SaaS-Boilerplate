import { publicProcedure, router } from "../trpc.js"

const healthRouter = router({
  trpc: publicProcedure.query(() => {
    return { message: "ok" }
  }),
})
export default healthRouter
