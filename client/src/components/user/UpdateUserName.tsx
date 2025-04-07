import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { useTRPC } from "../../lib/trpc"
import { inferRouterOutputs } from "@trpc/server"
import { AppRouter } from "../../../../server/src/"
import { Pencil, CheckCircle2, Loader2 } from "lucide-react"
import SavedIconEffect from "./SavedIconEffect"
import ErrorMutation from "../../layout/ErrorMutation"
type RouterOutput = inferRouterOutputs<AppRouter>

type Props = {
  user: RouterOutput["getUserProfile"]
  onUpdate: () => void
}

const UpdateUserName = (props: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState(props.user.name)
  const trpc = useTRPC()
  const mutation = useMutation(trpc.updateUser.mutationOptions())

  const updateUser = async () => {
    try {
      setIsEdit(false)
      await mutation.mutateAsync({ id: props.user.id, name })
      props.onUpdate()
    } catch (error) {
      console.log(error)
    }
  }

  const label = "Name"
  return (
    <div className="move-right">
      <div className="flex items-center gap-2 h-8">
        {!isEdit ? (
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsEdit(true)}>
            <div>{label}:</div>
            <div>{props.user.name}</div>
            <Pencil className=" opacity-0 group-hover:opacity-100 transition-opacity" />
            {mutation.isSuccess && <SavedIconEffect />}
            {mutation.isPending && <Loader2 className="animate-spin" />}
          </div>
        ) : (
          <>
            <div>{label}:</div>
            <div className="relative">
              <input
                id="id-input-name"
                name="name"
                autoFocus
                onBlur={() => setIsEdit(false)}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setIsEdit(false)
                  if (e.key === "Enter") updateUser()
                }}
                style={{ paddingRight: "26px" }}
              />
              <CheckCircle2
                id="icon-check"
                onMouseDown={(e) => e.preventDefault()}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer hover:text-green-600 transition-colors"
                onClick={updateUser}
              />
            </div>
          </>
        )}
      </div>
      {mutation.error && <ErrorMutation data={mutation.error} />}
    </div>
  )
}

export default UpdateUserName
