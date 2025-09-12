import path from 'path'
import { fileURLToPath } from 'url'
import nextMDX from '@next/mdx'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const withMDX = nextMDX({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },

  // Disable telemetry to avoid trace file issues
  telemetry: false,

  // Experimental features to improve Windows compatibility
  experimental: {
    // Disable SWC file watcher to prevent permission issues
    swcFileReading: false,
  },

  images: {
    domains: ['superstack.co.za', 'www.superstack.co.za', 'superstacksolutions.co.za', 'www.superstacksolutions.co.za'],
  },

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },

  webpack: (config, { dev, isServer }) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    
    // Optimize for Windows development
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    
    return config
  },
}

export default withMDX(nextConfig)
