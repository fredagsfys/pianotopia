import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export to ./out, served by Cloudflare as static assets
  output: "export",
  images: {
    // /_next/image requires a server; resize via the image host instead
    loader: "custom",
    loaderFile: "./src/app/lib/image-loader.ts",
  },
};

export default nextConfig;
