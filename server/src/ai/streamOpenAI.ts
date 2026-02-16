import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const streamOpenAI = async function* (question: string): AsyncGenerator<string> {
  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: question }],
    stream: true,
  })

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content
    if (typeof content === "string" && content) {
      yield content
    }
  }
}

export const getOpenAICompletion = async (question: string): Promise<string> => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: question }],
    stream: false,
  })
  const content = completion.choices[0]?.message?.content
  return typeof content === "string" ? content : ""
}
