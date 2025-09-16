import type { NextConfig } from "next";
import { loadEnvConfig } from '@next/env';

// Load environment variables
const projectDir = process.cwd();
loadEnvConfig(projectDir);

const nextConfig: NextConfig = {
  // Remove static export for OpenNext
  output: 'standalone',
  
  // Base path for deployment (empty for root domain)
  basePath: '',
  
  // Configure images for Cloudflare
  images: {
    unoptimized: true,
    domains: [],
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_EMAIL_RECIPIENT: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT || 'kennethcantillas@gmail.com',
  },
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure trailing slashes for consistency
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
        crypto: require.resolve('crypto-browserify'),
        path: false,
        os: false,
      };
    }

    // Disable source maps in production
    if (!dev) {
      config.devtool = false;
    }

    // Add Cloudflare Pages compatibility
    if (!isServer && !dev) {
      // Disable file system cache to prevent large cache files
      config.cache = false;
      
      // Configure output
      config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';
      
      // Configure experiments
      config.experiments = { 
        ...config.experiments,
        asyncWebAssembly: true,
        layers: true,
        // Disable webpack cache
        cacheUnaffected: false
      };
      
      // Disable performance hints
      config.performance = {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      };
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
  }
};

export default nextConfig;
