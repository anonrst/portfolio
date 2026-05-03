/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ghchart.rshah.org', 'storage.googleapis.com'],
  },
  // Enable static export for better SEO
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
