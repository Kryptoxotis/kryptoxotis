"use client"

import { useEffect, useRef } from "react"

interface CircuitLinesProps {
  className?: string
  intensity?: number
  lineWidth?: number
  lineCount?: number
  zIndex?: number
}

export function CircuitLines({
  className = "",
  intensity = 1.0,
  lineWidth = 1.5,
  lineCount = 1.5,
  zIndex = -1,
}: CircuitLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const circuitDataRef = useRef<any>(null) // Store the static circuit data

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Initialize all variables first - ONLY blue, green, and teal colors
    const tealColor = "#2dd4bf" // Teal base color
    const blueColor = "#38bdf8" // Blue color
    const greenColor = "#4ade80" // Green color

    // Restrict color palette to only these three colors
    const colorPalette = [tealColor, blueColor, greenColor]

    let currentColor = tealColor
    const startTime = Date.now()
    const gridSize = Math.floor(80 / lineCount) // Adjust grid size based on lineCount

    // Ensure the canvas covers the entire viewport
    const resizeCanvas = () => {
      // Set the canvas size to match the window size
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Regenerate the static circuit when canvas is resized
      generateStaticCircuit()
    }

    // Initial resize and add event listener
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Generate the static circuit pattern once
    function generateStaticCircuit() {
      // Store all the circuit elements to draw
      const circuitData = {
        gridLines: [],
        traces: [],
        components: [],
        chips: [],
      }

      // Generate grid lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        if (Math.random() > 0.4) {
          // 60% chance to draw a line
          circuitData.gridLines.push({
            type: "horizontal",
            y: y,
          })
        }
      }

      for (let x = 0; x < canvas.width; x += gridSize) {
        if (Math.random() > 0.4) {
          // 60% chance to draw a line
          circuitData.gridLines.push({
            type: "vertical",
            x: x,
          })
        }
      }

      // Generate traces
      const cols = Math.ceil(canvas.width / gridSize)
      const rows = Math.ceil(canvas.height / gridSize)

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const x = col * gridSize
          const y = row * gridSize

          // Only draw some traces (not too dense)
          if (Math.random() > 0.85) {
            const trace = generateTrace(x, y, gridSize)
            circuitData.traces.push(trace)
          }
        }
      }

      // Generate components
      const componentCount = Math.floor((canvas.width * canvas.height) / (gridSize * gridSize * 100))

      // IC chips
      for (let i = 0; i < componentCount; i++) {
        const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize
        const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
        const width = (Math.floor(Math.random() * 3) + 2) * gridSize
        const height = (Math.floor(Math.random() * 2) + 1) * gridSize

        const chip = {
          x,
          y,
          width,
          height,
          pins: [],
        }

        // Generate pins
        const pinSpacing = gridSize / 2

        // Top and bottom pins
        for (let px = x + pinSpacing; px < x + width; px += pinSpacing) {
          // Top pins
          if (Math.random() > 0.3) {
            chip.pins.push({
              x1: px,
              y1: y,
              x2: px,
              y2: y - gridSize / 3,
              side: "top",
            })
          }

          // Bottom pins
          if (Math.random() > 0.3) {
            chip.pins.push({
              x1: px,
              y1: y + height,
              x2: px,
              y2: y + height + gridSize / 3,
              side: "bottom",
            })
          }
        }

        // Left and right pins
        for (let py = y + pinSpacing; py < y + height; py += pinSpacing) {
          // Left pins
          if (Math.random() > 0.3) {
            chip.pins.push({
              x1: x,
              y1: py,
              x2: x - gridSize / 3,
              y2: py,
              side: "left",
            })
          }

          // Right pins
          if (Math.random() > 0.3) {
            chip.pins.push({
              x1: x + width,
              y1: py,
              x2: x + width + gridSize / 3,
              y2: py,
              side: "right",
            })
          }
        }

        circuitData.chips.push(chip)
      }

      // Circular components
      for (let i = 0; i < componentCount / 2; i++) {
        const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize
        const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
        const radius = gridSize / 3
        const angle = Math.random() * Math.PI * 2

        circuitData.components.push({
          x,
          y,
          radius,
          angle,
        })
      }

      // Store the circuit data for animation
      circuitDataRef.current = circuitData
    }

    // Generate a single trace with proper angles
    function generateTrace(startX: number, startY: number, gridSize: number) {
      const segments = Math.floor(Math.random() * 3) + 1
      const points = [{ x: startX, y: startY }]

      let currentX = startX
      let currentY = startY

      for (let i = 0; i < segments; i++) {
        // Choose direction: 0=right, 1=down, 2=left, 3=up, 4-7=diagonals
        const direction = Math.floor(Math.random() * 8)

        // Determine segment length (in grid units)
        const length = (Math.floor(Math.random() * 3) + 1) * gridSize

        // Calculate end point based on direction
        let nextX = currentX
        let nextY = currentY

        switch (direction) {
          case 0: // right
            nextX = currentX + length
            break
          case 1: // down
            nextY = currentY + length
            break
          case 2: // left
            nextX = currentX - length
            break
          case 3: // up
            nextY = currentY - length
            break
          case 4: // diagonal up-right (45°)
            nextX = currentX + length
            nextY = currentY - length
            break
          case 5: // diagonal down-right (45°)
            nextX = currentX + length
            nextY = currentY + length
            break
          case 6: // diagonal down-left (45°)
            nextX = currentX - length
            nextY = currentY + length
            break
          case 7: // diagonal up-left (45°)
            nextX = currentX - length
            nextY = currentY - length
            break
        }

        points.push({ x: nextX, y: nextY })

        // Update current position
        currentX = nextX
        currentY = nextY
      }

      return {
        points,
        startNode: true,
        endNode: true,
      }
    }

    // Animate only the colors/glow with flickering effect
    function animateCircuit() {
      if (!ctx || !canvas || !circuitDataRef.current) return

      // Clear with pure black background - no overlay
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime

      // Base pulsing effect
      const basePulse = ((Math.sin(elapsedTime / 5000) + 1) / 2) * 0.4 + 0.6 // Faster pulse (5 seconds)

      // Add random flickering to the pulse (like a dying fire)
      const flicker = Math.random() * 0.3 - 0.15 // Random value between -0.15 and 0.15
      const pulseIntensity = Math.max(0.4, Math.min(1.0, basePulse + flicker)) // Clamp between 0.4 and 1.0

      // Color cycling between blue, green, and teal only
      const colorChangeProb = 0.1 // 10% chance to change color each frame

      if (Math.random() < colorChangeProb) {
        // Randomly select from the restricted color palette
        currentColor = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      }

      // Dramatic glitch effect (rare) - only using the restricted colors
      if (Math.random() > 0.98) {
        // 2% chance for dramatic glitch
        // Rapid color cycling
        const glitchDuration = Math.random() * 300 + 100 // 100-400ms
        const glitchIntensity = Math.random() * 0.5 + 0.5 // 0.5-1.0

        // Increase glow during glitch
        ctx.shadowBlur = 15 * glitchIntensity

        // Randomly choose from the restricted color palette
        currentColor = colorPalette[Math.floor(Math.random() * colorPalette.length)]

        // Short glitch duration
        setTimeout(() => {
          requestAnimationFrame(animateCircuit)
        }, glitchDuration / 3) // Faster animation during glitch
      } else {
        // Normal animation timing
        setTimeout(() => {
          requestAnimationFrame(animateCircuit)
        }, 50) // Faster animation for more visible flickering
      }

      // Set up the PCB trace style
      ctx.strokeStyle = currentColor
      ctx.lineWidth = lineWidth
      ctx.lineCap = "square" // Sharp corners for PCB look

      // Add glow effect that changes with the pulse
      ctx.shadowBlur = 8 + pulseIntensity * 7 // More pronounced glow (8-15px)
      ctx.shadowColor = currentColor

      // Draw the static circuit with animated colors
      drawStaticCircuit(ctx, canvas, intensity * pulseIntensity)
    }

    // Draw the static circuit with animated colors
    function drawStaticCircuit(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, intensity: number) {
      const circuitData = circuitDataRef.current
      if (!circuitData) return

      // Draw grid lines
      circuitData.gridLines.forEach((line: any) => {
        ctx.beginPath()
        if (line.type === "horizontal") {
          ctx.moveTo(0, line.y)
          ctx.lineTo(canvas.width, line.y)
        } else {
          ctx.moveTo(line.x, 0)
          ctx.lineTo(line.x, canvas.height)
        }
        ctx.globalAlpha = 0.35 * intensity // Increased opacity for better visibility
        ctx.stroke()
      })

      // Draw traces
      circuitData.traces.forEach((trace: any) => {
        // Draw trace lines
        ctx.beginPath()
        ctx.moveTo(trace.points[0].x, trace.points[0].y)

        for (let i = 1; i < trace.points.length; i++) {
          ctx.lineTo(trace.points[i].x, trace.points[i].y)
        }

        ctx.globalAlpha = 0.7 * intensity // Increased opacity for better visibility
        ctx.stroke()

        // Draw nodes
        if (trace.startNode) {
          ctx.fillStyle = currentColor
          ctx.globalAlpha = 0.8 * intensity // Increased opacity
          ctx.beginPath()
          ctx.arc(trace.points[0].x, trace.points[0].y, 3, 0, Math.PI * 2) // Larger nodes
          ctx.fill()
        }

        if (trace.endNode) {
          ctx.fillStyle = currentColor
          ctx.globalAlpha = 0.8 * intensity // Increased opacity
          ctx.beginPath()
          ctx.arc(trace.points[trace.points.length - 1].x, trace.points[trace.points.length - 1].y, 3, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Draw IC chips
      circuitData.chips.forEach((chip: any) => {
        // Draw chip outline
        ctx.beginPath()
        ctx.rect(chip.x, chip.y, chip.width, chip.height)
        ctx.globalAlpha = 0.7 * intensity // Increased opacity
        ctx.stroke()

        // Draw pins
        chip.pins.forEach((pin: any) => {
          ctx.beginPath()
          ctx.moveTo(pin.x1, pin.y1)
          ctx.lineTo(pin.x2, pin.y2)
          ctx.globalAlpha = 0.7 * intensity // Increased opacity
          ctx.stroke()
        })
      })

      // Draw circular components
      circuitData.components.forEach((component: any) => {
        // Draw circle
        ctx.beginPath()
        ctx.arc(component.x, component.y, component.radius, 0, Math.PI * 2)
        ctx.globalAlpha = 0.7 * intensity // Increased opacity
        ctx.stroke()

        // Draw connection traces
        const angle = component.angle

        ctx.beginPath()
        ctx.moveTo(component.x + Math.cos(angle) * component.radius, component.y + Math.sin(angle) * component.radius)
        ctx.lineTo(
          component.x + Math.cos(angle) * component.radius * 3,
          component.y + Math.sin(angle) * component.radius * 3,
        )
        ctx.globalAlpha = 0.7 * intensity // Increased opacity
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(
          component.x + Math.cos(angle + Math.PI) * component.radius,
          component.y + Math.sin(angle + Math.PI) * component.radius,
        )
        ctx.lineTo(
          component.x + Math.cos(angle + Math.PI) * component.radius * 3,
          component.y + Math.sin(angle + Math.PI) * component.radius * 3,
        )
        ctx.globalAlpha = 0.7 * intensity // Increased opacity
        ctx.stroke()
      })

      // Add occasional bright "hot spots" - using only the restricted colors
      const hotspotCount = Math.floor((canvas.width * canvas.height) / 400000)
      for (let i = 0; i < hotspotCount; i++) {
        if (Math.random() > 0.6) {
          const x = Math.random() * canvas.width
          const y = Math.random() * canvas.height
          const radius = Math.random() * 6 + 3

          // Create a bright glow
          const grd = ctx.createRadialGradient(x, y, 0, x, y, radius)
          grd.addColorStop(0, currentColor) // Use current color from the restricted palette
          grd.addColorStop(1, "transparent")

          ctx.fillStyle = grd
          ctx.globalAlpha = Math.random() * 0.6 + 0.4
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    // Generate the static circuit once
    generateStaticCircuit()

    // Start the color animation
    animateCircuit()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [intensity, lineWidth, lineCount])

  return (
    <canvas
      ref={canvasRef}
      className={`circuit-glow ${className}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: zIndex,
        pointerEvents: "none",
      }}
    />
  )
}

