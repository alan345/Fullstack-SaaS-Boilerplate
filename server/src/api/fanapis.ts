import axios from "axios"
import type { Game } from "../type/Game.type.js"

const uri = "https://zelda.fanapis.com/api"

type GameResponse = {
  data: Game[]
  count: number
  success: boolean
}

export const fanapis = {
  getGames: async (limit: number): Promise<GameResponse> => {
    try {
      let res = await axios.get(`${uri}/games`, {
        params: {
          limit,
        },
      })

      return res.data
    } catch (error) {
      if (axios.isAxiosError(error) && error && error.response) {
        console.log(error.response.statusText)
        throw error.response.statusText
      } else {
        throw new Error("Something went wrong!")
      }
    }
  },
}
