import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '',
  
  // Image optimization configuration
  images: {
    unoptimized: true,
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY || '',
    NEXT_PUBLIC_EMAIL_RECIPIENT: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT || '8gpi@1028business.ph',
  },
  
  // Configure trailing slashes
  trailingSlash: true,
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Output configuration for Cloudflare
  // Using 'standalone' output for better compatibility with Cloudflare
  output: 'standalone',
  
  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,
  
  // Enable experimental features for better Cloudflare compatibility
  experimental: {
    serverComponentsExternalPackages: ['@opennextjs/cloudflare'],
  },
  
  // Compiler configuration
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
