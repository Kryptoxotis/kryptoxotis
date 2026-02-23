"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Mail, Globe, Instagram, Youtube, Twitter, Download, MapPin, DollarSign, Banknote, Check } from "lucide-react"

const contacts = [
  { icon: Phone, label: "(915) 373-3640", href: "tel:+19153733640", color: "from-emerald-400 to-emerald-600" },
  { icon: Mail, label: "kryptoxotis@gmail.com", href: "mailto:kryptoxotis@gmail.com", color: "from-emerald-400 to-teal-500" },
  { icon: Globe, label: "kryptoxotis.io", href: "https://kryptoxotis.io", color: "from-teal-400 to-cyan-500" },
  { icon: MapPin, label: "El Paso, Texas", href: "https://maps.google.com/?q=El+Paso+Texas", color: "from-cyan-400 to-emerald-500" },
]

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/Kryptoxotis", hoverColor: "hover:text-pink-400 hover:shadow-pink-500/30" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/Kryptoxotis", hoverColor: "hover:text-red-400 hover:shadow-red-500/30" },
  { icon: Twitter, label: "X / Twitter", href: "https://twitter.com/Kryptoxotis", hoverColor: "hover:text-sky-400 hover:shadow-sky-500/30" },
]

function saveContact() {
  const vcf = `BEGIN:VCARD
VERSION:3.0
FN:Aidan Gaystardo
ORG:Kryptoxotis
TITLE:Programming Engineer
TEL;TYPE=CELL:+19153733640
EMAIL:kryptoxotis@gmail.com
URL:https://kryptoxotis.io
ADR;TYPE=WORK:;;El Paso;Texas;;US
END:VCARD`
  const blob = new Blob([vcf], { type: "text/vcard" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "Aidan_Gaystardo_Kryptoxotis.vcf"
  a.click()
  URL.revokeObjectURL(url)
}

export default function CardPage() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })
  const [zelleCopied, setZelleCopied] = useState(false)

  useEffect(() => {
    setMounted(true)
    const header = document.querySelector("header")
    const footer = document.querySelector("footer")
    if (header) header.style.display = "none"
    if (footer) footer.style.display = "none"
    return () => {
      if (header) header.style.display = ""
      if (footer) footer.style.display = ""
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({ x: (y - 0.5) * -12, y: (x - 0.5) * 12 })
    setGlarePos({ x: x * 100, y: y * 100 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setGlarePos({ x: 50, y: 50 })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated circuit background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="#10b981" opacity="0.6" />
              <circle cx="50" cy="30" r="1" fill="#10b981" opacity="0.4" />
              <circle cx="90" cy="70" r="1.5" fill="#10b981" opacity="0.6" />
              <circle cx="30" cy="80" r="1" fill="#10b981" opacity="0.4" />
              <circle cx="70" cy="50" r="1" fill="#10b981" opacity="0.3" />
              <path d="M10 10 L50 10 L50 30" stroke="#10b981" strokeWidth="0.5" fill="none" opacity="0.3" />
              <path d="M50 30 L90 30 L90 70" stroke="#10b981" strokeWidth="0.5" fill="none" opacity="0.3" />
              <path d="M30 80 L70 80 L70 50" stroke="#10b981" strokeWidth="0.5" fill="none" opacity="0.3" />
              <path d="M10 10 L10 80 L30 80" stroke="#10b981" strokeWidth="0.5" fill="none" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Radial glow behind card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />

      {/* The Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full max-w-md transition-all duration-200 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{
          perspective: "1000px",
          transitionDelay: "0.1s",
        }}
      >
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.15s ease-out",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Card border glow */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-emerald-500/50 via-transparent to-emerald-500/30 z-0" />

          {/* Holographic glare overlay */}
          <div
            className="absolute inset-0 z-20 pointer-events-none rounded-2xl opacity-10"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
            }}
          />

          {/* Card content */}
          <div className="relative z-10 bg-zinc-950/95 backdrop-blur-xl rounded-2xl p-8 sm:p-10">
            {/* Top accent line */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            {/* Logo */}
            <div className={`flex justify-center mb-6 transition-all duration-700 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} style={{ transitionDelay: "0.3s" }}>
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-emerald-500/15 rounded-full scale-150 animate-pulse" />
                <Image
                  src="/logo-card.png"
                  alt="Kryptoxotis"
                  width={140}
                  height={140}
                  className="relative drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  priority
                />
              </div>
            </div>

            {/* Name and title */}
            <div className={`text-center mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "0.5s" }}>
              <h1 className="metallic-text text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">
                KRYPTOXOTIS
              </h1>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto my-3" />
              <p className="text-white text-lg font-medium">Aidan Gaystardo</p>
              <p className="text-emerald-400/80 text-sm tracking-widest uppercase mt-1">Programming Engineer</p>
            </div>

            {/* Contact links */}
            <div className={`space-y-3 mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "0.7s" }}>
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/30 hover:bg-emerald-500/[0.05] transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-zinc-300 group-hover:text-white transition-colors text-sm sm:text-base">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className={`flex justify-center gap-5 mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "0.9s" }}>
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`w-12 h-12 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 transition-all duration-300 hover:scale-110 hover:shadow-lg ${item.hoverColor}`}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Payment links */}
            <div className={`flex justify-center gap-3 mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "1.0s" }}>
              <a
                href="https://cash.app/$aidangaystardo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-green-500/30 hover:bg-green-500/[0.05] transition-all duration-300 group"
              >
                <DollarSign className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                <span className="text-zinc-300 group-hover:text-white text-sm font-medium">Cash App</span>
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("9153733640")
                  setZelleCopied(true)
                  setTimeout(() => setZelleCopied(false), 2000)
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/[0.05] transition-all duration-300 group"
              >
                {zelleCopied ? (
                  <Check className="h-5 w-5 text-purple-400" />
                ) : (
                  <Banknote className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                )}
                <span className="text-zinc-300 group-hover:text-white text-sm font-medium">
                  {zelleCopied ? "# Copied!" : "Zelle"}
                </span>
              </button>
            </div>

            {/* Save Contact button */}
            <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "1.2s" }}>
              <button
                onClick={saveContact}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="h-5 w-5" />
                Save Contact
              </button>
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}
