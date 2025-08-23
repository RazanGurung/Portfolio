/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Configure allowed dev origins for cross-origin requests
  allowedDevOrigins: ['192.168.1.150', 'localhost'],
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable experimental features for better performance
  experimental: {
    // Enable server actions if needed in the future
    serverActions: true,
  },
  
  // Configure headers for better security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig