/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'apod.nasa.gov'
    }, {
      protocol: 'http',
      hostname: 'www.youtube.com'
    }]
  }
}

module.exports = nextConfig
