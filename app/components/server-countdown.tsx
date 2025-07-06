// Server-side countdown component
export default function ServerCountdown() {
  // Calculate server-side time remaining
  const targetDate = new Date("2025-07-07T20:00:00Z").getTime()
  const now = new Date().getTime()
  const difference = targetDate - now

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return (
    <div className="flex gap-2 md:gap-4 mt-2 justify-center md:justify-start">
      <div className="text-center">
        <div className="text-xl md:text-3xl font-bold">{days > 0 ? days : 0}</div>
        <div className="text-xs text-gray-500">DAYS</div>
      </div>
      <div className="text-center">
        <div className="text-xl md:text-3xl font-bold">{hours > 0 ? hours : 0}</div>
        <div className="text-xs text-gray-500">HOURS</div>
      </div>
      <div className="text-center">
        <div className="text-xl md:text-3xl font-bold">{minutes > 0 ? minutes : 0}</div>
        <div className="text-xs text-gray-500">MINUTES</div>
      </div>
      <div className="text-center">
        <div className="text-xl md:text-3xl font-bold">{seconds > 0 ? seconds : 0}</div>
        <div className="text-xs text-gray-500">SECONDS</div>
      </div>
    </div>
  )
}
