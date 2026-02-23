"use client"

import { useState } from "react"
import { PortfolioCard } from "@/components/portfolio-card"

interface PortfolioItem {
  id: string
  title: string
  description: string | null
  category: string | null
  tags: string[] | string | null
  client_name: string | null
  featured: boolean | null
}

const tabs = ["All", "Client System", "Personal Project", "Website"] as const

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState<string>("All")

  const filtered = active === "All" ? items : items.filter((i) => i.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-sm text-sm font-medium transition-all duration-300 ${
              active === tab
                ? "bg-emerald-500 text-white cyber-border"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {tab === "Client System" ? "Client Systems" : tab === "Personal Project" ? "Personal Projects" : tab === "Website" ? "Websites" : tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-zinc-400">No projects in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
