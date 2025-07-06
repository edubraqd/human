export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-red-500 font-mono text-sm animate-pulse">LOADING HUMAN RESISTANCE...</div>
        <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-gray-400">Initializing the last stand of humanity...</p>
      </div>
    </div>
  )
}
