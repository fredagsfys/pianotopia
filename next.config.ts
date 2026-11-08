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
    // Widths offered in srcset, matching the pre-resized files (see
    // image-loader.ts). 384 is a device size too, so full-width images
    // (sizes="100vw") also offer it, e.g. the bio photo at 288px on desktop.
    deviceSizes: [384, 640, 828, 1200, 1920],
    imageSizes: [],
  },
};

export default nextConfig;
