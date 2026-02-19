import { initUsersData, messages } from "./initUsersData"
import { drizzle } from "drizzle-orm/node-postgres"
import { eq } from "drizzle-orm"
import { userTable, verificationTable, accountTable, sessionTable, messageTable } from "../db/schema"
import * as schema from "../db/schema"
import path from "path"
import dotenv from "dotenv"

// Load .env from cwd or monorepo root (works when run via pnpm run seed from root or from packages/drizzle)
dotenv.config({ path: path.resolve(process.cwd(), ".env") })
dotenv.config({ path: path.resolve(process.cwd(), "..", "..", ".env") })
const databaseUrl = process.env.DATABASE_URL!
if (!databaseUrl) throw new Error("databaseUrl is not defined. Make sure .env is loaded.")

const db = drizzle(databaseUrl, { schema })

const getRandomMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length)
  return messages[randomIndex]
}

const getRandomDate = () => {
  const now = new Date()
  const oneYearAgo = new Date(now.getTime() - 120 * 24 * 60 * 60 * 1000) // 120 days ago
  return new Date(oneYearAgo.getTime() + Math.random() * (now.getTime() - oneYearAgo.getTime()))
}

const main = async () => {
  console.log(`Seeding ${databaseUrl}...`)

  await db.delete(messageTable)
  await db.delete(verificationTable)
  await db.delete(accountTable)
  await db.delete(sessionTable)
  await db.delete(userTable)

  for (const user of initUsersData) {
    let userNew = await db.insert(userTable).values(user).returning({ id: userTable.id })
    console.log(`Inserted user ${userNew[0].id}`)
    await db.insert(accountTable).values({
      userId: userNew[0].id,
      providerId: "credential",
      accountId: userNew[0].id,
      password: user.password,
    })
    console.log(`Inserted account for user ${userNew[0].id}`)
    for (let i = 0; i < 10; i++) {
      await db.insert(messageTable).values({
        senderId: userNew[0].id,
        message: getRandomMessage(),
        createdAt: getRandomDate(),
      })
      console.log(`Inserted message ${i + 1} for user ${userNew[0].id}`)
    }
  }

  const userCheck = await db.query.userTable.findFirst({
    where: eq(userTable.email, "alan@example.com"),
    columns: { id: true, name: true, image: true },
  })

  console.log(userCheck)
  console.log(`Done!`)
  process.exit(0)
}
main()
