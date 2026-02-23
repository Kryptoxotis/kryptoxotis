import Link from "next/link"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/section-title"
import { CyberButton } from "@/components/ui/cyber-button"
import { Check, BarChart, Cog, Globe, LayoutDashboard, Workflow } from "lucide-react"
import { getSection, getServices } from "@/lib/cms"

const iconMap: Record<string, any> = { BarChart, Cog, Globe, LayoutDashboard, Workflow }

export default async function ServicesPage() {
  const [hero, cta, services] = await Promise.all([
    getSection("services", "hero").catch(() => null),
    getSection("services", "cta").catch(() => null),
    getServices().catch(() => []),
  ])

  const heroHeading = hero?.heading ?? "One Mission. Three Ways We Deliver."
  const heroSub = hero?.subheading ?? "Custom Dashboards, Business Automation & Web Applications — all engineered to move your business forward."
  const ctaHeading = cta?.heading ?? "Ready to Transform Your Business? Let's make it happen."
  const ctaButton = cta?.button_text ?? "Get in Touch"
  const ctaButtonLink = cta?.button_link ?? "/contact"

  const defaultServices = [
    {
      title: "Custom Dashboards",
      slug: "dashboards",
      short_description: "Transform raw data into clear, actionable insights with tailored dashboard solutions.",
      icon: "LayoutDashboard",
      features: "Real-time data visualization,KPI tracking and monitoring,Interactive filtering and drill-downs,Automated reporting,Multi-source data integration",
      button_text: "Explore Dashboards",
      button_link: "/services/dashboards",
    },
    {
      title: "Business Automation",
      slug: "automation",
      short_description: "Eliminate repetitive tasks and streamline operations with intelligent automation.",
      icon: "Workflow",
      features: "Workflow automation design,System integration and API orchestration,Automated data processing,Event-driven triggers and scheduling,Error handling and monitoring",
      button_text: "Explore Automation",
      button_link: "/services/automation",
    },
    {
      title: "Web Applications",
      slug: "web-apps",
      short_description: "Custom-built web apps designed to solve real problems and scale with your business.",
      icon: "Globe",
      features: "Custom web app development,User authentication and roles,Database and API development,Responsive mobile-first design,Third-party integrations",
      button_text: "Explore Web Apps",
      button_link: "/services/web-apps",
    },
  ]
  const validSlugs = ["dashboards", "automation", "web-apps"]
  const filtered = services.filter((s: any) => validSlugs.includes(s.slug))
  const svcList = filtered.length > 0 ? filtered : defaultServices

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="metallic-text text-4xl md:text-5xl font-bold mb-6">
              {heroHeading}
            </h1>
            <p className="text-white text-xl">{heroSub}</p>
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {svcList.map((svc: any, index: number) => {
        const IconComp = iconMap[svc.icon] || BarChart
        const features = typeof svc.features === "string"
          ? svc.features.split(",").map((f: string) => f.trim()).filter(Boolean)
          : []
        const isEven = index % 2 === 0

        return (
          <section key={svc.slug || svc.title} className={`py-20 ${isEven ? "" : "bg-zinc-900/50"}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text side */}
                <div className={isEven ? "order-1" : "order-2 lg:order-2"}>
                  <SectionTitle title={svc.title} />
                  <p className="text-white text-xl mb-6">{svc.short_description}</p>

                  {features.length > 0 && (
                    <>
                      <h3 className="text-emerald-500 font-bold text-lg mb-4">What We Deliver:</h3>
                      <ul className="space-y-3 mb-6">
                        {features.map((feat: string) => (
                          <li key={feat} className="flex items-start">
                            <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                            <span className="text-white">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <Link href={svc.button_link || `/services/${svc.slug}`}>
                    <CyberButton>{svc.button_text || "Learn More"}</CyberButton>
                  </Link>
                </div>

                {/* Visual side */}
                <div className={isEven ? "order-2" : "order-1 lg:order-1"}>
                  <div className="relative">
                    <div className="cyber-border rounded-sm p-1 bg-black">
                      <div className="flex items-center justify-center aspect-[4/3] bg-zinc-900/80 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                        <IconComp className="h-24 w-24 text-emerald-500/30" />
                      </div>
                    </div>
                    <div className={`absolute -bottom-4 h-24 w-24 bg-gradient-to-br ${isEven ? "-right-4 from-emerald-500/20" : "-left-4 from-red-500/20"} to-transparent`}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="metallic-text text-3xl md:text-4xl font-bold mb-6">
              {ctaHeading}
            </h2>
            <Link href={ctaButtonLink}>
              <CyberButton size="lg">{ctaButton}</CyberButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
