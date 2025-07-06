export default function TokenomicsLegend() {
  const data = [
    { label: "Liquidity", value: 25, color: "#3b82f6", icon: "💧" },
    { label: "Private Sale", value: 20, color: "#ef4444", icon: "🔒" },
    { label: "Contests", value: 10, color: "#10b981", icon: "🏆" },
    { label: "Listings", value: 10, color: "#f59e0b", icon: "📈" },
    { label: "Team", value: 10, color: "#8b5cf6", icon: "👥" },
    { label: "Development", value: 10, color: "#06b6d4", icon: "🧠" },
    { label: "Marketing", value: 5, color: "#ec4899", icon: "📢" },
    { label: "Treasury", value: 5, color: "#84cc16", icon: "🏛️" },
    { label: "Advisors", value: 3, color: "#f97316", icon: "🎯" },
    { label: "Workers", value: 2, color: "#6366f1", icon: "⚡" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 mt-4 md:mt-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-1 md:gap-2 p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
        >
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
          <span className="text-xs mr-1">{item.icon}</span>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-medium truncate">{item.label}</span>
            <span className="text-xs text-gray-400">{item.value}%</span>
          </div>
        </div>
      ))}
    </div>
  )
}
