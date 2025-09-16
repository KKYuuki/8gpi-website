import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Vercel
  output: 'export',
  
  // Base path for deployment (empty for root domain)
  basePath: '',
  
  // Configure images for static export
  images: {
    unoptimized: true,
  },
  
  // Enable trailing slashes for static export
  trailingSlash: true,
  
  // Environment variables
  env: {
    NEXT_PUBLIC_EMAIL_RECIPIENT: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT || 'kennethcantillas@gmail.com',
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
  
  // Generate a static export
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;
