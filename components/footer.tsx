import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Twitter, Phone, Mail, MapPin } from "lucide-react"
import { getNavItems, getSetting } from "@/lib/cms"

export default async function Footer() {
  const [nav, tagline, phone, email, address, instagramUrl, youtubeUrl, twitterUrl] = await Promise.all([
    getNavItems().catch(() => null),
    getSetting("tagline").catch(() => null),
    getSetting("phone").catch(() => null),
    getSetting("email").catch(() => null),
    getSetting("address").catch(() => null),
    getSetting("instagram_url").catch(() => null),
    getSetting("youtube_url").catch(() => null),
    getSetting("twitter_url").catch(() => null),
  ])

  const navItems = nav ?? [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ]

  return (
    <footer className="border-t border-zinc-800 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-10 h-10 mr-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/output-onlinepngtools%20%286%29-2ANOOH7A6DqKwij49O5WbsIcU1shVO.png"
                  alt="Kryptoxotis Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="metallic-text text-xl font-bold">KRYPTOXOTIS</h3>
            </div>
            <p className="text-white mb-4">
              {tagline ?? "Empowering businesses with innovative technology solutions - innovation, loyalty, integrity."}
            </p>
            <div className="flex space-x-4">
              <Link
                href={instagramUrl ?? "https://instagram.com/Kryptoxotis"}
                className="group transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-zinc-300 group-hover:text-red-500" />
              </Link>
              <Link
                href={youtubeUrl ?? "https://youtube.com/Kryptoxotis"}
                className="group transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-zinc-300 group-hover:text-red-500" />
              </Link>
              <Link
                href={twitterUrl ?? "https://twitter.com/Kryptoxotis"}
                className="group transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-5 w-5 text-zinc-300 group-hover:text-red-500" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="metallic-text text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item: any) => (
                <li key={item.href}>
                  <Link href={item.href} className="metallic-silver-text transition-all duration-300 hover:metallic-red-text">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="metallic-text text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-emerald-500" />
                <span className="text-white">{phone ?? "915 373 3640"}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-emerald-500" />
                <a
                  href={`mailto:${email ?? "aidan@kryptoxotis.io"}`}
                  className="metallic-silver-text transition-all duration-300 hover:metallic-red-text"
                >
                  {email ?? "aidan@kryptoxotis.io"}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-emerald-500" />
                <span className="text-white">{address ?? "El Paso, Texas"}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-400">&copy; {new Date().getFullYear()} Kryptoxotis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
