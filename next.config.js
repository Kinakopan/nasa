/** @type {import('next').NextConfig} */
const nextConfig = {

}

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["technology.nasa.gov", "epic.gsfc.nasa.gov"]
  },
  env: {
    API_KEY: process.env.API_KEY,
  }
}
