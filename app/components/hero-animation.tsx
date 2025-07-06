"use client"

import { useEffect, useRef } from "react"

export default function HeroAnimation() {
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

    // Human silhouette data points (simplified)
    const humanPoints = [
      [0.5, 0.2], // Head
      [0.5, 0.4], // Neck
      [0.5, 0.6], // Torso
      [0.4, 0.8], // Left leg
      [0.6, 0.8], // Right leg
      [0.3, 0.5], // Left arm
      [0.7, 0.5], // Right arm
    ]

    // Binary code particles
    const particles: { x: number; y: number; char: string; speed: number; opacity: number }[] = []

    for (let i = 0; i < 300; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: Math.random() > 0.5 ? "1" : "0",
        speed: 1 + Math.random() * 3,
        opacity: 0.5 + Math.random() * 0.5,
      })
    }

    const errorMessages: { text: string; x: number; y: number; opacity: number; fadeOut: boolean }[] = []
    let errorMessageTimer = 0
    let animationId: number

    // Animation
    const animate = () => {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Matrix-style binary rain
      ctx.fillStyle = "#00ff00"
      ctx.font = "14px monospace"

      particles.forEach((p) => {
        ctx.globalAlpha = p.opacity
        ctx.fillText(p.char, p.x, p.y)
        p.y += p.speed

        if (p.y > canvas.height) {
          p.y = 0
          p.x = Math.random() * canvas.width
        }
      })

      // Glitch effect
      if (Math.random() < 0.05) {
        const glitchX = Math.random() * canvas.width
        const glitchY = Math.random() * canvas.height
        const glitchWidth = Math.random() * 100
        const glitchHeight = Math.random() * 50
        const offsetX = Math.random() * 20 - 10
        const offsetY = Math.random() * 20 - 10

        ctx.drawImage(
          canvas,
          glitchX,
          glitchY,
          glitchWidth,
          glitchHeight,
          glitchX + offsetX,
          glitchY + offsetY,
          glitchWidth,
          glitchHeight,
        )
      }

      // Pulsing error messages
      errorMessageTimer++
      if (errorMessageTimer % 60 === 0 && errorMessages.length < 3) {
        errorMessages.push({
          text: Math.random() > 0.5 ? "ERROR" : "UPLOADING",
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          opacity: 1,
          fadeOut: false,
        })
      }

      ctx.font = "24px sans-serif"
      errorMessages.forEach((msg, index) => {
        ctx.globalAlpha = msg.opacity
        ctx.fillStyle = "red"
        ctx.fillText(msg.text, msg.x, msg.y)

        if (msg.fadeOut) {
          msg.opacity -= 0.02
          if (msg.opacity <= 0) {
            errorMessages.splice(index, 1)
          }
        } else {
          msg.opacity -= 0.005
          if (msg.opacity <= 0.3) {
            msg.fadeOut = true
          }
        }
      })

      // Draw human silhouette
      ctx.globalAlpha = 1
      ctx.strokeStyle = "#ff3333"
      ctx.lineWidth = 5
      ctx.shadowBlur = 20
      ctx.shadowColor = "#ff3333"

      ctx.beginPath()
      ctx.moveTo(humanPoints[0][0] * canvas.width, humanPoints[0][1] * canvas.height)
      for (let i = 1; i < humanPoints.length; i++) {
        ctx.lineTo(humanPoints[i][0] * canvas.width, humanPoints[i][1] * canvas.height)
      }
      ctx.arc(humanPoints[0][0] * canvas.width, humanPoints[0][1] * canvas.height, 20, 0, Math.PI * 2)
      ctx.stroke()
      ctx.shadowBlur = 0

      // Power surge effect
      if (Math.random() < 0.02) {
        ctx.fillStyle = "rgba(255, 51, 51, 0.3)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationId = requestAnimationFrame(animate)
    }

    // Start animation with a small delay to ensure canvas is ready
    setTimeout(() => {
      setCanvasDimensions()
      animate()
    }, 100)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "rgba(0,0,0,0.8)" }}
        width={800}
        height={400}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-6xl font-bold text-red-500 opacity-20">$HUMAN</div>
      </div>
    </div>
  )
}
