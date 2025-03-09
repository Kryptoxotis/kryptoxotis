import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function WorkSection() {
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "software", label: "Software" },
    { id: "automation", label: "Automation" },
    { id: "integration", label: "Integration" },
  ]

  const projects = [
    {
      id: 1,
      title: "Enterprise Resource Planning System",
      category: "software",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Custom ERP solution for a manufacturing company that streamlined operations and increased efficiency by 40%.",
    },
    {
      id: 2,
      title: "Warehouse Automation Platform",
      category: "automation",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Intelligent automation system that reduced manual handling by 75% and improved order fulfillment speed.",
    },
    {
      id: 3,
      title: "Financial Data Integration Hub",
      category: "integration",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Secure platform connecting multiple financial systems with real-time data synchronization and reporting.",
    },
    {
      id: 4,
      title: "Smart Factory Control System",
      category: "automation",
      image: "/placeholder.svg?height=400&width=600",
      description: "IoT-based factory monitoring and control system that optimized production and reduced downtime.",
    },
    {
      id: 5,
      title: "Healthcare Management Software",
      category: "software",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Comprehensive patient management system with secure data handling and integrated billing capabilities.",
    },
    {
      id: 6,
      title: "E-commerce API Integration",
      category: "integration",
      image: "/placeholder.svg?height=400&width=600",
      description: "Seamless integration between multiple e-commerce platforms and inventory management systems.",
    },
  ]

  return (
    <section id="work" className="metallic-bg py-20 relative">
      <div className="container relative z-10">
        <div className="mx-auto max-w-xl text-center mb-12 bg-[rgba(10,10,10,0.8)] p-6 rounded-lg border-2 border-[#2dd4bf] shadow-[0_0_15px_rgba(45,212,191,0.2)]">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Work</h2>
          <p className="mt-4 text-[#f1f5f9] text-lg">
            Explore our portfolio of successful projects that have transformed businesses across industries.
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="mx-auto flex flex-wrap justify-center gap-2 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-full border-2 border-[#2dd4bf] bg-[#080808] px-4 py-2 text-sm text-white hover:bg-[#0a0a0a] data-[state=active]:teal-button data-[state=active]:text-[#050505]"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.category === category.id)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button className="teal-button">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="content-card overflow-hidden bg-[#080808] border-2 border-[#2dd4bf] hover:bg-[#0a0a0a] transition-colors group relative shadow-[0_0_15px_rgba(45,212,191,0.15)]">
      <div className="relative z-10">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-white group-hover:text-[#2dd4bf] transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-[#cbd5e1]">{project.description}</p>
          <Link href="#" className="mt-4 inline-flex items-center text-sm font-medium text-[#2dd4bf] hover:text-white">
            View Case Study
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </CardContent>
      </div>
    </Card>
  )
}

