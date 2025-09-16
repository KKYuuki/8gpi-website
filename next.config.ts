import type { NextConfig } from "next";
import { loadEnvConfig } from '@next/env';

// Load environment variables
const projectDir = process.cwd();
loadEnvConfig(projectDir);

const nextConfig: NextConfig = {
  // Configure static export
  output: 'export',
  
  // Base path for deployment (empty for root domain)
  basePath: '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Environment variables
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY || '',
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
};

export default nextConfig;
