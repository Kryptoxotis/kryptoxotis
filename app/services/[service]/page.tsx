import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { SectionTitle } from "@/components/ui/section-title"
import { CyberButton } from "@/components/ui/cyber-button"
import { ProjectsSection } from "@/components/projects-section"

interface ServicePageProps {
  params: {
    service: string
  }
}

const serviceData = {
  dashboards: {
    title: "Custom Dashboards & Data Visualization",
    description: "Transform raw data into actionable intelligence",
    content:
      "Our custom dashboard solutions transform complex datasets into clear, interactive visualizations that empower teams to make faster, smarter decisions. From executive KPI panels to operational monitoring systems, we build dashboards that fit your workflow.",
    features: [
      "Custom dashboard design and development",
      "Real-time data integration and API connections",
      "Interactive charts, graphs, and data tables",
      "KPI tracking and automated reporting",
      "Role-based access and team collaboration",
      "Ongoing maintenance and optimization",
    ],
    category: "dashboards",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-12%2014.41.01%20-%20A%20futuristic%20business%20overview%20scene%20showcasing%20the%20benefits%20of%20database%20management%20and%20automation.%20The%20image%20features%20a%20sleek%2C%20high-tech%20control%20cent-6XtMI7JofXoVkc2JffC6qs09HiFDpW.webp",
    cta: "Transform Your Data into Actionable Insights.",
  },
  automation: {
    title: "Business Automation & Workflow Optimization",
    description: "Eliminate repetitive tasks and scale what matters",
    content:
      "Manual processes drain time, introduce errors, and prevent your business from scaling. Our automation solutions connect your tools, streamline workflows, and eliminate repetitive tasks — so your team can focus on high-value work that drives growth.",
    features: [
      "Workflow automation design and implementation",
      "System integration and API orchestration",
      "Automated data processing and ETL pipelines",
      "Event-driven triggers and scheduling",
      "Error handling and monitoring",
      "Ongoing optimization and scaling",
    ],
    category: "automation",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-12%2014.42.51%20-%20A%20futuristic%20web%20design%20and%20development%20workspace%20showcasing%20the%20benefits%20of%20professional%20web%20services.%20The%20scene%20features%20high-tech%20monitors%20displayi-grDFZw49mvnPTxl95L93eGWttINvDU.webp",
    cta: "Stop Wasting Time on Manual Tasks – Automate Now.",
  },
  "web-apps": {
    title: "Web Application Development",
    description: "Custom web apps built to solve real business problems",
    content:
      "Off-the-shelf software rarely fits your exact needs. We build custom web applications — from internal tools and client portals to full-featured platforms — that are tailored to your workflows, scale with your growth, and deliver a seamless user experience.",
    features: [
      "Custom web application design and development",
      "User authentication, roles, and permissions",
      "Database architecture and API development",
      "Responsive, mobile-first UI/UX design",
      "Third-party integrations and payment processing",
      "Hosting, deployment, and ongoing maintenance",
    ],
    category: "web-apps",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-12%2014.42.51%20-%20A%20futuristic%20web%20design%20and%20development%20workspace%20showcasing%20the%20benefits%20of%20professional%20web%20services.%20The%20scene%20features%20high-tech%20monitors%20displayi-grDFZw49mvnPTxl95L93eGWttINvDU.webp",
    cta: "Let's Build Your Custom Web Application.",
  },
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = params.service

  if (!serviceData[service as keyof typeof serviceData]) {
    notFound()
  }

  const { title, description, content, features, category, image, cta } =
    serviceData[service as keyof typeof serviceData]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="metallic-text text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Overview" />
              <p className="text-white mb-6">{content}</p>
              <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <CyberButton>Get a Quote</CyberButton>
              </Link>
            </div>
            <div className="relative">
              <div className="cyber-border rounded-sm p-1 bg-black">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${title} Overview`}
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

      {/* Portfolio Section */}
      <ProjectsSection category={category} title="Portfolio" />

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Process" centered />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center p-6 bg-zinc-900 rounded-sm cyber-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-black mb-4 cyber-border">
                <span className="text-2xl text-emerald-500">1</span>
              </div>
              <h3 className="metallic-text text-xl font-bold mb-3">Consultation</h3>
              <p className="text-white">We begin by understanding your needs, goals, and challenges.</p>
            </div>

            <div className="text-center p-6 bg-zinc-900 rounded-sm cyber-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-black mb-4 cyber-border">
                <span className="text-2xl text-emerald-500">2</span>
              </div>
              <h3 className="metallic-text text-xl font-bold mb-3">Planning</h3>
              <p className="text-white">We develop a detailed plan and timeline for your project.</p>
            </div>

            <div className="text-center p-6 bg-zinc-900 rounded-sm cyber-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-black mb-4 cyber-border">
                <span className="text-2xl text-emerald-500">3</span>
              </div>
              <h3 className="metallic-text text-xl font-bold mb-3">Execution</h3>
              <p className="text-white">We implement the solution with regular updates and feedback.</p>
            </div>

            <div className="text-center p-6 bg-zinc-900 rounded-sm cyber-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-black mb-4 cyber-border">
                <span className="text-2xl text-emerald-500">4</span>
              </div>
              <h3 className="metallic-text text-xl font-bold mb-3">Support</h3>
              <p className="text-white">We provide ongoing support and maintenance for your solution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="metallic-text text-3xl md:text-4xl font-bold mb-6">{cta}</h2>
            <Link href="/contact">
              <CyberButton size="lg">Contact Us</CyberButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
