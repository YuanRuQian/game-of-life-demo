import { useEffect, useRef } from 'react'

type Timer = {
  id: NodeJS.Timer | number
}

const setCustomInterval = (callback: () => void, intervalDuration: number) => {
  if (typeof requestAnimationFrame === typeof undefined)
    return {
      id: setInterval(callback, intervalDuration),
    }

  let start = Date.now()
  const timer: Timer = {
    id: 0,
  }

  const loop = () => {
    const current = Date.now()
    if (current - start >= intervalDuration) {
      callback()
      start = Date.now()
    }
    timer.id = requestAnimationFrame(loop)
  }

  timer.id = requestAnimationFrame(loop)

  return timer
}

const isCancelAnimationFrameNotDefined = (input: unknown): input is NodeJS.Timer =>
  typeof cancelAnimationFrame === typeof undefined

const cancelCustomInterval = (timer: Timer) => {
  if (isCancelAnimationFrameNotDefined(timer.id)) return clearInterval(timer.id)
  cancelAnimationFrame(timer.id)
}

export const useInterval = (callback: () => void, intervalDuration: number) => {
  const timerRef = useRef<Timer>()

  useEffect(() => {
    if (intervalDuration < 0) return

    timerRef.current = setCustomInterval(callback, intervalDuration)

    return () => {
      if (timerRef.current) cancelCustomInterval(timerRef.current)
    }
  }, [callback, intervalDuration])

  return () => {
    if (timerRef.current) cancelCustomInterval(timerRef.current)
  }
}
