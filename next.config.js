/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "res.cloudinary.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
