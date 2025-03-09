"use client"

import { useEffect, useRef } from "react"

interface MetallicBackgroundProps {
  className?: string
}

export function MetallicBackground({ className = "" }: MetallicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create glossy gunmetal background effect
    const createMetallicBackground = () => {
      // Create a gradient background - darker gunmetal colors with more transparency
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(5, 5, 5, 0.9)")
      gradient.addColorStop(0.3, "rgba(8, 8, 8, 0.9)")
      gradient.addColorStop(0.7, "rgba(10, 10, 10, 0.9)")
      gradient.addColorStop(1, "rgba(3, 3, 3, 0.9)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add glossy finish with subtle highlights
      const glossGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      glossGradient.addColorStop(0, "rgba(255, 255, 255, 0.03)")
      glossGradient.addColorStop(0.2, "rgba(255, 255, 255, 0)")
      glossGradient.addColorStop(0.8, "rgba(255, 255, 255, 0)")
      glossGradient.addColorStop(1, "rgba(255, 255, 255, 0.02)")

      ctx.fillStyle = glossGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add diagonal glossy streaks
      for (let i = 0; i < canvas.width; i += 200) {
        const x = i + Math.random() * 100
        const width = Math.random() * 100 + 50
        const alpha = Math.random() * 0.03 + 0.01

        const streakGradient = ctx.createLinearGradient(x, 0, x + width, canvas.height)
        streakGradient.addColorStop(0, `rgba(255, 255, 255, 0)`)
        streakGradient.addColorStop(0.5, `rgba(255, 255, 255, ${alpha})`)
        streakGradient.addColorStop(1, `rgba(255, 255, 255, 0)`)

        ctx.fillStyle = streakGradient
        ctx.fillRect(x, 0, width, canvas.height)
      }

      // Add metallic texture with horizontal lines
      for (let j = 0; j < canvas.height; j += 2) {
        if (Math.random() > 0.7) {
          const alpha = Math.random() * 0.06 + 0.02
          ctx.fillStyle = `rgba(160, 160, 160, ${alpha})`
          ctx.fillRect(0, j, canvas.width, 1)
        }
      }

      // Add subtle metallic patterns - glossy spots
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 150 + 50

        const radialGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        radialGradient.addColorStop(0, "rgba(255, 255, 255, 0.03)")
        radialGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.01)")
        radialGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = radialGradient
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2)
      }

      // Add subtle vignette effect
      const radialGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5,
      )
      radialGradient.addColorStop(0, "rgba(0, 0, 0, 0)")
      radialGradient.addColorStop(1, "rgba(0, 0, 0, 0.8)")

      ctx.fillStyle = radialGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    createMetallicBackground()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className={`fixed inset-0 z-0 ${className}`} />
}

