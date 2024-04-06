/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['https://customer-bucket-domitory.s3.ap-southeast-1.amazonaws.com'],
  }
}

module.exports = nextConfig
