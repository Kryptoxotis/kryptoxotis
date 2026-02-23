import { cookies } from "next/headers"
import { LoginForm } from "./login-form"
import Link from "next/link"

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/testimonials", label: "Testimonials" },
  { href: "/admin/faq", label: "FAQ" },
  { href: "/admin/blog-posts", label: "Blog" },
  { href: "/admin/contact-submissions", label: "Contacts" },
  { href: "/admin/site-sections", label: "Sections" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/values", label: "Values" },
  { href: "/admin/portfolio-items", label: "Portfolio" },
  { href: "/admin/navigation", label: "Navigation" },
  { href: "/admin/site-settings", label: "Settings" },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")?.value

  if (token !== process.env.ADMIN_PASSWORD) {
    return <LoginForm />
  }

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-zinc-900 border-b border-emerald-500/30 px-4 py-3">
        <div className="container mx-auto flex flex-wrap gap-3 items-center">
          <Link href="/admin" className="text-emerald-400 font-bold text-lg mr-4">Admin</Link>
          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">
              {item.label}
            </Link>
          ))}
          <Link href="/" className="ml-auto text-sm text-zinc-400 hover:text-emerald-400">← Back to Site</Link>
        </div>
      </nav>
      <main className="container mx-auto py-8 px-4">
        {children}
      </main>
    </div>
  )
}
