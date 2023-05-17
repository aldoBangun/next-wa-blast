/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'daisyui.com',
      },
    ],
  }
}

module.exports = nextConfig
