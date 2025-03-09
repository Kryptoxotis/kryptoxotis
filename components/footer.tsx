import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="metallic-bg border-t-2 border-[#2dd4bf] relative">
      <div className="container py-12 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
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
            <p className="mt-4 text-sm text-[#f1f5f9]">
              Transforming complex challenges into elegant digital solutions through advanced programming and
              intelligent automation.
            </p>

            <div className="mt-6 flex space-x-4">
              <Link href="#" className="social-icon-link">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/twitter-mJHZIEgwSdZ8RjMFXz3xd6ThgXw8DR.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="social-icon"
                />
              </Link>
              <Link href="#" className="social-icon-link">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/facebook-XKKEp6h17fBrswzEEOlIpqsUk64rO9.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="social-icon"
                />
              </Link>
              <Link href="#" className="social-icon-link">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/instagram-rbXLx5F77mQACuABoiFZ8AYsVBj8mi.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="social-icon"
                />
              </Link>
              <Link href="#" className="social-icon-link">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/discord-IcVVY5pQzyAPqgfpnZ21GGdwluM30Q.png"
                  alt="Discord"
                  width={24}
                  height={24}
                  className="social-icon"
                />
              </Link>
              <Link href="#" className="social-icon-link">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-p2w5w4P1DqDTKTsX3PY09MaKQoy7Ty.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="social-icon"
                />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Process Automation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Data Integration & Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  System Architecture
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#2dd4bf] hover:text-white transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#2dd4bf] pt-8 text-center">
          <p className="text-sm text-[#f1f5f9]">© {new Date().getFullYear()} Kryptoxotis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

