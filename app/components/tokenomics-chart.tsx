"use client"

import { useEffect, useRef } from "react"

export default function TokenomicsChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Updated tokenomics data
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

    // Animation variables
    let animationFrame: number
    let rotation = 0
    let hoverSegment = -1
    let pulseFactor = 1
    let pulseDirection = 0.01
    let animationProgress = 0
    let powerSurge = 0
    let powerSurgeActive = false
    let powerSurgeDirection = 0.05

    // Particles array
    const particles: {
      x: number
      y: number
      size: number
      speed: number
      color: string
      angle: number
      life: number
      maxLife: number
    }[] = []

    // Handle mouse movement for interactive segments
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Calculate distance from center
      const dx = x - centerX
      const dy = y - centerY
      const distance = Math.sqrt(dx * dx + dy * dy)

      // If within the pie chart radius
      if (distance <= Math.min(centerX, centerY) * 0.8) {
        // Calculate angle
        let angle = Math.atan2(dy, dx)
        if (angle < 0) angle += Math.PI * 2

        // Adjust for rotation
        angle = (angle - rotation + Math.PI * 2) % (Math.PI * 2)

        // Find which segment the angle belongs to
        let startAngle = 0
        for (let i = 0; i < data.length; i++) {
          const endAngle = startAngle + (data[i].value / 100) * (Math.PI * 2)
          if (angle >= startAngle && angle <= endAngle) {
            if (hoverSegment !== i) {
              // Create particles burst when changing segments
              createParticleBurst(centerX, centerY, 15, data[i].color)
            }
            hoverSegment = i
            canvas.style.cursor = "pointer"
            return
          }
          startAngle = endAngle
        }
      }

      hoverSegment = -1
      canvas.style.cursor = "default"
    }

    // Handle click to trigger power surge
    const handleClick = () => {
      if (!powerSurgeActive) {
        powerSurgeActive = true
        powerSurge = 0

        // Create a massive particle burst
        createParticleBurst(canvas.width / 2, canvas.height / 2, 50, "#ffffff")
      }
    }

    // Create particle burst
    const createParticleBurst = (x: number, y: number, count: number, color: string) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x,
          y,
          size: 1 + Math.random() * 3,
          speed: 1 + Math.random() * 3,
          color,
          angle: Math.random() * Math.PI * 2,
          life: 0,
          maxLife: 30 + Math.random() * 30,
        })
      }
    }

    // Periodically create small particle bursts
    const particleInterval = setInterval(() => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const randomSegment = Math.floor(Math.random() * data.length)
      createParticleBurst(centerX, centerY, 3, data[randomSegment].color)
    }, 3000)

    // Draw function
    const draw = () => {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxRadius = Math.min(centerX, centerY) * 0.9

      // Calculate current radius based on animation progress
      const radius = maxRadius * Math.min(1, animationProgress)

      // Update animation progress
      if (animationProgress < 1) {
        animationProgress += 0.02
      }

      // Update pulse effect
      pulseFactor += pulseDirection
      if (pulseFactor > 1.05) pulseDirection = -0.01
      if (pulseFactor < 0.95) pulseDirection = 0.01

      // Update power surge effect
      if (powerSurgeActive) {
        powerSurge += powerSurgeDirection
        if (powerSurge > 1) {
          powerSurgeDirection = -0.05
        }
        if (powerSurge < 0) {
          powerSurgeActive = false
        }
      }

      // Dynamic rotation speed
      const baseRotationSpeed = 0.001
      const rotationSpeed = baseRotationSpeed * (1 + Math.sin(Date.now() / 3000) * 0.3)
      rotation += rotationSpeed
      if (rotation > Math.PI * 2) rotation = 0

      // Draw particles
      particles.forEach((particle, index) => {
        particle.life++
        if (particle.life > particle.maxLife) {
          particles.splice(index, 1)
          return
        }

        const opacity = 1 - particle.life / particle.maxLife
        ctx.globalAlpha = opacity
        ctx.fillStyle = particle.color

        particle.x += Math.cos(particle.angle) * particle.speed
        particle.y += Math.sin(particle.angle) * particle.speed

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalAlpha = 1

      // Draw power surge glow
      if (powerSurgeActive) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius * 1.1, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.5, centerX, centerY, radius * 1.1)
        gradient.addColorStop(0, `rgba(255, 51, 51, ${powerSurge * 0.5})`)
        gradient.addColorStop(1, "rgba(255, 51, 51, 0)")
        ctx.fillStyle = gradient
        ctx.fill()
        ctx.restore()
      }

      let startAngle = rotation
      let endAngle = 0

      // Draw pie segments
      data.forEach((item, index) => {
        // Calculate angles
        startAngle = endAngle
        endAngle = startAngle + (item.value / 100) * (Math.PI * 2)

        // Apply pulse effect to hovered segment
        let segmentRadius = radius
        if (index === hoverSegment) {
          segmentRadius = radius * pulseFactor

          // Add extra glow to hovered segment
          ctx.save()
          ctx.beginPath()
          ctx.moveTo(centerX, centerY)
          ctx.arc(centerX, centerY, segmentRadius * 1.05, startAngle, endAngle)
          ctx.closePath()
          ctx.fillStyle = `${item.color}33`
          ctx.fill()
          ctx.restore()
        }

        // Draw pie slice with dynamic entrance
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, segmentRadius, startAngle, endAngle)
        ctx.closePath()
        ctx.fillStyle = item.color
        ctx.fill()

        // Add stroke
        ctx.lineWidth = 2
        ctx.strokeStyle = "#000"
        ctx.stroke()

        // Add labels with fade-in effect (only percentages)
        if (animationProgress > 0.7) {
          const labelOpacity = (animationProgress - 0.7) / 0.3
          ctx.globalAlpha = labelOpacity

          const midAngle = startAngle + (endAngle - startAngle) / 2
          const labelRadius = segmentRadius * 0.7
          const labelX = centerX + Math.cos(midAngle) * labelRadius
          const labelY = centerY + Math.sin(midAngle) * labelRadius

          // Draw percentage text
          ctx.fillStyle = "#fff"
          ctx.font = "bold 14px sans-serif"
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.shadowBlur = 3
          ctx.shadowColor = "#000"
          ctx.fillText(`${item.value}%`, labelX, labelY)
          ctx.shadowBlur = 0

          ctx.globalAlpha = 1
        }
      })

      // Clean center circle (no human silhouette)
      ctx.save()
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.25, 0, Math.PI * 2)
      ctx.fillStyle = "#000"
      ctx.fill()

      // Add subtle glow to center
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.25, 0, Math.PI * 2)
      ctx.strokeStyle = "#ff3333"
      ctx.lineWidth = 2
      ctx.shadowBlur = 10
      ctx.shadowColor = "#ff3333"
      ctx.stroke()
      ctx.restore()

      // Continue animation
      animationFrame = requestAnimationFrame(draw)
    }

    // Add event listeners
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("click", handleClick)

    // Start animation with a small delay
    setTimeout(() => {
      setCanvasDimensions()
      draw()
    }, 100)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("click", handleClick)
      clearInterval(particleInterval)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <div className="w-full max-w-md mx-auto">
      <canvas
        ref={canvasRef}
        className="w-full cursor-pointer"
        width={400}
        height={400}
        title="Click to activate power surge!"
      />
      <p className="text-center text-sm text-gray-500 mt-2">Interactive tokenomics chart - hover and click!</p>
    </div>
  )
}
