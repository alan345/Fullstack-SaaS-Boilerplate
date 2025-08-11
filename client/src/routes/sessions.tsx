import { createFileRoute } from "@tanstack/react-router"
import SessionsPage from "../components/session/SessionsPage"
import PrivateRoute from "../PrivateRoute"

export const Route = createFileRoute("/sessions")({
  component: () => <PrivateRoute element={<SessionsPage />} />,
})
