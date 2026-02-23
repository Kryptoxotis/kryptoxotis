import Image from "next/image"
import Link from "next/link"
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
  image_url?: string | null
  slug?: string | null
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const Icon = categoryIcons[item.category ?? ""] ?? Globe
  const tags = Array.isArray(item.tags)
    ? item.tags
    : typeof item.tags === "string"
      ? item.tags.split(",").map((t) => t.trim()).filter(Boolean)
      : []

  const card = (
    <div className="bg-zinc-900 rounded-sm cyber-border overflow-hidden hover:bg-zinc-800 transition-all duration-300 hover:translate-y-[-3px] group h-full">
      {item.image_url && (
        <div className="relative aspect-video overflow-hidden bg-black">
          <Image
            src={item.image_url}
            alt={item.title}
            fill
            className="object-cover blur-[3px] group-hover:blur-[2px] transition-all duration-500 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
        </div>
      )}

      <div className="p-6">
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
    </div>
  )

  if (item.slug) {
    return <Link href={`/portfolio/${item.slug}`}>{card}</Link>
  }

  return card
}
