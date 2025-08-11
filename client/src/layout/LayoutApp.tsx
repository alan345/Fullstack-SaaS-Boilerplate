import React, { useEffect, useRef } from "react"
import AvatarMenu from "../auth/AvatarMenu"
import NavLinks from "./NavLinks"
import BurgerLogic from "./BurgerLogic"
import LogoApp from "./LogoApp"
import { Link, Outlet } from "@tanstack/react-router"
import { useThemeStore } from "../store/useThemeStore"

const LayoutApp = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const { isDarkMode } = useThemeStore()
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Check if click is outside the sidebar
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [sidebarRef])

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="flex h-screen text-gray-600 bg-white dark:bg-gray-700 dark:text-white">
        <div
          ref={sidebarRef} // Reference to the sidebar
          className={`fixed z-30 inset-y-0 left-0 w-64  transform bg-gray-50 dark:bg-gray-800 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}
        >
          <Link to="/">
            <LogoApp />
          </Link>
          <NavLinks onClick={() => setSidebarOpen(false)} />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden ">
          <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center">
              <button
                className="text-gray-500 dark:text-gray-400 focus:outline-hidden md:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <BurgerLogic sidebarOpen={sidebarOpen} />
              </button>
            </div>
            <div className="flex items-center">
              <AvatarMenu />
            </div>
          </header>

          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default LayoutApp
