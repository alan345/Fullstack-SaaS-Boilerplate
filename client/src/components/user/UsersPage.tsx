import { Link, useLocation, useNavigate } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { useTRPC } from "../../lib/trpc"
import ErrorTemplate from "../../template/ErrorTemplate"
import Pagination from "../../layout/Pagination"
import ImgAvatar from "../../layout/ImgAvatar"
import Search from "../search/Search"
import { UsersIcon, WarningCircleIcon, MonitorIcon, UserSwitchIcon } from "@phosphor-icons/react"
import utils from "../../lib/utils"
import ChipUserId from "./ChipUserId"
import { authClient } from "../../lib/auth-client"

const UsersPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const session = authClient.useSession()
  const query = new URLSearchParams(location.search)
  const page = query.get("page")
  const search = query.get("search") || undefined
  const userId = query.get("userId") || undefined
  const trpc = useTRPC()
  const dataQuery = useQuery(trpc.user.getUsers.queryOptions({ page: utils.sanitizePage(page), search, userId }))
  const currentUserId = session.data?.user?.id
  const isAdmin = session.data?.user?.role === "admin"

  const handleImpersonate = async (targetUserId: string) => {
    const { data, error } = await authClient.admin.impersonateUser({ userId: targetUserId })
    if (error) {
      console.error("Impersonate failed:", error.message)
      return
    }
    if (data) {
      session.refetch()
      navigate("/profile")
    }
  }

  if (dataQuery.isError) return <ErrorTemplate message={dataQuery.error.message} />

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center">
            <UsersIcon className="text-3xl mr-3" />
            <h1>Users</h1>
          </div>

          <p>This page is private. You can access it only when logged in.</p>
          <div className="mt-4 mb-4">
            {userId ? (
              <div className="mb-4">
                <ChipUserId userId={userId} />
              </div>
            ) : (
              <Search />
            )}
          </div>
          <div className="overflow-x-auto w-full">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Created At</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Avatar</th>
                  <th>Sessions</th>
                  {isAdmin && <th>Impersonate</th>}
                </tr>
              </thead>
              <tbody>
                {dataQuery.data?.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{new Date(user.createdAt).toLocaleString()}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>
                      <ImgAvatar src={user.image} alt="Profile Image" className="w-10 h-10" />
                    </td>
                    <td>
                      <Link className="link" to={`/sessions?userId=${user.id}`}>
                        <button className="btn-white">
                          <MonitorIcon className="text-2xl" />
                        </button>
                      </Link>
                    </td>
                    {isAdmin && (
                      <td>
                        {user.id !== currentUserId ? (
                          <button
                            type="button"
                            className="btn-white"
                            onClick={() => handleImpersonate(user.id)}
                            title="Impersonate user"
                          >
                            <UserSwitchIcon className="text-2xl" />
                          </button>
                        ) : (
                          <span className="text-gray-400 text-sm">—</span>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {dataQuery.data?.users.length === 0 && (
            <div className="flex justify-center items-center mt-10">
              <div className="flex items-center gap-2">
                <WarningCircleIcon className="text-4xl text-orange-400" />
                <div>No users found</div>
              </div>
            </div>
          )}
          {dataQuery.isLoading && <div>Loading...</div>}
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="sticky bottom-0 h-10 mr-6 mt-4">
          <div className="flex justify-end">
            {dataQuery.data && (
              <Pagination limit={dataQuery.data.limit} page={dataQuery.data.page} total={dataQuery.data.total} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersPage
