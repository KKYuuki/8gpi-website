import type { NextConfig } from "next";
import { loadEnvConfig } from '@next/env';
import webpack from 'webpack';

// Load environment variables manually
const projectDir = process.cwd();
loadEnvConfig(projectDir);

const nextConfig: NextConfig = {
  env: {
    // This makes the variable available on the server side
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_EMAIL_RECIPIENT: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT || 'kennethcantillas@gmail.com',
  },
  webpack: (config) => {
    // Add environment variables to the client side
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          RESEND_API_KEY: JSON.stringify(process.env.RESEND_API_KEY),
          NEXT_PUBLIC_EMAIL_RECIPIENT: JSON.stringify(
            process.env.NEXT_PUBLIC_EMAIL_RECIPIENT || 'kennethcantillas@gmail.com'
          )
        }
      })
    );
    return config;
  },
};

export default nextConfig;
