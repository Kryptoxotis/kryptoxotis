import Link from "next/link"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/section-title"
import { CyberButton } from "@/components/ui/cyber-button"
import { Check, ArrowRight, Cog, Zap, RefreshCw } from "lucide-react"
import { ProjectsSection } from "@/components/projects-section"
import { getSection } from "@/lib/cms"

export default async function AutomationServicePage() {
  const [hero, cta] = await Promise.all([
    getSection("service-automation", "hero").catch(() => null),
    getSection("service-automation", "cta").catch(() => null),
  ])

  const heroHeading = hero?.heading ?? "Business Automation & Workflow Optimization"
  const heroSub = hero?.subheading ?? "Eliminate Repetitive Tasks. Scale What Matters."
  const ctaHeading = cta?.heading ?? "Ready to Automate Your Business?"
  const ctaBody = cta?.body ?? "Stop wasting time on manual processes. Let us build automation systems that work around the clock so your team can focus on growth. Contact us today to get started."
  const ctaButton = cta?.button_text ?? "Request a Consultation"
  const ctaButtonLink = cta?.button_link ?? "/contact"

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="metallic-text text-4xl md:text-5xl font-bold mb-6">{heroHeading}</h1>
            <h2 className="text-white text-xl">{heroSub}</h2>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="cyber-border rounded-sm p-1 bg-black">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-12%2014.42.51%20-%20A%20futuristic%20web%20design%20and%20development%20workspace%20showcasing%20the%20benefits%20of%20professional%20web%20services.%20The%20scene%20features%20high-tech%20monitors%20displayi-grDFZw49mvnPTxl95L93eGWttINvDU.webp"
                  alt="Business Automation Solutions"
                  width={600}
                  height={600}
                  className="rounded-sm w-full aspect-square object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-gradient-to-bl from-red-500/20 to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionTitle title="Overview" />
              <p className="text-white mb-6">
                Manual processes drain time, introduce errors, and prevent your business from scaling. Our automation
                solutions connect your tools, streamline workflows, and eliminate repetitive tasks — so your team can
                focus on high-value work that drives growth.
              </p>

              <div className="relative mt-8 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-sm"></div>
                <div className="relative bg-zinc-900/80 p-6 rounded-sm cyber-border">
                  <h3 className="metallic-text text-xl font-bold mb-4">Key Services:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">Workflow automation design and implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">System integration and API orchestration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">Automated data processing and ETL pipelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">Email, notification, and communication automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">Custom triggers, scheduling, and event-driven logic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1"><Check size={16} /></span>
                      <span className="text-white">Monitoring, error handling, and ongoing optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                <h3 className="metallic-text text-xl font-bold pt-2">Process Audit</h3>
              </div>
              <ul className="space-y-3 pl-20">
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Map out current workflows and identify manual bottlenecks.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Evaluate existing tools and integration opportunities.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Prioritize automation opportunities by impact and complexity.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-sm cyber-border border border-emerald-500/30 hover:bg-zinc-800 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-black flex items-center justify-center rounded-sm cyber-border mr-4">
                  <span className="text-3xl font-bold text-emerald-500">2</span>
                </div>
                <h3 className="metallic-text text-xl font-bold pt-2">Solution Design</h3>
              </div>
              <ul className="space-y-3 pl-20">
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Architect automation flows with clear triggers, actions, and conditions.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Select the right platforms and tools for each automation.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Plan error handling, fallbacks, and monitoring strategies.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-sm cyber-border border border-emerald-500/30 hover:bg-zinc-800 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-black flex items-center justify-center rounded-sm cyber-border mr-4">
                  <span className="text-3xl font-bold text-emerald-500">3</span>
                </div>
                <h3 className="metallic-text text-xl font-bold pt-2">Build & Test</h3>
              </div>
              <ul className="space-y-3 pl-20">
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Implement automations with thorough testing at each stage.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Connect systems and validate data flows end-to-end.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Run parallel testing to ensure accuracy before going live.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-sm cyber-border border border-emerald-500/30 hover:bg-zinc-800 transition-all duration-300 group">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-black flex items-center justify-center rounded-sm cyber-border mr-4">
                  <span className="text-3xl font-bold text-emerald-500">4</span>
                </div>
                <h3 className="metallic-text text-xl font-bold pt-2">Deploy & Scale</h3>
              </div>
              <ul className="space-y-3 pl-20">
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Launch automations and monitor performance in real time.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Iterate based on results and expand automation coverage.</span>
                </li>
                <li className="flex items-start text-white">
                  <ArrowRight className="h-4 w-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Provide ongoing support and adapt to changing business needs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Elements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Automation That Drives Results" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-zinc-900 p-6 rounded-sm cyber-border text-center">
              <Zap className="h-16 w-16 mx-auto text-emerald-500 mb-4" />
              <h3 className="metallic-text text-xl font-bold mb-3">Instant Execution</h3>
              <p className="text-white">
                Tasks that once took hours happen in seconds — triggered automatically, every time.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-sm cyber-border text-center">
              <RefreshCw className="h-16 w-16 mx-auto text-emerald-500 mb-4" />
              <h3 className="metallic-text text-xl font-bold mb-3">Seamless Integration</h3>
              <p className="text-white">
                Connect your existing tools and platforms into one unified, automated workflow.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-sm cyber-border text-center">
              <Cog className="h-16 w-16 mx-auto text-emerald-500 mb-4" />
              <h3 className="metallic-text text-xl font-bold mb-3">Zero Human Error</h3>
              <p className="text-white">
                Automated processes run consistently and accurately, eliminating costly manual mistakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <ProjectsSection category="automation" title="Automation Projects" />

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
