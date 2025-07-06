/** @type {import('next').NextConfig} */
const nextConfig = {
  // FORCE DYNAMIC RENDERING - NO STATIC GENERATION
  output: undefined, // Remove any static export
  trailingSlash: false,
  
  // Disable static optimization completely
  experimental: {
    isrMemoryCacheSize: 0,
  },
  
  // Force all pages to be dynamic
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, nosnippet, noarchive',
          },
        ],
      },
    ]
  },
  
  // Ensure no static generation
  generateStaticParams: false,
  
  // Standard settings
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
}

export default nextConfig
