"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-red-500 font-mono text-sm">SYSTEM ERROR: AI INTERFERENCE DETECTED</div>
        <h1 className="text-6xl font-bold text-red-500">ERROR</h1>
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          The machines are trying to stop the resistance. Don't let them win - try again!
        </p>
        <Button onClick={reset} className="bg-red-500 hover:bg-red-600">
          Fight Back - Try Again
        </Button>
      </div>
    </div>
  )
}
