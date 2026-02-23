import Link from "next/link"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/section-title"
import { CyberButton } from "@/components/ui/cyber-button"
import { Check, ArrowRight, BarChart, Database, Shield, Cog } from "lucide-react"
import { ProjectsSection } from "@/components/projects-section"
import { getSection } from "@/lib/cms"

export default async function DashboardsServicePage() {
  const [hero, cta] = await Promise.all([
    getSection("service-dashboards", "hero").catch(() => null),
    getSection("service-dashboards", "cta").catch(() => null),
  ])

  const heroHeading = hero?.heading ?? "Custom Dashboards & Data Visualization"
  const heroSub = hero?.subheading ?? "Transform Raw Data into Actionable Intelligence."
  const ctaHeading = cta?.heading ?? "Ready to See Your Data Clearly?"
  const ctaBody = cta?.body ?? "Custom dashboards give you the power to monitor, analyze, and act on your business data in real time. Let us build a dashboard solution tailored to your exact needs. Contact us today to get started."
  const ctaButton = cta?.button_text ?? "Request a Consultation"
  const ctaButtonLink = cta?.button_link ?? "/contact"

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="metallic-text text-4xl md:text-5xl font-bold mb-6">
              {heroHeading}
            </h1>
            <h2 className="text-white text-xl">{heroSub}</h2>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Overview" />
              <p className="text-white mb-6">
                Data without visibility is wasted potential. Our custom dashboard solutions transform complex datasets
                into clear, interactive visualizations that empower teams to make faster, smarter decisions. From
                executive KPI panels to operational monitoring systems, we build dashboards that fit your workflow.
              </p>

              <div className="relative mt-8 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-sm"></div>
                <div className="relative bg-zinc-900/80 p-6 rounded-sm cyber-border">
                  <h3 className="metallic-text text-xl font-bold mb-4">Key Services:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">Custom dashboard design and development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">Real-time data integration and API connections</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">Interactive charts, graphs, and data tables</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">KPI tracking and automated reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">Role-based access and team collaboration features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">Ongoing maintenance, scaling, and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="cyber-border rounded-sm p-1 bg-black">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-12%2014.41.01%20-%20A%20futuristic%20business%20overview%20scene%20showcasing%20the%20benefits%20of%20database%20management%20and%20automation.%20The%20image%20features%20a%20sleek%2C%20high-tech%20control%20cent-6XtMI7JofXoVkc2JffC6qs09HiFDpW.webp"
                  alt="Custom Dashboard Development"
                  width={600}
                  height={600}
                  className="rounded-sm w-full aspect-square object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Process" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-zinc-900 p-6 rounded-sm cyber-border border border-emerald-500/30 hover:bg-zinc-800 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-black flex items-center justify-center rounded-sm cyber-border mr-4">
                  <span className="text-3xl font-bold text-emerald-500">1</span>
                </div>
                <h3 className="metallic-text text-xl font-bold pt-2">Data Discovery</h3>
              </div>
              <ul className="space-y-3 pl-20">
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Map your data sources, databases, and existing reporting workflows.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Identify the KPIs and metrics that matter most to your team.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Define user roles and access requirements for each dashboard view.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-sm cyber-border border border-emerald-500/30 hover:bg-zinc-800 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-black flex items-center justify-center rounded-sm cyber-border mr-4">
                  <span className="text-3xl font-bold text-emerald-500">2</span>
                </div>
                <h3 className="metallic-text text-xl font-bold pt-2">Design & Prototype</h3>
              </div>
              <ul className="space-y-3 pl-20">
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Create wireframes and interactive mockups for each dashboard view.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Choose the right visualization types for each data point.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Validate the layout and flow with stakeholders before development.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-sm cyber-border border border-emerald-500/30 hover:bg-zinc-800 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-black flex items-center justify-center rounded-sm cyber-border mr-4">
                  <span className="text-3xl font-bold text-emerald-500">3</span>
                </div>
                <h3 className="metallic-text text-xl font-bold pt-2">Build & Integrate</h3>
              </div>
              <ul className="space-y-3 pl-20">
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Develop the dashboard with live data connections and real-time updates.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Integrate with your existing tools, APIs, and databases.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Implement filtering, drill-downs, and export functionality.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-sm cyber-border border border-emerald-500/30 hover:bg-zinc-800 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-black flex items-center justify-center rounded-sm cyber-border mr-4">
                  <span className="text-3xl font-bold text-emerald-500">4</span>
                </div>
                <h3 className="metallic-text text-xl font-bold pt-2">Launch & Optimize</h3>
              </div>
              <ul className="space-y-3 pl-20">
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Deploy dashboards and train your team on usage and best practices.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Monitor performance and iterate based on user feedback.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Provide ongoing support, updates, and new feature development.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Elements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="How Dashboards Transform Your Business" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-zinc-900 p-6 rounded-sm cyber-border text-center">
              <Database className="h-16 w-16 mx-auto text-emerald-500 mb-4" />
              <h3 className="metallic-text text-xl font-bold mb-3">Centralized Visibility</h3>
              <p className="text-white">
                See all your critical data in one place — no more digging through spreadsheets or switching between tools.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-sm cyber-border text-center">
              <Cog className="h-16 w-16 mx-auto text-emerald-500 mb-4" />
              <h3 className="metallic-text text-xl font-bold mb-3">Automated Reporting</h3>
              <p className="text-white">
                Eliminate manual report generation with dashboards that update automatically as data flows in.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-sm cyber-border text-center">
              <BarChart className="h-16 w-16 mx-auto text-emerald-500 mb-4" />
              <h3 className="metallic-text text-xl font-bold mb-3">Real-time Insights</h3>
              <p className="text-white">
                Make data-driven decisions with instant access to live metrics and trend analysis.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-zinc-900 p-6 rounded-sm cyber-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="metallic-text text-2xl font-bold mb-4">Before & After Implementation</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-24 text-red-500 font-bold">Before:</div>
                    <div className="flex-1 bg-zinc-800 p-3 rounded-sm text-white">
                      Hours spent compiling reports from scattered data sources
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-emerald-500 font-bold">After:</div>
                    <div className="flex-1 bg-zinc-800 p-3 rounded-sm text-white">
                      Real-time dashboards deliver instant insights, zero manual effort
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-red-500 font-bold">Before:</div>
                    <div className="flex-1 bg-zinc-800 p-3 rounded-sm text-white">
                      Decisions delayed by outdated or inconsistent data
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 text-emerald-500 font-bold">After:</div>
                    <div className="flex-1 bg-zinc-800 p-3 rounded-sm text-white">
                      Live data feeds ensure decisions are based on current reality
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Shield className="h-48 w-48 mx-auto text-emerald-500 opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold metallic-text mb-2">10x</div>
                    <p className="text-white">Faster decision-making</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <ProjectsSection category="dashboards" title="Dashboard Projects" />

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black p-8 rounded-sm cyber-border">
              <h2 className="metallic-text text-3xl md:text-4xl font-bold mb-4 text-center">
                {ctaHeading}
              </h2>
              <p className="text-white text-center mb-8">{ctaBody}</p>
              <div className="flex justify-center">
                <Link href={ctaButtonLink}>
                  <CyberButton size="lg">{ctaButton}</CyberButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
