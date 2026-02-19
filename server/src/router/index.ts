import userRouter from "./userRouter.js"
import sessionRouter from "./sessionRouter.js"
import healthRouter from "./healthRouter.js"
import gameRouter from "./gameRouter.js"
import messageRouter from "./messageRouter.js"
import { router } from "../trpc.js"

export const appRouter = router({
  session: sessionRouter,
  health: healthRouter,
  game: gameRouter,
  user: userRouter,
  message: messageRouter,
})

export type AppRouter = typeof appRouter
