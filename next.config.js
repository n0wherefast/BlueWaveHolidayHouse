/** @type {import('next').NextConfig} */

const nextConfig = {}
const withVideos = require('next-videos')

module.exports = nextConfig

module.exports = {
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    }
  }


module.exports = withVideos() 