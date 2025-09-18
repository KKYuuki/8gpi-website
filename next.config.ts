import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for API routes to work
  // output: 'export',
  
  // Base path for deployment (empty for root domain)
  basePath: '',
  
  // Image optimization configuration
  images: {
    unoptimized: true,
    // Define allowed image qualities (required for Next.js 16+)
    qualities: [25, 50, 75, 100],
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY || '',
    NEXT_PUBLIC_EMAIL_RECIPIENT: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT || 'kennethcantillas@gmail.com',
  },
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure trailing slashes for static export
  trailingSlash: true,
  
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable server-side rendering for static export
  generateStaticParams: async () => ({}),
  
  // Disable the default static optimization
  experimental: {
    fallbackNodePolyfills: false,
  },
  
  // Compiler configuration
  compiler: {
    // Remove React-specific properties in production
    reactRemoveProperties: true,
  },
};

export default nextConfig;
