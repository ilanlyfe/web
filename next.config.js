/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    console.log("webpack configx: ", config);
    config.resolve.fallback = { fs: false };

    return config;
  },
}

module.exports = nextConfig
