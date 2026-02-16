import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify"
import { drizzleOrm_NodePostgres } from "@fsb/drizzle"
import { drizzleOrm } from "@fsb/drizzle"
const { eq } = drizzleOrm
const { drizzle } = drizzleOrm_NodePostgres
import { userTable } from "@fsb/drizzle"
import * as schema from "@fsb/drizzle"
import dotenv from "dotenv"
dotenv.config()
import { fromNodeHeaders } from "better-auth/node"
import { auth } from "./lib/auth"

const databaseUrl = process.env.DATABASE_URL!
if (!databaseUrl) throw new Error("databaseUrl is not defined. Make sure server.env is loaded.")

if (!databaseUrl) throw new Error("DATABASE_URL is not defined")
const config = { databaseUrl }
export const db = drizzle(databaseUrl, { schema })

const createContext = async ({ req, res }: CreateFastifyContextOptions) => {
  const headers = fromNodeHeaders(req.headers)
  const data = await auth.api.getSession({
    headers, //some endpoint might require headers
  })

  if (data) {
    try {
      const user = await db.query.userTable.findFirst({ where: eq(userTable.id, data.user.id) })
      if (!user) throw new Error("User not found")

      return { req, res, user, db, config }
    } catch (error) {
      console.log("error", error)
    }
  }
  return { req, res, db, config }
}

export default createContext
