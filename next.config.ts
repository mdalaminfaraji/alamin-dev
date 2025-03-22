import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.ibb.co"],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.resolve.modules = [
      ...config.resolve.modules,
      path.resolve(__dirname, "src"),
    ];
    return config;
  },
};
export default nextConfig;
