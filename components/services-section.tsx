import { Code, Database, Layers, Zap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-[#2dd4bf]" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to address your specific business challenges and requirements.",
    },
    {
      icon: <Zap className="h-10 w-10 text-[#2dd4bf]" />,
      title: "Process Automation",
      description:
        "Streamline your operations with intelligent automation that reduces manual tasks and increases efficiency.",
    },
    {
      icon: <Database className="h-10 w-10 text-[#2dd4bf]" />,
      title: "Data Integration & Analytics",
      description:
        "Connect disparate systems and extract meaningful insights from your data to drive informed decisions.",
    },
    {
      icon: <Layers className="h-10 w-10 text-[#2dd4bf]" />,
      title: "System Architecture",
      description:
        "Design robust, scalable system architectures that provide a solid foundation for your digital infrastructure.",
    },
  ]

  return (
    <section id="services" className="relative metallic-bg py-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-xl text-center mb-12 bg-[rgba(10,10,10,0.8)] p-6 rounded-lg border-2 border-[#2dd4bf] shadow-[0_0_15px_rgba(45,212,191,0.2)]">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-[#f1f5f9] text-lg">
            We deliver cutting-edge programming and automation solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="content-card bg-[#080808] border-2 border-[#2dd4bf] hover:bg-[#0a0a0a] transition-colors group overflow-hidden shadow-[0_0_15px_rgba(45,212,191,0.15)]"
            >
              <div className="relative z-10">
                <CardHeader>
                  <div className="mb-2 transition-all duration-300 group-hover:scale-110">{service.icon}</div>
                  <CardTitle className="text-white group-hover:text-[#2dd4bf] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#cbd5e1] text-base">{service.description}</CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

