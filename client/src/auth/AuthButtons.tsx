import { Link } from "@tanstack/react-router"
import { SignInIcon, KeyIcon } from "@phosphor-icons/react"

const AuthButtons = () => {
  return (
    <div className="flex gap-2">
      <Link to="/login">
        <button id="login-button" className="btn-white  flex items-center">
          <SignInIcon className="mr-2" />
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button id="signup-button" className="btn-white flex items-center">
          <KeyIcon className="mr-2" />
          Sign up
        </button>
      </Link>
    </div>
  )
}
export default AuthButtons
