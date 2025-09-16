import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Vercel
  output: 'export',
  
  // Base path for deployment (empty for root domain)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  
  // Configure images for static export
  images: {
    unoptimized: true,
  },
  
  // Enable trailing slashes for static export
  trailingSlash: true,
  
  // Environment variables
  env: {
    NEXT_PUBLIC_EMAIL_RECIPIENT: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT || 'kennethcantillas@gmail.com',
    NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '',
  },
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Asset prefix for static exports
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

export default nextConfig;
