import ProfileQuery from "./ProfileQuery"
import Logout from "./Logout"
import { Link } from "@tanstack/react-router"
import { MonitorIcon, UserCircleIcon } from "@phosphor-icons/react"
import { authClient } from "../../lib/auth-client"

const ProfilePage = () => {
  const session = authClient.useSession()

  if (!session.data?.user) {
    return null
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <UserCircleIcon className="text-3xl mr-3" />
          <h1>Profile</h1>
        </div>

        <Logout />
      </div>
      <ProfileQuery meId={session.data.user.id} />
      <div className="mt-2">
        <Link className="link" to={`/sessions?userId=${session.data.user.id}`}>
          <button className="btn-white">
            <div className="flex items-center">
              <MonitorIcon className="text-xl mr-2" /> Sessions
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}
export default ProfilePage
