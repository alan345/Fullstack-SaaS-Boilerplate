import { adminProcedure, protectedProcedure, router } from "../trpc.js"
import { z } from "zod"
import { sessionTable } from "@fsb/drizzle"
import { drizzleOrm } from "@fsb/drizzle"

const { count, eq } = drizzleOrm

const sessionRouter = router({
  getSessionInfo: protectedProcedure.query((opts) => {
    const s = opts.ctx.session
    const impersonatedBy =
      s && typeof s === "object" && "impersonatedBy" in s && s.impersonatedBy != null ? String(s.impersonatedBy) : null
    return { impersonatedBy }
  }),

  deleteSession: adminProcedure
    .input(
      z.object({
        sessionId: z.string(),
      })
    )
    .mutation(async (opts) => {
      const db = opts.ctx.db
      await db.delete(sessionTable).where(eq(sessionTable.id, opts.input.sessionId))

      return true
    }),

  getSessions: protectedProcedure
    .input(
      z.object({
        page: z.number(),
        search: z.string().optional(),
        userId: z.string().optional(),
      })
    )
    .query(async (opts) => {
      const page = opts.input.page
      const limit = 12
      const db = opts.ctx.db
      const sessions = await db.query.sessionTable.findMany({
        limit,
        offset: (page - 1) * limit,

        columns: { id: true, createdAt: true, userAgent: true, ipAddress: true },
        with: {
          user: {
            columns: {
              id: true,
              name: true,
              image: true,
            },
          },
        },

        where: opts.input.userId ? eq(sessionTable.userId, opts.input.userId) : undefined,
      })

      const totalData = await db.select({ count: count() }).from(sessionTable)
      // .where(opts.input.search ? ilike(devicesTable.name, `%${opts.input.search}%`) : undefined)
      const total = totalData[0].count

      return { sessions, page, limit, total }
    }),
})

export default sessionRouter
