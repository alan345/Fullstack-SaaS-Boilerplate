import { useQuery } from "@tanstack/react-query"
import { useTRPC } from "../lib/trpc"
import { authClient } from "../lib/auth-client"
import { UserSwitchIcon } from "@phosphor-icons/react"

const ImpersonationBanner = () => {
  const trpc = useTRPC()
  const session = authClient.useSession()
  const sessionInfoQuery = useQuery({
    ...trpc.session.getSessionInfo.queryOptions(undefined),
    staleTime: 0,
    enabled: Boolean(session.data?.user),
  })

  const impersonatedBy = sessionInfoQuery.data?.impersonatedBy ?? null
  const isImpersonating = Boolean(impersonatedBy)
  const currentUserName = session.data?.user?.name ?? "this user"

  const handleStopImpersonating = async () => {
    const { error } = await authClient.admin.stopImpersonating({})
    if (error) {
      console.error("Stop impersonating failed:", error.message)
      return
    }
    session.refetch()
    await sessionInfoQuery.refetch()
  }

  if (!isImpersonating) return null

  return (
    <div className="flex items-center justify-center gap-3 px-4 py-2 bg-amber-500 text-amber-950 dark:bg-amber-600 dark:text-amber-100 text-sm font-medium">
      <UserSwitchIcon className="text-lg shrink-0" />
      <span>Viewing as {currentUserName}</span>
      <button
        type="button"
        onClick={handleStopImpersonating}
        className="shrink-0 px-3 py-1 rounded bg-amber-700 text-amber-100 hover:bg-amber-800 dark:bg-amber-500 dark:text-amber-950 dark:hover:bg-amber-400 transition-colors"
      >
        Cancel
      </button>
    </div>
  )
}

export default ImpersonationBanner
