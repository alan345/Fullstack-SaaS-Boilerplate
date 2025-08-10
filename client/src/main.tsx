import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { RouterProvider, createRouter, createRootRoute, createRoute } from "@tanstack/react-router"

const rootRoute = createRootRoute()
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
})
const routeTree = rootRoute.addChildren([indexRoute])
const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
