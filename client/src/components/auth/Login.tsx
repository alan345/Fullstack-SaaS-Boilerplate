import React from "react"
import { Link } from "@tanstack/react-router"
import { useNavigate } from "@tanstack/react-router"
import { SignInIcon } from "@phosphor-icons/react"
import { useMutation } from "@tanstack/react-query"
import { authClient } from "../../lib/auth-client"
import { tryCatch } from "../../lib/try-catch"
import { useTRPC } from "../../lib/trpc"

const Login = () => {
  const session = authClient.useSession()
  const trpc = useTRPC()
  const mutation = useMutation(trpc.session.login.mutationOptions())

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
    setIsSubmitting(true)

    const result = await tryCatch(mutation.mutateAsync({ email: formData.email, password: formData.password }))
    if (result.error) {
      setError(result.error.message)
    }
    if (result.data) {
      navigate({ to: "/profile" })
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
