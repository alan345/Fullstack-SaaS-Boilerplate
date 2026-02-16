import React, { useEffect, useRef, useState } from "react"
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

type StreamBuffer = { nextIndex: number; chunks: Map<number, string> }

const SSEConnection: React.FC<Props> = ({ setMessages }) => {
  const trpcClient = useTRPCClient()
  const [isConnected, setIsConnected] = useState(false)
  const streamContentRef = useRef<Record<string, string>>({})
  const streamBufferRef = useRef<Record<string, StreamBuffer>>({})

  const drainBufferToContent = (streamId: string): string => {
    const buf = streamBufferRef.current[streamId]
    if (!buf) return streamContentRef.current[streamId] ?? ""
    let content = streamContentRef.current[streamId] ?? ""
    while (buf.chunks.has(buf.nextIndex)) {
      const chunk = buf.chunks.get(buf.nextIndex)
      if (chunk !== undefined) content += chunk
      buf.chunks.delete(buf.nextIndex)
      buf.nextIndex += 1
    }
    streamContentRef.current[streamId] = content
    return content
  }

  useEffect(() => {
    const sub = trpcClient.message.sseMessages.subscribe(undefined, {
      onData: (data) => {
        setIsConnected(true)

        if ("kind" in data) {
          if (data.kind === "streamStart") {
            streamContentRef.current[data.streamId] = ""
            streamBufferRef.current[data.streamId] = { nextIndex: 0, chunks: new Map() }
            const placeholder: ChatMessage = {
              id: data.streamId,
              message: "",
              createdAt: new Date().toISOString(),
              senderId: null,
              sender: null,
            }
            setMessages((prev) => [placeholder, ...prev])
          } else if (data.kind === "streamChunk") {
            const streamId = data.streamId
            const index = typeof (data as { index?: number }).index === "number" ? (data as { index: number }).index : 0
            let buf = streamBufferRef.current[streamId]
            if (!buf) {
              buf = { nextIndex: 0, chunks: new Map() }
              streamBufferRef.current[streamId] = buf
            }
            buf.chunks.set(index, data.chunk)
            const content = drainBufferToContent(streamId)

            setMessages((prev) => {
              const hasPlaceholder = prev.some((m) => m.id === streamId)
              const placeholder: ChatMessage = {
                id: streamId,
                message: "",
                createdAt: new Date().toISOString(),
                senderId: null,
                sender: null,
              }
              const withPlaceholder = hasPlaceholder ? prev : [placeholder, ...prev]
              return withPlaceholder.map((m) =>
                m.id === streamId ? { ...m, message: content } : m
              )
            })
          } else if (data.kind === "streamEnd") {
            delete streamContentRef.current[data.streamId]
            delete streamBufferRef.current[data.streamId]
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
