import { Link, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import AuthManagement from "./components/auth/AuthManagement"
import Contact from "./pages/Contact"
import ProfilePage from "./components/auth/ProfilePage"
import PrivateRoute from "./PrivateRoute"
import UsersPage from "./components/user/UsersPage"
import Signup from "./components/auth/Signup"
import GamesPage from "./pages/GamesPage"
import { HouseIcon } from "@phosphor-icons/react"
import SessionsPage from "./components/session/SessionsPage"
import ChatPage from "./pages/ChatPage"

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<AuthManagement />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
      <Route path="/users" element={<PrivateRoute element={<UsersPage />} />} />
      <Route path="/sessions" element={<PrivateRoute element={<SessionsPage />} />} />
      <Route
        path="*"
        element={
          <div className="p-6">
            <h1>Error</h1>
            <p>Nothing to see here..</p>
            <div className="mt-8">
              <Link to="/">
                <button id="id-home-button" className="btn-blue flex items-center">
                  <HouseIcon className="mr-2" />
                  Go home
                </button>
              </Link>
            </div>
          </div>
        }
      />
    </Routes>
  )
}
export default AppRouter
