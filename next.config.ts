import type { NextConfig } from "next";

const basePath = ''; // Set this if you need a base path (e.g., '/my-app')

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  
  images: {
    unoptimized: true,
    domains: [],
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
