/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Output standalone for easier DirectAdmin deployment
  output: 'standalone',
  // Compression for better performance
  compress: true,
  // Power only server-side routes
  poweredByHeader: false,
}

export default nextConfig
