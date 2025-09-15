import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import LogoApp from "./layout/LogoApp"
import { createTRPCClient, httpBatchLink, httpSubscriptionLink, splitLink } from "@trpc/client"
import { AppRouter } from "../../server/src/router"
import { TRPCProvider } from "./lib/trpc"
import { useThemeStore } from "./store/useThemeStore"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./router"
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,

        refetchOnWindowFocus: false,
        retry: false,
        gcTime: 1000 * 60 * 60 * 24 * 7,
      },
    },
  })
}
let browserQueryClient: QueryClient | undefined = undefined
function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

const App = () => {
  const { isDarkMode } = useThemeStore()
  const url = import.meta.env.VITE_URL_BACKEND
  if (!url)
    return (
      <div className="p-6">
        <LogoApp />
        <div className="flex flex-col items-center mt-12">
          <h1>Error</h1>
          <p>URL_BACKEND not set in env file</p>
        </div>
      </div>
    )

  const queryClient = getQueryClient()
  const trpcClient = createTRPCClient<AppRouter>({
    links: [
      splitLink({
        // uses the httpSubscriptionLink for subscriptions
        condition: (op) => op.type === "subscription",
        true: httpSubscriptionLink({
          url,
        }),
        false: httpBatchLink({
          url,
          fetch(url, options) {
            return fetch(url, {
              ...options,
              credentials: "include",
            })
          },
        }),
      }),
    ],
  })

  // const [queryClient] = useState(
  //   () =>
  //     new QueryClient({
  //       defaultOptions: {
  //         queries: {
  //           refetchOnWindowFocus: false,
  //           retry: false,
  //           gcTime: 1000 * 60 * 60 * 24 * 7,
  //         },
  //       },
  //     })
  // )

  // const [trpcClient] = useState(() =>
  //   trpc.createClient({
  //     links: [
  //       httpBatchLink({
  //         url,
  //         fetch(url, options) {
  //           return fetch(url, {
  //             ...options,
  //             credentials: "include",
  //           })
  //         },
  //       }),
  //     ],
  //   })
  // )
  return (
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        <div className={isDarkMode ? "dark" : "light"}>
          <QueryClientProvider client={queryClient}>
            {/* TanStack Router will handle the routing */}
            <RouterProvider router={router} />
          </QueryClientProvider>
        </div>
      </TRPCProvider>
    </QueryClientProvider>
  )
}

export default App
