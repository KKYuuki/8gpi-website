import type { NextConfig } from "next";

const basePath = ''; // Set this if you need a base path (e.g., '/my-app')

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  
  images: {
    unoptimized: true,
    domains: [],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    qualities: [25, 50, 75, 100]
  },
  
  trailingSlash: true,
  
  env: {
    NEXT_PUBLIC_EMAIL_RECIPIENT: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT || 'kennethcantillas@gmail.com',
    NEXT_PUBLIC_BASE_URL: process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
  },
  
  reactStrictMode: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable server-side rendering for static export
  distDir: '.next',
  
  // Ensure static export works with dynamic routes
  exportPathMap: async function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/products': { page: '/products' },
      '/projects': { page: '/projects' },
      // Add any other dynamic routes here
    };
  },
};

export default nextConfig;
