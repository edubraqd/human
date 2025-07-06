import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-red-500 font-mono text-sm">ERROR 404: HUMAN NOT FOUND</div>
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          The page you're looking for has been automated away by the machines. Return to the resistance headquarters.
        </p>
        <Link href="/">
          <Button className="bg-red-500 hover:bg-red-600">Return to $HUMAN</Button>
        </Link>
      </div>
    </div>
  )
}
