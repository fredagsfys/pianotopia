import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath: "/pianotopia",
  // output: "export",
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "xsgames.co",
      "myrstackstrapistorefront.blob.core.windows.net",
    ],
  },
};

export default nextConfig;
