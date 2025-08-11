import { createFileRoute } from "@tanstack/react-router"
import AuthManagement from "../components/auth/AuthManagement"

export const Route = createFileRoute("/login")({
  component: AuthManagement,
})
