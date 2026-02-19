import { useState } from "react"
import { PencilSimpleIcon, CheckCircleIcon, SpinnerIcon } from "@phosphor-icons/react"
import SavedIconEffect from "./SavedIconEffect"
import ErrorMutation from "../../layout/ErrorMutation"
import { useMutation } from "@tanstack/react-query"
import { useTRPC } from "../../lib/trpc"
import type { RouterOutput } from "../../lib/trpc"

type Props = {
  user: RouterOutput["user"]["getUserProfile"]
  onUpdate: () => void
}

const UpdateUserEmail = (props: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  const [email, setEmail] = useState(props.user.email)
  const trpc = useTRPC()
  const mutation = useMutation(trpc.user.updateUser.mutationOptions())

  const updateUser = async () => {
    try {
      setIsEdit(false)
      await mutation.mutateAsync({ id: props.user.id, email })
      props.onUpdate()
    } catch (error) {
      console.log(error)
    }
  }

  const label = "Email"
  return (
    <div className="move-right">
      <div className="flex items-center gap-2 h-8">
        {!isEdit ? (
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setIsEdit(true)}>
            <div>{label}:</div>
            <div>{props.user.email}</div>
            <PencilSimpleIcon className=" opacity-0 group-hover:opacity-100 transition-opacity" />
            {mutation.isSuccess && <SavedIconEffect />}
            {mutation.isPending && <SpinnerIcon className="animate-spin" />}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Name"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setIsEdit(false)
                  if (e.key === "Enter") updateUser()
                }}
                className="pr-20"
                style={{ paddingRight: "26px" }}
              />
              <CheckCircleIcon
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

export default UpdateUserEmail
