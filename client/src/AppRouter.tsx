import { RouterProvider, createRouter, createRoute, createRootRoute, Link, Outlet } from "@tanstack/react-router"
import HomePage from "./pages/HomePage"
import AuthManagement from "./components/auth/AuthManagement"
import Contact from "./pages/Contact"
import ProfilePage from "./components/auth/ProfilePage"
import UsersPage from "./components/user/UsersPage"
import Signup from "./components/auth/Signup"
import BeersPage from "./pages/BeersPage"
import { HouseIcon } from "@phosphor-icons/react"
import SessionsPage from "./components/session/SessionsPage"
import ChatPage from "./pages/ChatPage"
import { authClient } from "./lib/auth-client"

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const session = authClient.useSession()
  if (session.isPending) return <div className="p-6">Loading!</div>
  if (!session.data?.user?.role) {
    return (
      <div className="p-6">
        <h1>Error</h1>
        <p>This page is private.</p>
        <AuthManagement />
      </div>
    )
  }
  return <>{children}</>
}

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
  errorComponent: () => (
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
  ),
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})
const beersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/beers",
  component: BeersPage,
})
const chatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chat",
  component: ChatPage,
})
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
})
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: AuthManagement,
})
const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: Signup,
})
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: () => (
    <PrivateRoute>
      <ProfilePage />
    </PrivateRoute>
  ),
})
const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: () => (
    <PrivateRoute>
      <UsersPage />
    </PrivateRoute>
  ),
})
const sessionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sessions",
  component: () => (
    <PrivateRoute>
      <SessionsPage />
    </PrivateRoute>
  ),
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  beersRoute,
  chatRoute,
  contactRoute,
  loginRoute,
  signupRoute,
  profileRoute,
  usersRoute,
  sessionsRoute,
])

const router = createRouter({ routeTree })

const AppRouter = () => {
  return <RouterProvider router={router} />
}
export default AppRouter
