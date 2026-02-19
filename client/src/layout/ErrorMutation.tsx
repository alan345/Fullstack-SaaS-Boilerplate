import type { TRPCClientErrorLike } from "@trpc/client"
import type { AppRouter } from "../../../server/src/router"

type Props = {
  data: TRPCClientErrorLike<AppRouter>
}

const ErrorMutation = (props: Props) => {
  if (!props.data.message) return null

  let message: string
  try {
    message = JSON.parse(props.data.message)[0].message
  } catch {
    message = props.data.message
  }

  return <p className="text-red-600">Error: {message}</p>
}

export default ErrorMutation
