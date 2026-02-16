import React from "react"
import ImgAvatar from "../../layout/ImgAvatar"
import { ChatMessage } from "../../pages/ChatPage"

interface MessageProps {
  message: ChatMessage
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const text = message.message
  const startsWithAi = text.trimStart().toLowerCase().startsWith("/ai")
  const chip = startsWithAi ? "/ai" : null
  const rest = startsWithAi ? text.trimStart().slice(3).replace(/^\s+/, "") : text

  return (
    <div className="flex items-start gap-3">
      <ImgAvatar src={message.sender?.image} alt={message.sender?.name || "User"} className="w-10 h-10" />
      <div className="flex flex-col">
        <div className="text-sm text-gray-500">
          {message.sender?.name || "AI"} •{" "}
          {new Date(message.createdAt).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </div>
        <div className="text-gray-800 dark:text-gray-200 flex flex-wrap items-baseline gap-2">
          {chip !== null && (
            <span className="inline-flex items-center rounded-md bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900/40 dark:text-violet-300">
              {chip}
            </span>
          )}
          {rest && <span className="whitespace-pre-wrap">{rest}</span>}
        </div>
      </div>
    </div>
  )
}

export default Message
