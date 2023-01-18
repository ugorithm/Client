/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    web_url: process.env["web_url"]
  }
}

module.exports = nextConfig
