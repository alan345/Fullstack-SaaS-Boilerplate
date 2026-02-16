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

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message or /ai to ask AI a question..."
        disabled={!isConnected}
        className="flex-1"
      />
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
