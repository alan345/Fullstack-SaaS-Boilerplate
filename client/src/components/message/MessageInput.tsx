import React, { useState } from "react"
import { useTRPC } from "../../lib/trpc"
import { useMutation } from "@tanstack/react-query"

interface MessageInputProps {
  isConnected: boolean
  onSendMessage: (message: string) => void
}

const MessageInput: React.FC<MessageInputProps> = ({ isConnected, onSendMessage }) => {
  const [input, setInput] = useState("")
  const trpc = useTRPC()
  const sendMessageMutation = useMutation(trpc.message.sendMessage.mutationOptions())

  const handleSendMessage = async () => {
    if (input.trim()) {
      try {
        await sendMessageMutation.mutateAsync({ message: input })
        setInput("")
        onSendMessage(input)
      } catch (error) {
        console.error("Error sending message:", error)
      }
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage()
    }
  }

  const startsWithAi = input.trimStart().toLowerCase().startsWith("/ai")
  const chip = startsWithAi ? "/ai" : null
  const rest = startsWithAi ? input.trimStart().slice(3).replace(/^\s+/, "") : input

  const handleRestChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput("/ai " + event.target.value)
  }

  const handleRestKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && rest === "") {
      setInput("")
    }
    handleKeyDown(event)
  }

  const inputBaseClassName = "flex-1 min-w-0 w-full border-0 bg-transparent outline-none disabled:opacity-50 py-0"
  const wrapperClassName =
    "relative flex flex-1 min-w-0 items-center rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800"

  return (
    <div className="flex gap-2 flex-1 min-w-0">
      <div className={wrapperClassName}>
        {chip !== null && (
          <span className="pointer-events-none absolute left-3 inline-flex items-center rounded-md bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900/40 dark:text-violet-300">
            {chip}
          </span>
        )}
        {chip !== null ? (
          <input
            type="text"
            value={rest}
            onChange={handleRestChange}
            onKeyDown={handleRestKeyDown}
            placeholder="Ask AI a question..."
            disabled={!isConnected}
            className={`w-full !pl-12`}
          />
        ) : (
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type a message or /ai to ask AI a question..."
            disabled={!isConnected}
            className={inputBaseClassName}
          />
        )}
      </div>
      <button
        className="btn btn-blue w-24"
        onClick={handleSendMessage}
        disabled={!isConnected || sendMessageMutation.isPending || input.trim() === ""}
      >
        {sendMessageMutation.isPending ? "Sending..." : "Send"}
      </button>
    </div>
  )
}

export default MessageInput
