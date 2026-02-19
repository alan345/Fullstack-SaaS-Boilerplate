import React, { useRef } from "react"
import type { ChatMessage } from "../../pages/ChatPage"
import MessageInput from "./MessageInput"
import SSEConnection from "./SSEConnection"
import { authClient } from "../../lib/auth-client"
import AuthButtons from "../../auth/AuthButtons"
import { ChatIcon } from "@phosphor-icons/react"
import MessageGroup from "./MessageGroup"
import InfiniteScroll from "./InfiniteScroll"

interface ChatProps {
  messages: ChatMessage[]
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>
}

const Chat: React.FC<ChatProps> = ({ messages, setMessages }) => {
  const session = authClient.useSession()

  const oldestMessageTimestamp = messages.length > 0 ? messages[messages.length - 1].createdAt : undefined

  const chatContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0
    }
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-2">
        <ChatIcon className="text-3xl mr-3" />
        <h1 className="text-2xl font-bold mr-1">Chat</h1>
        <SSEConnection setMessages={setMessages} />
      </div>

      <div
        ref={chatContainerRef}
        className="flex flex-col-reverse gap-4 h-[calc(100vh-230px)] overflow-y-scroll border border-gray-300 mb-2.5 p-1.5"
      >
        <InfiniteScroll
          chatContainerRef={chatContainerRef}
          oldestMessageTimestamp={oldestMessageTimestamp}
          setMessages={setMessages}
        />
        <MessageGroup messages={messages} />
      </div>

      {session.data?.user ? (
        <MessageInput isConnected={true} onSendMessage={scrollToBottom} />
      ) : (
        <div>
          <p className="my-2 text-gray-500">Please login to chat</p>
          <AuthButtons />
        </div>
      )}
    </div>
  )
}

export default Chat
