/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  output: 'export',
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = {
  ...pwaConfig,
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
