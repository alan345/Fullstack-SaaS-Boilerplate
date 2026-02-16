import { protectedProcedure, publicProcedure, router } from "../trpc"
import { z } from "zod"
import { messageTable, drizzleOrm } from "@fsb/drizzle"
import { EventEmitter } from "events"
import { getOpenAICompletion } from "../ai/streamOpenAI"

const ee = new EventEmitter()
const { desc, lt } = drizzleOrm

const AI_COMMAND_PREFIX = "/ai "

type ChatMessage = {
  id: string
  name: string
  image: string
  message: string
  createdAt: Date
}
const messageRouter = router({
  sendMessage: protectedProcedure
    .input(
      z.object({
        message: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(messageTable).values({
        message: input.message,
        senderId: ctx.user.id,
      })
      const userMessage: ChatMessage = {
        id: ctx.user.id,
        name: ctx.user.name,
        image: ctx.user.image || "",
        message: input.message,
        createdAt: new Date(),
      }
      ee.emit("fsb-chat", userMessage)

      const trimmed = input.message.trim()
      if (trimmed.toLowerCase().startsWith(AI_COMMAND_PREFIX)) {
        const question = trimmed.slice(AI_COMMAND_PREFIX.length).trim()
        if (question) {
          const answer = await getOpenAICompletion(question)
          await ctx.db.insert(messageTable).values({
            message: answer,
            senderId: null,
          })
          const aiMessage: ChatMessage = {
            id: "ai",
            name: "AI",
            image: "",
            message: answer,
            createdAt: new Date(),
          }
          ee.emit("fsb-chat", aiMessage)
        }
      }

      return { success: true }
    }),
  getMessages: publicProcedure
    .input(
      z.object({
        before: z.string().datetime().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const messages = await ctx.db.query.messageTable.findMany({
        where: input.before ? lt(messageTable.createdAt, new Date(input.before)) : undefined,
        orderBy: [desc(messageTable.createdAt)],
        limit: 20,
        with: {
          sender: {
            columns: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      })
      return messages
    }),

  sseMessages: publicProcedure.subscription(async function* () {
    while (true) {
      const message = await new Promise<ChatMessage>((resolve) => {
        ee.once("fsb-chat", resolve)
      })

      yield message
    }
  }),
})

export default messageRouter
