import { createRootRoute, Outlet } from "@tanstack/react-router"
import LayoutApp from "../layout/LayoutApp"

export const Route = createRootRoute({
  component: () => <LayoutApp />,
})
