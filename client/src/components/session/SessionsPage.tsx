import { Link, useLocation } from "@tanstack/react-router"
import { useTRPC } from "../../lib/trpc"
import ErrorTemplate from "../../template/ErrorTemplate"
import Pagination from "../../layout/Pagination"
import ImgAvatar from "../../layout/ImgAvatar"
import { MonitorIcon, WarningCircleIcon } from "@phosphor-icons/react"
import utils from "../../lib/utils"
import DeviceImage from "./DeviceImage"
import ChipUserId from "../user/ChipUserId"
import DeleteDevice from "./DeleteSession"
import { useQuery } from "@tanstack/react-query"

const SessionsPage = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const page = query.get("page")
  const search = query.get("search") || undefined
  const userId = query.get("userId") || undefined
  const trpc = useTRPC()
  const dataQuery = useQuery(trpc.session.getSessions.queryOptions({ page: utils.sanitizePage(page), search, userId }))
  if (dataQuery.isError) return <ErrorTemplate message={dataQuery.error.message} />
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center">
            <MonitorIcon className="text-3xl mr-3" />
            <h1>Sessions</h1>
          </div>
          <p>This page is private. You can access it only when logged in.</p>

          <div className="mt-4 mb-4">
            {userId && <ChipUserId userId={userId} />}
            {/* <Search /> */}
          </div>

          <div className="overflow-x-auto w-full">
            <table className="table-auto ">
              <thead>
                <tr>
                  <th>Device</th>
                  <th>Created At</th>
                  <th>User</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dataQuery.data?.sessions.map((session) => (
                  <tr key={session.id}>
                    <td>
                      <DeviceImage
                        deviceName={utils.getDeviceName(session.userAgent || "")}
                        className={`text-3xl ${session.id === "" ? "text-[#034DA2]" : ""}`}
                      />
                      <div className={`${session.id === "" ? "text-[#034DA2]" : ""}`}>
                        {utils.getDeviceName(session.userAgent || "")}
                      </div>
                      {session.ipAddress && session.ipAddress !== "::1" && (
                        <div className="text-xxs">{session.ipAddress}</div>
                      )}
                    </td>
                    <td>{new Date(session.createdAt).toLocaleString()}</td>
                    <td>
                      <ImgAvatar src={session.user.image} alt="Profile Image" className="w-10 h-10" />
                      <Link className="link" to={`/users?userId=${session.user.id}`}>
                        <span>{session.user.name}</span>
                      </Link>
                    </td>
                    <td>
                      <DeleteDevice sessionId={session.id} onDelete={() => dataQuery.refetch()} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {dataQuery.data?.sessions.length === 0 && (
            <div className="flex justify-center items-center mt-10">
              <div className="flex items-center gap-2">
                <WarningCircleIcon className="text-4xl text-orange-400" />
                <div>No sessions found</div>
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

export default SessionsPage
