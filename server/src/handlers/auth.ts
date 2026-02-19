import type { FastifyRequest, FastifyReply } from "fastify"
import { auth } from "../lib/auth"

export async function authHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    // Construct request URL
    const url = new URL(request.url, `http://${request.headers.host}`)

    // Convert Fastify headers to standard Headers object
    const headers = new Headers()
    Object.entries(request.headers).forEach(([key, value]) => {
      if (value) headers.append(key, value.toString())
    })

    // Create Fetch API-compatible request
    const req = new Request(url.toString(), {
      method: request.method,
      headers,
      body: request.body ? JSON.stringify(request.body) : undefined,
    })

    // Process authentication request
    const response = await auth.handler(req)

    // Forward response to client
    reply.status(response.status)
    response.headers.forEach((value, key) => reply.header(key, value))
    reply.send(response.body ? await response.text() : null)
  } catch (error) {
    console.error("Authentication Error:", error)
    reply.status(500).send({
      error: "Internal authentication error",
      code: "AUTH_FAILURE",
    })
  }
}
