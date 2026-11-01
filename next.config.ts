import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export to ./out, served by Cloudflare as static assets
  output: "export",
  images: {
    // /_next/image requires a server; serve images as-is instead
    unoptimized: true,
  },
};

export default nextConfig;
