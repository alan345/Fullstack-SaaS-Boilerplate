import { createFileRoute } from "@tanstack/react-router"
import BeersPage from "../pages/BeersPage"

export const Route = createFileRoute("/beers")({
  component: BeersPage,
})
