import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/pianotopia",
  output: "export",
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "xsgames.co"],
  },
};

export default nextConfig;
