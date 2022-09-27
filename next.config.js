/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['totaldrive.co.uk','avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
