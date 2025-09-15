import { createRouter } from "@tanstack/react-router"

// Import all route files
import { routeTree } from "./routeTree.gen"

export const router = createRouter({ routeTree })

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
