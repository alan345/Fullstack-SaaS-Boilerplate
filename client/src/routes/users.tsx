import { createFileRoute } from "@tanstack/react-router"
import UsersPage from "../components/user/UsersPage"
import PrivateRoute from "../PrivateRoute"

export const Route = createFileRoute("/users")({
  component: () => <PrivateRoute element={<UsersPage />} />,
})
