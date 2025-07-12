import { useMutation } from "@tanstack/react-query"
import { useTRPC } from "../../lib/trpc"
import { TrashIcon } from "@phosphor-icons/react"
import { tryCatch } from "../../lib/try-catch"
import { useState } from "react"

type Props = {
  sessionId: string
  onDelete: () => void
}

const DeleteSession = (props: Props) => {
  const trpc = useTRPC()
  const [error, setError] = useState<string | null>(null)
  const mutation = useMutation(trpc.session.deleteSession.mutationOptions())

  const deleteSession = async () => {
    const result = await tryCatch(mutation.mutateAsync({ sessionId: props.sessionId }))
    if (result.error) {
      setError(result.error.message)
    }
    if (result.data) {
      props.onDelete()
    }
  }

  return (
    <div>
      <button
        id="delete-session-button"
        disabled={mutation.isPending}
        onClick={deleteSession}
        className="btn-white flex items-center"
      >
        <TrashIcon className="mr-2" /> Delete
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  )
}
export default DeleteSession
