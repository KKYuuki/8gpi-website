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
    // These will be available at build time
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_RECIPIENT: process.env.EMAIL_RECIPIENT || '8gpi@1028business.ph',
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
  output: 'export',
  
  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,
  
  // Compiler configuration
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
