"use client"

import { useEffect, useRef } from "react"

interface BackgroundLinesProps {
  count?: number
  color?: string
  thickness?: number
  zIndex?: number
  className?: string
}

export default function BackgroundLines({
  count = 20,
  color = "rgba(200, 200, 200, 0.2)",
  thickness = 1,
  zIndex = -1,
  className = "",
}: BackgroundLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing lines
    container.innerHTML = ""

    // Get container dimensions
    const width = container.offsetWidth
    const height = container.offsetHeight

    // Create lines
    for (let i = 0; i < count; i++) {
      const line = document.createElement("div")

      // Randomize line position and angle
      const startX = Math.random() * width
      const startY = Math.random() * height
      const angle = Math.random() * 360
      const length = Math.max(width, height) * 1.5 // Make lines long enough to cross the container

      // Apply styles
      line.style.position = "absolute"
      line.style.width = `${length}px`
      line.style.height = `${thickness}px`
      line.style.backgroundColor = color
      line.style.top = `${startY}px`
      line.style.left = `${startX}px`
      line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`
      line.style.zIndex = String(zIndex)

      container.appendChild(line)
    }
  }, [count, color, thickness, zIndex])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex }}
    />
  )
}

