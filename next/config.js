/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO_URL: process.env.local.MONGO_URL,
  },
};

module.exports = nextConfig;
