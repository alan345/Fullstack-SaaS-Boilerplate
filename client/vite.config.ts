import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import dotenv from "dotenv"
import { tanstackRouter } from "@tanstack/router-vite-plugin"
dotenv.config({ path: "./client.env" })

export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  plugins: [react(), tailwindcss(), tanstackRouter()],
})
