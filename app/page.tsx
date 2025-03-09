import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MetallicBackground } from "@/components/metallic-background"
import { CircuitLines } from "@/components/circuit-lines"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <MetallicBackground />
      {/* Circuit lines with maximum visibility */}
      <CircuitLines intensity={1.2} lineWidth={1.5} lineCount={2} zIndex={1} />
      <div className="relative z-20">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <WorkSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

