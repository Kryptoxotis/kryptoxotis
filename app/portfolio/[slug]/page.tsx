import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Tag, ExternalLink } from "lucide-react"
import { CyberButton } from "@/components/ui/cyber-button"
import { getPortfolioItemBySlug } from "@/lib/cms"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params
  const item = await getPortfolioItemBySlug(slug)

  if (!item) {
    notFound()
  }

  const tags = Array.isArray(item.tags)
    ? item.tags
    : typeof item.tags === "string"
      ? item.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
      : []

  const additionalImages = item.images
    ? item.images.split(",").map((url: string) => url.trim()).filter(Boolean)
    : []

  const isValidExternalUrl = (url: string) => {
    try {
      const u = new URL(url)
      return u.protocol === "https:" || u.protocol === "http:"
    } catch {
      return false
    }
  }

  return (
    <div className="flex flex-col">
      {/* Back Navigation */}
      <section className="py-6 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-emerald-500 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {item.category && (
              <div className="mb-4">
                <span className="inline-block bg-emerald-500 text-black px-3 py-1 rounded-sm text-sm font-bold">
                  {item.category}
                </span>
                {item.featured && (
                  <span className="inline-block bg-zinc-800 text-emerald-400 px-3 py-1 rounded-sm text-sm font-medium ml-2">
                    Featured
                  </span>
                )}
              </div>
            )}

            <h1 className="metallic-text text-4xl md:text-5xl font-bold mb-4">{item.title}</h1>

            {item.client_name && (
              <p className="text-emerald-400/70 text-lg mb-6">{item.client_name}</p>
            )}

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag: string) => (
                  <span key={tag} className="flex items-center bg-zinc-800 text-white px-3 py-1 rounded-sm text-sm">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Image */}
      {item.image_url && (
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-sm overflow-hidden cyber-border">
                <Image
                  src={item.image_url}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-zinc-300 text-lg leading-relaxed whitespace-pre-line">
              {item.content || item.description}
            </div>
          </div>
        </div>
      </section>

      {/* Live Site Preview */}
      {item.external_url && isValidExternalUrl(item.external_url) && (
        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="metallic-text text-2xl font-bold">Live Preview</h2>
                <a
                  href={item.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-500 hover:text-emerald-400 transition-colors text-sm"
                >
                  Open in new tab
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
              <div className="rounded-sm overflow-hidden cyber-border bg-white">
                <iframe
                  src={item.external_url}
                  title={`${item.title} live preview`}
                  className="w-full h-[600px] border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>
              <p className="text-zinc-500 text-sm mt-2">Some websites may block previews. Use the &ldquo;Open in new tab&rdquo; link above if the preview doesn&apos;t load.</p>
            </div>
          </div>
        </section>
      )}

      {/* Additional Images Gallery */}
      {additionalImages.length > 0 && (
        <section className="pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="metallic-text text-2xl font-bold mb-6">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalImages.map((url: string, i: number) => (
                  <div key={url} className="relative aspect-video rounded-sm overflow-hidden cyber-border">
                    <Image
                      src={url}
                      alt={`${item.title} screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 448px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-6 bg-zinc-900 rounded-sm cyber-border">
              <h3 className="metallic-text text-xl font-bold mb-4">Interested in a Similar Solution?</h3>
              <p className="text-white mb-4">
                We build custom dashboards, automation systems, and web applications tailored to your business needs.
              </p>
              <Link href="/contact">
                <CyberButton>Get in Touch</CyberButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
