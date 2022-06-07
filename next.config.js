/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL:process.env.API_URL,
    API_VERSION:process.env.API_VERSION,
    API_KEY: process.env.API_KEY,
    API_LANG:process.env.API_LANG
  }
}

module.exports = nextConfig
