import path from "path"
import { defineConfig } from "drizzle-kit"
import dotenv from "dotenv"

dotenv.config()
dotenv.config({ path: path.resolve(process.cwd(), "../../.env") })

const databaseUrl = process.env.DATABASE_URL!
if (!databaseUrl) throw new Error("DATABASE_URL is not defined. Make sure root .env is loaded.")

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: { url: databaseUrl },
})
