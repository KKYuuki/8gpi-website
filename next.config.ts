import type { NextConfig } from "next";
import { loadEnvConfig } from '@next/env';

// Load environment variables
const projectDir = process.cwd();
loadEnvConfig(projectDir);

const nextConfig: NextConfig = {
  // Configure static export for Cloudflare Pages
  output: 'export',
  
  // Base path for deployment (empty for root domain)
  basePath: '',
  
  // Configure images for static export
  // Image optimization is handled by Cloudflare Pages
  images: {
    unoptimized: true,
    domains: [],
    loader: 'custom',
    loaderFile: './src/utils/image-loader.js',
  },
  
  // Environment variables
  env: {
    // Public environment variables
    NEXT_PUBLIC_EMAIL_RECIPIENT: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT || 'kennethcantillas@gmail.com',
    
    // Server-side environment variables (will be replaced at build time)
    RESEND_API_KEY: process.env.RESEND_API_KEY || '',
  },
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure trailing slashes for static export
  trailingSlash: true,
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Webpack configuration for Cloudflare Pages
  webpack: (config, { isServer, dev }) => {
    // Fixes npm packages that depend on `node:` protocol (not available in browser)
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        dns: false,
        child_process: false,
        dgram: false,
        zlib: false,
        http: false,
        https: false,
        stream: false,
        crypto: false,
        path: false,
        os: false,
      };
    }

    // Add Cloudflare Pages compatibility
    if (!isServer && !dev) {
      config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';
      config.experiments = { asyncWebAssembly: true };
    }

    return config;
  },
  
  // Disable the default static optimization
  experimental: {
    fallbackNodePolyfills: false,
  },
  
  // Generate a static export
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Enable static HTML export
  // This is required for Cloudflare Pages
  outputFileTracing: true,
  
};

export default nextConfig;
