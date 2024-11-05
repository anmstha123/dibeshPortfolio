// next.config.js

const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: process.env.API_URL,
  //     },
  //   ],
  // },
  httpAgentOptions: {
    keepAlive: true,
  },
  distDir: 'build'
};

module.exports = nextConfig;
