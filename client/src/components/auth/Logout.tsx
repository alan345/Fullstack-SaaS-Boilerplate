import React from "react"
import { useMutation } from "@tanstack/react-query"
import { useTRPC } from "../../utils/trpc"
import { AppContext } from "../../ContextProvider"
import { useNavigate } from "react-router"
import { SignOut } from "@phosphor-icons/react"
import ErrorMutation from "../../layout/ErrorMutation"

const Logout = () => {
  const navigate = useNavigate()
  const context = React.useContext(AppContext)
  const trpc = useTRPC()
  const mutation = useMutation(trpc.logout.mutationOptions())
  const logout = async () => {
    try {
      await mutation.mutateAsync(undefined)
      await context.updateAuth()
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button id="logout-button" disabled={mutation.isPending} onClick={logout} className="btn-blue flex items-center">
        <SignOut className="mr-2" /> Logout
      </button>
      {mutation.error && <ErrorMutation data={mutation.error} />}
    </div>
  )
}
export default Logout
