import React from "react"
import { Link } from "react-router"
import { useNavigate } from "react-router"
import { SignInIcon } from "@phosphor-icons/react"
import { authClient } from "../../lib/auth-client"

const Login = () => {
  const session = authClient.useSession()
  const [showPassword, setShowPassword] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState({
    password: "securePassword",
    email: "alan@example.com",
  })

  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const { data, error: signInError } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
    })

    if (signInError) {
      setError(signInError.message ?? "Login failed")
    }
    if (data) {
      navigate("/profile")
      session.refetch()
    }

    setIsSubmitting(false)
  }

  return (
    <div className="p-6">
      <div className="flex items-center">
        <SignInIcon className="text-3xl mr-3" />
        <h1>Login</h1>
      </div>
      <form onSubmit={onSubmit} className="mt-4 space-y-2">
        <div>
          <input
            id="email-input"
            name="email"
            autoFocus
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={"input-default"}
            type="text"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            id="password-input"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className={"input-default"}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="show-password-checkbox"
            name="show-password-checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="cursor-pointer"
          />
          <label htmlFor="show-password-checkbox" className="ml-2 cursor-pointer">
            Show Password
          </label>
        </div>
        <div>
          <button
            id="email-mutation-button"
            disabled={isSubmitting}
            type="submit"
            className="btn-blue flex items-center"
          >
            <SignInIcon className="mr-2" />
            {isSubmitting ? "Loading..." : "Login"}
          </button>
          {error && <p className="text-sm mt-6 text-red-500">{error}</p>}
        </div>
        <p className="text-sm mt-6">
          Don{"'"}t have an account yet?{" "}
          <Link className="link" to="/signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
