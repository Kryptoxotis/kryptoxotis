import Link from "next/link"
import Image from "next/image"
import { CyberButton } from "@/components/ui/cyber-button"
import { SectionTitle } from "@/components/ui/section-title"
import { ServiceCard } from "@/components/ui/service-card"
import { Database, Globe, PrinterIcon as Printer3d } from "lucide-react"
import { getSection, getServices, getValues } from "@/lib/cms"

const iconMap: Record<string, any> = { Database, Globe, Printer: Printer3d }

export default async function Home() {
  const [hero, cta, services, values] = await Promise.all([
    getSection("home", "hero").catch(() => null),
    getSection("home", "cta").catch(() => null),
    getServices().catch(() => []),
    getValues().catch(() => []),
  ])

  const heroHeading = hero?.heading ?? "Stay Ahead or Get Left Behind – Future-Proof Your Business Now"
  const heroSubheading = hero?.subheading ?? "INNOVATIVE SOLUTIONS"
  const heroButton = hero?.button_text ?? "See How We Can Help You"
  const heroButtonLink = hero?.button_link ?? "/services"

  const ctaHeading = cta?.heading ?? "Your Future Starts Now – Let's Build Something Extraordinary"
  const ctaButton = cta?.button_text ?? "Let's Build the Future Together"
  const ctaButtonLink = cta?.button_link ?? "/contact"

  const defaultServices = [
    { title: "Database Management", short_description: "Seamlessly manage and optimize your data for faster, smarter decisions.", icon: "Database", button_text: "See It in Action", button_link: "/services/database" },
    { title: "Web Design", short_description: "Stunning, high-performance websites that convert visitors into customers.", icon: "Globe", button_text: "Discover How It Works", button_link: "/services/web-design" },
    { title: "3D Printing", short_description: "From prototyping to production – bring your ideas to life with precision.", icon: "Printer", button_text: "See It in Action", button_link: "/services/3d-printing" },
  ]
  const svcList = services.length > 0 ? services : defaultServices

  const defaultValues = [
    { letter: "I", english_name: "Innovation", short_description: "We push boundaries, turning the impossible into reality through creative tech solutions." },
    { letter: "L", english_name: "Loyalty", short_description: "Your success is our success – we forge lasting partnerships built on trust and collaboration." },
    { letter: "I", english_name: "Integrity", short_description: "Honesty and transparency drive everything we do, ensuring you get results you can trust." },
  ]
  const valList = values.length > 0 ? values : defaultValues

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden circuit-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-sm bg-zinc-900 px-3 py-1 text-sm metallic-red-text border border-emerald-500/30 glow-teal">
                {heroSubheading}
              </div>
              <h1 className="metallic-text text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                {heroHeading}
              </h1>
              <div className="flex flex-wrap gap-4">
                <Link href={heroButtonLink}>
                  <CyberButton size="lg">{heroButton}</CyberButton>
                </Link>
                <Link href="/contact">
                  <CyberButton variant="outline" size="lg">
                    Book a Free Strategy Call
                  </CyberButton>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="cyber-border rounded-sm p-1 bg-black">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-03-12%2014.24.50%20-%20A%20futuristic%20business%20environment%20with%20a%20sleek%2C%20high-tech%20aesthetic.%20The%20image%20showcases%20advanced%20digital%20interfaces%2C%20holographic%20data%20displays%2C%20and%20a-MfHmKbQY8OkO3UQ5q0xa2ROnvF7wCG.webp"
                  alt="Futuristic Business Technology Interface"
                  width={500}
                  height={500}
                  className="rounded-sm object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
              <div className="absolute -top-4 -left-4 h-24 w-24 bg-gradient-to-tl from-red-500/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Circuit overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Services" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {svcList.map((svc: any) => {
              const IconComp = iconMap[svc.icon] || Database
              return (
                <ServiceCard
                  key={svc.title}
                  title={svc.title}
                  description={svc.short_description}
                  icon={
                    <IconComp className="h-8 w-8 text-emerald-500 transition-transform group-hover:scale-110 duration-300" />
                  }
                  href={svc.button_link}
                  buttonText={svc.button_text}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Core Values" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {valList.map((val: any) => (
              <div key={val.english_name} className="text-center p-6 bg-zinc-900 rounded-sm cyber-border group hover:bg-zinc-800 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-black mb-4 cyber-border group-hover:shadow-[0_0_15px_rgba(27,77,62,0.5)] transition-all duration-300">
                  <span className="text-2xl text-emerald-500 group-hover:animate-pulse">{val.letter}</span>
                </div>
                <h3 className="metallic-text text-xl font-bold mb-3">{val.english_name}</h3>
                <p className="text-white">{val.short_description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900/50">
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
