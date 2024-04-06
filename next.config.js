/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['http://fib-deploy.s3-website-ap-southeast-1.amazonaws.com'],
  }
}

module.exports = nextConfig
