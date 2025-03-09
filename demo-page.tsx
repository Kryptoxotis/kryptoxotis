"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import BackgroundLines from "./background-lines"

export default function DemoPage() {
  const [lineCount, setLineCount] = useState(20)
  const [lineThickness, setLineThickness] = useState(1)
  const [opacity, setOpacity] = useState(0.2)

  return (
    <div className="relative min-h-screen w-full bg-background">
      {/* Background lines positioned behind all content */}
      <BackgroundLines
        count={lineCount}
        thickness={lineThickness}
        color={`rgba(200, 200, 200, ${opacity})`}
        zIndex={-1}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Background Lines Demo</h1>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Line Count: {lineCount}</label>
              <Slider value={[lineCount]} min={5} max={50} step={1} onValueChange={(value) => setLineCount(value[0])} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Line Thickness: {lineThickness}px</label>
              <Slider
                value={[lineThickness]}
                min={0.5}
                max={3}
                step={0.1}
                onValueChange={(value) => setLineThickness(value[0])}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Line Opacity: {opacity.toFixed(2)}</label>
              <Slider
                value={[opacity]}
                min={0.05}
                max={0.5}
                step={0.01}
                onValueChange={(value) => setOpacity(value[0])}
              />
            </div>
          </div>

          <div className="mt-8 p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Content Example</h2>
            <p className="mb-4">
              This content sits on top of the background lines. The lines are positioned with a negative z-index to
              ensure they always stay behind all content on the page.
            </p>
            <p>
              You can adjust the sliders above to find the perfect balance between line count, thickness, and opacity
              for your design.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

