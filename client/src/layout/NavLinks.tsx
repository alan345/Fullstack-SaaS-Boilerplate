import { Link, useRouter } from "@tanstack/react-router"
import {
  HouseIcon,
  MonitorIcon,
  UsersIcon,
  PencilSimpleIcon,
  WineIcon,
  MoonIcon,
  SunIcon,
  GithubLogoIcon,
  ChatIcon,
} from "@phosphor-icons/react"
import { authClient } from "../lib/auth-client"
import { useThemeStore } from "../store/useThemeStore"

type Props = {
  onClick: () => void
}

const NavLinks = (props: Props) => {
  const session = authClient.useSession()
  const { isDarkMode, toggleDarkMode } = useThemeStore()
  const router = useRouter()

  const isActive = (path: string) => {
    return router.state.location.pathname === path
  }

  return (
    <div>
      <nav className="px-4 py-6">
        <Link
          onClick={props.onClick}
          to="/"
          className={`block py-2.5 px-4 rounded-sm transition ${
            isActive("/") ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-900"
          }`}
        >
          <div className="flex items-center">
            <HouseIcon className="mr-2" weight="fill" />
            Home
          </div>
        </Link>
        <Link
          onClick={props.onClick}
          to="/beers"
          className={`block py-2.5 px-4 rounded-sm transition ${
            isActive("/beers") ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-900"
          }`}
        >
          <div className="flex items-center">
            <WineIcon className="mr-2" weight="fill" />
            Beers
          </div>
        </Link>
        <Link
          onClick={props.onClick}
          to="/chat"
          className={`block py-2.5 px-4 rounded-sm transition ${
            isActive("/chat") ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-900"
          }`}
        >
          <div className="flex items-center">
            <ChatIcon className="mr-2" weight="fill" />
            Chat
          </div>
        </Link>
        {session.data?.user && (
          <Link
            onClick={props.onClick}
            to="/users"
            className={`block py-2.5 px-4 rounded-sm transition ${
              isActive("/users") ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-900"
            }`}
          >
            <div className="flex items-center">
              <UsersIcon className="mr-2" weight="fill" />
              Users
            </div>
          </Link>
        )}
        {session.data?.user && (
          <Link
            onClick={props.onClick}
            to="/sessions"
            className={`block py-2.5 px-4 rounded-sm transition ${
              isActive("/sessions") ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-900"
            }`}
          >
            <div className="flex items-center">
              <MonitorIcon className="mr-2" weight="fill" />
              Sessions
            </div>
          </Link>
        )}
        <Link
          onClick={props.onClick}
          to="/contact"
          className={`block py-2.5 px-4 rounded-sm transition ${
            isActive("/contact") ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-100 dark:hover:bg-gray-900"
          }`}
        >
          <div className="flex items-center">
            <PencilSimpleIcon className="mr-2" weight="fill" />
            Contact
          </div>
        </Link>
        <Link
          onClick={props.onClick}
          to="https://github.com/alan345/Fullstack-SaaS-Boilerplate"
          className={`block py-2.5 px-4 rounded-sm transition hover:bg-gray-100 dark:hover:bg-gray-900`}
        >
          <div className="flex items-center">
            <GithubLogoIcon className="mr-2" weight="fill" />
            Github
          </div>
        </Link>
        <div className="mt-10">
          <button
            onClick={toggleDarkMode}
            className="block py-2.5 px-4 rounded-sm transition hover:bg-gray-100 dark:hover:bg-gray-900 w-full text-left"
          >
            <div className="flex items-center">
              {isDarkMode ? <SunIcon className="mr-2" weight="fill" /> : <MoonIcon className="mr-2" weight="fill" />}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </div>
          </button>
        </div>
      </nav>
    </div>
  )
}
export default NavLinks
