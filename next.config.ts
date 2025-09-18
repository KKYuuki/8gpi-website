import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable server components
  reactStrictMode: true,
  
  // Base path for deployment
  basePath: '',
  
  // Image optimization configuration
  images: {
    unoptimized: true,
    // Remove qualities as it's not needed with unoptimized: true
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
    ignoreBuildErrors: false, // Keep this as false to catch type errors
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false, // Keep this as false to catch lint errors
  },
  
  // Output configuration
  output: 'standalone',
  
  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,
  
  // Enable SWC minification
  swcMinify: true,
  
  // Compiler configuration
  compiler: {
    // Remove React-specific properties in production
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
