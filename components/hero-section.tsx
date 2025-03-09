"use client"

import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#050505]" />

      <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
        <div className="max-w-3xl space-y-8 bg-[rgba(10,10,10,0.8)] p-8 rounded-lg border-2 border-[#2dd4bf] shadow-[0_0_15px_rgba(45,212,191,0.2)]">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Advanced <span className="text-[#2dd4bf]">Programming</span> &{" "}
            <span className="text-[#2dd4bf]">Automation</span> Solutions
          </h1>
          <p className="mx-auto max-w-xl text-[#f1f5f9] text-lg">
            Transforming complex challenges into elegant digital solutions. We specialize in custom programming and
            intelligent automation for businesses seeking technological excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="teal-button">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="teal-button-outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

