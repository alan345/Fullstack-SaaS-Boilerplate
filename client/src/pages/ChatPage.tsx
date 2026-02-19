import Chat from "../components/message/Chat"
import { useEffect, useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useTRPC } from "../lib/trpc"
import type { RouterOutput } from "../lib/trpc"
export type ChatMessage = RouterOutput["message"]["getMessages"][number]

const ChatPage = () => {
  const trpc = useTRPC()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const dataQuery = useQuery(trpc.message.getMessages.queryOptions({}))
  const initialLoadDone = useRef(false)

  useEffect(() => {
    if (dataQuery.data && !initialLoadDone.current) {
      initialLoadDone.current = true
      setMessages(dataQuery.data)
    }
  }, [dataQuery.data])

  return <Chat messages={messages} setMessages={setMessages} />
}

export default ChatPage
