/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  optimization: {
    minimize: false
  },
  compress: false,
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xypherspot.com',
      },
    ],
  },
}