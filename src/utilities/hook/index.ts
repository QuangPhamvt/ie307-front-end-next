import React from "react"

export const useDoubleTap = (callback: () => void, DELAY: number) => {
  const lastTap = React.useRef<number>(0)
  const handleDoubleTap = () => {
    const now = Date.now()
    if (lastTap.current && now - lastTap.current < DELAY) {
      callback()
    } else lastTap.current = now
  }
  return { handleDoubleTap }
}
