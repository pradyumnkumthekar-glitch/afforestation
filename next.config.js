/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Note: output: 'export' is omitted to ensure API routes like /api/chat are not disabled.
};

module.exports = nextConfig;
