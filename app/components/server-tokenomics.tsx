// Server-rendered tokenomics chart (SVG instead of Canvas)
export default function ServerTokenomics() {
  const data = [
    { label: "💧 Liquidity", value: 25, color: "#3b82f6" },
    { label: "🔒 Private Sale", value: 20, color: "#ef4444" },
    { label: "🏆 Contests", value: 10, color: "#10b981" },
    { label: "📈 Listings", value: 10, color: "#f59e0b" },
    { label: "👥 Team", value: 10, color: "#8b5cf6" },
    { label: "🧠 Development", value: 10, color: "#06b6d4" },
    { label: "📢 Marketing", value: 5, color: "#ec4899" },
    { label: "🏛️ Treasury", value: 5, color: "#84cc16" },
    { label: "🎯 Advisors", value: 3, color: "#f97316" },
    { label: "⚡ Workers", value: 2, color: "#6366f1" },
  ]

  let cumulativePercentage = 0

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <svg viewBox="0 0 400 400" className="w-full cursor-pointer">
          <g transform="translate(200,200)">
            {data.map((item, index) => {
              const startAngle = (cumulativePercentage / 100) * 360
              const endAngle = ((cumulativePercentage + item.value) / 100) * 360
              const startAngleRad = (startAngle - 90) * (Math.PI / 180)
              const endAngleRad = (endAngle - 90) * (Math.PI / 180)

              const largeArcFlag = item.value > 50 ? 1 : 0
              const x1 = 150 * Math.cos(startAngleRad)
              const y1 = 150 * Math.sin(startAngleRad)
              const x2 = 150 * Math.cos(endAngleRad)
              const y2 = 150 * Math.sin(endAngleRad)

              const pathData = [`M 0 0`, `L ${x1} ${y1}`, `A 150 150 0 ${largeArcFlag} 1 ${x2} ${y2}`, `Z`].join(" ")

              // Label position
              const labelAngle = (startAngleRad + endAngleRad) / 2
              const labelX = 100 * Math.cos(labelAngle)
              const labelY = 100 * Math.sin(labelAngle)

              cumulativePercentage += item.value

              return (
                <g key={index} className="hover:opacity-80 transition-opacity">
                  <path d={pathData} fill={item.color} stroke="#000" strokeWidth="2" className="hover:brightness-110" />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="14"
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    {item.value}%
                  </text>
                </g>
              )
            })}

            {/* Center circle for video */}
            <circle cx="0" cy="0" r="60" fill="#000" stroke="#ff3333" strokeWidth="2" />
          </g>
        </svg>

        {/* Video in center of chart */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2767-gSYGB7uQKLekHQGnKUIQODsxPQAQtz.MP4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-2">Server-rendered tokenomics chart</p>
    </div>
  )
}
