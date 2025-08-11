import { Link } from "@tanstack/react-router"
import ImgAvatar from "../layout/ImgAvatar"
import AuthButtons from "./AuthButtons"
import { authClient } from "../lib/auth-client"

const AvatarMenu = () => {
  const session = authClient.useSession()

  return (
    <div className="h-8">
      <>
        {session.data?.user ? (
          <Link to="/profile">
            <div className="flex items-center justify-center">
              <ImgAvatar src={session.data.user.image} alt="Profile Image" className="w-10 h-10" />
            </div>
          </Link>
        ) : (
          <AuthButtons />
        )}
      </>
    </div>
  )
}
export default AvatarMenu
