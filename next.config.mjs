/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // Redirect straight to the real file (not a trailing-slash
      // pseudo-directory - Next's default trailing-slash handling fights
      // that and loops). Landing on /resume/index.html makes every relative
      // asset path (img/*.webp) in the page resolve against /resume/ correctly.
      { source: '/resume', destination: '/resume/index.html', permanent: false },
    ]
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'oclfheqitoiuphsvorce.supabase.co',
      },
    ],
  },
}

export default nextConfig
