import Link from "next/link"
import { supabaseAdmin } from "@/lib/supabase"

const tables = [
  { name: "testimonials", label: "Testimonials", href: "/admin/testimonials" },
  { name: "faq", label: "FAQ", href: "/admin/faq" },
  { name: "blog_posts", label: "Blog Posts", href: "/admin/blog-posts" },
  { name: "contact_submissions", label: "Contact Submissions", href: "/admin/contact-submissions" },
  { name: "site_sections", label: "Site Sections", href: "/admin/site-sections" },
  { name: "services", label: "Services", href: "/admin/services" },
  { name: "values", label: "Core Values", href: "/admin/values" },
  { name: "portfolio_items", label: "Portfolio Items", href: "/admin/portfolio-items" },
  { name: "navigation", label: "Navigation", href: "/admin/navigation" },
  { name: "site_settings", label: "Site Settings", href: "/admin/site-settings" },
]

async function getCount(table: string): Promise<number> {
  const { count } = await supabaseAdmin.from(table).select("*", { count: "exact", head: true })
  return count ?? 0
}

export default async function AdminDashboard() {
  const counts = await Promise.all(tables.map((t) => getCount(t.name)))

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tables.map((table, i) => (
          <Link key={table.name} href={table.href}>
            <div className="p-6 rounded-lg border border-emerald-500/30 bg-zinc-900 hover:bg-zinc-800 transition-colors cursor-pointer">
              <h2 className="text-lg font-semibold text-white">{table.label}</h2>
              <p className="text-3xl font-bold text-emerald-400 mt-2">{counts[i]}</p>
              <p className="text-sm text-zinc-500 mt-1">items</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
