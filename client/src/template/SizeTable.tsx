import React from "react"
import { useSearch } from "@tanstack/react-router"

type Props = {
  initSize: number
}
export function SizeTable(props: Props) {
  const search = useSearch({ from: "/beers" })
  const sizeUrl = search.size
  const [sizeInput, setSizeInput] = React.useState(sizeUrl || props.initSize.toString())

  return (
    <input
      type="number"
      className="w-12"
      placeholder="#"
      value={sizeInput}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          search.set({ size: sizeInput })
        }
      }}
      onChange={(e) => {
        if (Number(e.target.value) < 100 && Number(e.target.value) >= 0) {
          setSizeInput(e.target.value)
        }
      }}
    />
  )
}
