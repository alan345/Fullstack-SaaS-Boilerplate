import React from "react"
import { Link, useNavigate } from "@tanstack/react-router"
import { KeyIcon } from "@phosphor-icons/react"
import { authClient } from "../../lib/auth-client"
import { useTRPC } from "../../lib/trpc"
import { useMutation } from "@tanstack/react-query"
import { tryCatch } from "../../lib/try-catch"

const Signup = () => {
  const session = authClient.useSession()
  const trpc = useTRPC()
  const mutation = useMutation(trpc.session.signup.mutationOptions())

  const navigate = useNavigate()

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = React.useState<string | null>(null)
  const [showPassword, setShowPassword] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const result = await tryCatch(
      mutation.mutateAsync({ email: formData.email, password: formData.password, name: formData.name }),
    )
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
        <KeyIcon className="text-3xl mr-3" />
        <h1>Sign up</h1>
      </div>
      <form onSubmit={onSubmit} className="mt-4 space-y-2">
        <div>
          <input
            id="name-input"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={"input-default"}
            type="text"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            id="email-input"
            name="email"
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

        <button type="submit" disabled={isSubmitting} className="btn-blue flex items-center">
          <KeyIcon className="mr-2" />
          {isSubmitting ? <span>Signing up...</span> : <span>Sign up</span>}
        </button>
        {error && <p className="text-sm mt-6 text-red-500">{error}</p>}
      </form>
      <p className="text-sm mt-6">
        I have an account{" "}
        <Link className="link" to="/login">
          Login
        </Link>
      </p>
    </div>
  )
}

export default Signup
