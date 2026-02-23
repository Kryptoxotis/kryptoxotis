import { Building2, Lightbulb, Globe } from "lucide-react"

const categoryIcons: Record<string, React.ElementType> = {
  "Client System": Building2,
  "Personal Project": Lightbulb,
  "Website": Globe,
}

interface PortfolioItem {
  id: string
  title: string
  description: string | null
  category: string | null
  tags: string[] | string | null
  client_name: string | null
  featured: boolean | null
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const Icon = categoryIcons[item.category ?? ""] ?? Globe
  const tags = Array.isArray(item.tags)
    ? item.tags
    : typeof item.tags === "string"
      ? item.tags.split(",").map((t) => t.trim()).filter(Boolean)
      : []

  return (
    <div className="bg-zinc-900 rounded-sm cyber-border p-6 hover:bg-zinc-800 transition-all duration-300 hover:translate-y-[-3px] group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 shrink-0 rounded-sm bg-black flex items-center justify-center cyber-border group-hover:shadow-[0_0_15px_rgba(27,77,62,0.5)] transition-all duration-300">
          <Icon className="h-6 w-6 text-emerald-500" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="metallic-text text-lg font-bold">{item.title}</h3>
            {item.featured && (
              <span className="text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-sm border border-emerald-500/30">
                Featured
              </span>
            )}
          </div>
          {item.client_name && (
            <p className="text-emerald-400/70 text-sm">{item.client_name}</p>
          )}
        </div>
      </div>

      {item.description && (
        <p className="text-zinc-300 text-sm mb-4 line-clamp-3">{item.description}</p>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-sm text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
