import React, { useEffect, useState } from "react"
import { CircleIcon, CircleHalfIcon } from "@phosphor-icons/react"
import { useTRPCClient } from "../../lib/trpc"
import type { ChatMessage } from "../../pages/ChatPage"

const toClientMessage = (data: { id: string; name: string; image: string; message: string; createdAt: string }): ChatMessage => ({
  id: data.id,
  message: data.message,
  createdAt: data.createdAt,
  senderId: data.id,
  sender: { name: data.name, id: data.id, image: data.image },
})

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>
}

const SSEConnection: React.FC<Props> = ({ setMessages }) => {
  const trpcClient = useTRPCClient()
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const sub = trpcClient.message.sseMessages.subscribe(undefined, {
      onData: (data) => {
        setIsConnected(true)

        if ("kind" in data) {
          if (data.kind === "streamStart") {
            const placeholder: ChatMessage = {
              id: data.streamId,
              message: "",
              createdAt: new Date().toISOString(),
              senderId: null,
              sender: null,
            }
            setMessages((prev) => [placeholder, ...prev])
          } else if (data.kind === "streamChunk") {
            setMessages((prev) => {
              const hasPlaceholder = prev.some((m) => m.id === data.streamId)
              if (!hasPlaceholder) {
                const placeholder: ChatMessage = {
                  id: data.streamId,
                  message: data.chunk,
                  createdAt: new Date().toISOString(),
                  senderId: null,
                  sender: null,
                }
                return [placeholder, ...prev]
              }
              return prev.map((m) =>
                m.id === data.streamId ? { ...m, message: m.message + data.chunk } : m
              )
            })
          } else if (data.kind === "streamEnd") {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === data.streamId ? toClientMessage(data.message) : m
              )
            )
          }
        } else {
          setMessages((prev) => [toClientMessage(data), ...prev])
        }
      },
      onStarted: () => {
        setIsConnected(true)
      },

      onError: (err) => {
        console.error("Subscription error", err)
        setIsConnected(false)
      },
    })
    return () => {
      sub.unsubscribe()
    }
  }, [trpcClient, setMessages])
  // console.log(messages)
  return (
    <div className="flex items-center gap-2">
      {isConnected ? (
        <CircleIcon className="w-4 h-4 text-green-500" aria-label="Connected" />
      ) : (
        <CircleHalfIcon className="w-4 h-4 text-red-500 animate-spin" aria-label="Disconnected" />
      )}
    </div>
  )
}

export default SSEConnection
