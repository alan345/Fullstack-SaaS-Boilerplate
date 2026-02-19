import { fastifyTRPCPlugin, type FastifyTRPCPluginOptions } from "@trpc/server/adapters/fastify"
import Fastify, { type FastifyRequest, type FastifyReply } from "fastify"
import fastifyCookie from "@fastify/cookie"
import fastifyCors from "@fastify/cors"
import { authHandler } from "./handlers/auth.js"
import dotenv from "dotenv"
dotenv.config()
import createContext from "./context.js"
import { type AppRouter, appRouter } from "./router/index.js"

// export const mergeRouters = t.mergeRouters

const fastify = Fastify({
  routerOptions: { maxParamLength: 5000 },
})

const start = async () => {
  try {
    await fastify.register(fastifyCors, {
      credentials: true,
      origin: true, // Accept all origins
      // origin: process.env.CLIENT_URL,
    })

    await fastify.register(fastifyCookie)

    fastify.route({
      method: ["GET", "POST"],
      url: "/api/auth/*",
      handler: authHandler,
    })

    fastify.get("/", async (_request: FastifyRequest, reply: FastifyReply) => {
      return reply.send({ message: "Hello world!" })
    })

    await fastify.register(fastifyTRPCPlugin, {
      prefix: "/",
      trpcOptions: {
        router: appRouter,
        createContext,
      } as FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
    })

    // SSE route for chat
    // fastify.get("/sse", sseHandler())

    const port = Number(process.env.PORT) || 2022
    await fastify.listen({
      port,
      host: "0.0.0.0",
    })
    console.log("Server is running on port " + port)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
