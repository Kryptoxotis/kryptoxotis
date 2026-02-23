import { getPortfolioItems } from "@/lib/cms"
import { PortfolioGrid } from "@/components/portfolio-grid"

export const metadata = {
  title: "Portfolio | Kryptoxotis",
  description: "Explore our portfolio of custom dashboards, automation systems, and web applications.",
}

export default async function PortfolioPage() {
  const items = await getPortfolioItems().catch(() => [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="metallic-text text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-white text-lg">
              Real systems we've built for real businesses — dashboards, automation, and web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGrid items={items} />
        </div>
      </section>
    </div>
  )
}
