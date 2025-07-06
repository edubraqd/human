"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date("2025-07-07T20:00:00Z").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-2 md:gap-4 mt-2 justify-center md:justify-start">
      <div className="text-center">
        <div className="text-xl md:text-3xl font-bold">{timeLeft.days}</div>
        <div className="text-xs text-gray-500">DAYS</div>
      </div>
      <div className="text-center">
        <div className="text-xl md:text-3xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs text-gray-500">HOURS</div>
      </div>
      <div className="text-center">
        <div className="text-xl md:text-3xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs text-gray-500">MINUTES</div>
      </div>
      <div className="text-center">
        <div className="text-xl md:text-3xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs text-gray-500">SECONDS</div>
      </div>
    </div>
  )
}
