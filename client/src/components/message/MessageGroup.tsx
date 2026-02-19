import React from "react"
import type { ChatMessage } from "../../pages/ChatPage"
import Message from "./Message"

interface MessageGroupProps {
  messages: ChatMessage[]
}

const formatDate = (dateString: string) => {
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  const date = new Date(dateString)
  const isToday = date.toDateString() === today.toDateString()
  const isYesterday = date.toDateString() === yesterday.toDateString()

  if (isToday) return "Today"
  if (isYesterday) return "Yesterday"

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

const groupMessagesByDay = (messages: ChatMessage[]) => {
  const grouped = messages.reduce(
    (acc, message) => {
      const date = new Date(message.createdAt).toLocaleDateString("en-US")

      const existingGroup = acc.find((group) => group[0] === date)
      if (existingGroup) {
        existingGroup[1].push(message)
      } else {
        acc.push([date, [message]])
      }
      return acc
    },
    [] as [string, ChatMessage[]][],
  )
  return grouped
}

const MessageGroup: React.FC<MessageGroupProps> = ({ messages }) => {
  const groupedMessages = groupMessagesByDay(messages)

  return (
    <>
      {groupedMessages.map((group) => (
        <React.Fragment key={group[0]}>
          {group[1].map((msg, index) => (
            <Message key={index} message={msg} />
          ))}
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <p className="text-lg font-bold whitespace-nowrap">{formatDate(group[0])}</p>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
        </React.Fragment>
      ))}
    </>
  )
}

export default MessageGroup
