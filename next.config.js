/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['intercont.si'], // Allow images from our domain
  },
}

module.exports = nextConfig