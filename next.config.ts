import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export to ./out, served by Cloudflare as static assets
  output: "export",
  experimental: {
    // Inline the (small) Tailwind CSS into the HTML so it doesn't block paint
    inlineCss: true,
  },
  images: {
    // /_next/image requires a server; serve pre-resized files instead
    loader: "custom",
    loaderFile: "./src/app/lib/image-loader.ts",
    // Widths offered in srcset, matching the files in public/images/lessons
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [384],
  },
};

export default nextConfig;
