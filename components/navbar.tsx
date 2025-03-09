"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#2dd4bf] bg-[#050505] backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kryptoxotis-hoeja6oYHejrdIrRoGtZXw7cYDtpvE.png"
              alt="Kryptoxotis Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold tracking-tight text-white">Kryptoxotis</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm font-medium text-[#2dd4bf] hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium text-[#2dd4bf] hover:text-white transition-colors">
            About
          </Link>
          <Link href="#work" className="text-sm font-medium text-[#2dd4bf] hover:text-white transition-colors">
            Work
          </Link>
          <Link href="#contact" className="text-sm font-medium text-[#2dd4bf] hover:text-white transition-colors">
            Contact
          </Link>
          <Button className="teal-button">Get Started</Button>
        </nav>

        <button
          className="flex md:hidden items-center justify-center rounded-md p-2 text-[#2dd4bf]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-[#2dd4bf] bg-[#080808] relative z-10">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="#services"
              className="px-4 py-2 text-sm font-medium text-[#2dd4bf] hover:bg-[#0a0a0a] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="px-4 py-2 text-sm font-medium text-[#2dd4bf] hover:bg-[#0a0a0a] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#work"
              className="px-4 py-2 text-sm font-medium text-[#2dd4bf] hover:bg-[#0a0a0a] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-[#2dd4bf] hover:bg-[#0a0a0a] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="teal-button">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  )
}

