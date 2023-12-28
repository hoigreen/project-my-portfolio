/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-international', 'international-types'],
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
}

module.exports = nextConfig
