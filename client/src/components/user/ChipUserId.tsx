import { useQuery } from "@tanstack/react-query"
import { useTRPC } from "../../lib/trpc"
import { LoadingTemplate } from "../../template/LoadingTemplate"
import iconAvatar from "@fsb/client/src/assets/icons/avatar.svg"
import ErrorTemplate from "../../template/ErrorTemplate"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { XCircleIcon } from "@phosphor-icons/react"
import ImgAvatar from "../../layout/ImgAvatar"

type Props = {
  userId: string
}

const ChipUserId = (props: Props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const trpc = useTRPC()
  const dataQuery = useQuery(trpc.user.getUser.queryOptions({ id: props.userId }))
  if (dataQuery.isLoading) return <LoadingTemplate />
  if (dataQuery.isError) return <ErrorTemplate message={dataQuery.error.message} />
  if (!dataQuery.data) return null

  return (
    <div className="inline-flex items-center bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full gap-2">
      <ImgAvatar src={dataQuery.data.image ? dataQuery.data.image : iconAvatar} className="w-8 h-8" alt="Profile" />
      {dataQuery.data.name}
      <XCircleIcon
        className="text-xl cursor-pointer"
        onClick={() => {
          searchParams.delete("userId")
          navigate({ to: location.pathname, search: searchParams })
        }}
      />
    </div>
  )
}
export default ChipUserId
