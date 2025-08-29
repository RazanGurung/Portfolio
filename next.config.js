/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization settings (these are valid)
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // If you actually use Server Actions, keep this as an object.
  // If not using Server Actions, delete the whole `experimental` block.
  experimental: {
    serverActions: {},
  },

  // Security headers (OK to keep — note this controls whether *your site*
  // can be embedded elsewhere; it does NOT block you from embedding Credly iframes)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ]
  },

  // If you want to let builds pass even with ESLint issues, uncomment:
  // eslint: { ignoreDuringBuilds: true },
}

module.exports = nextConfig
