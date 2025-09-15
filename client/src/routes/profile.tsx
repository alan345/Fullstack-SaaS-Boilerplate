import { createFileRoute } from "@tanstack/react-router"
import ProfilePage from "../components/auth/ProfilePage"
import PrivateRoute from "../PrivateRoute"

export const Route = createFileRoute("/profile")({
  component: () => <PrivateRoute element={<ProfilePage />} />,
})
