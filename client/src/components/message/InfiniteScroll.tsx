import React, { useEffect, useState } from "react"
import type { ChatMessage } from "../../pages/ChatPage"
import { useQuery } from "@tanstack/react-query"
import { useTRPC } from "../../lib/trpc"

interface Props {
  oldestMessageTimestamp?: string
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>
  chatContainerRef: React.RefObject<HTMLDivElement | null>
}

const InfiniteScroll: React.FC<Props> = ({ chatContainerRef, oldestMessageTimestamp, setMessages }) => {
  const trpc = useTRPC()
  const [hasMoreMessages, setHasMoreMessages] = useState(true)

  const dataQuery = useQuery(trpc.message.getMessages.queryOptions({ before: oldestMessageTimestamp }))

  const handleLoadMore = async () => {
    if (!hasMoreMessages) return
    const result = await dataQuery.refetch()
    if (result.data) {
      if (result.data.length > 0) {
        setMessages((prev) => [...prev, ...result.data])
      } else {
        setHasMoreMessages(false)
      }
    }
  }

  useEffect(() => {
    const chatContainer = chatContainerRef.current
    if (!chatContainer) return

    const handleScroll = () => {
      const threshold = 300
      const isAtTop =
        Math.abs(chatContainer.scrollHeight - chatContainer.clientHeight + chatContainer.scrollTop) <= threshold

      if (isAtTop) {
        handleLoadMore()
      }
    }

    handleScroll()

    chatContainer.addEventListener("scroll", handleScroll)
    return () => {
      chatContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}

export default InfiniteScroll
