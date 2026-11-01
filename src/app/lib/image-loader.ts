import type { ImageLoaderProps } from "next/image";

// Static export has no /_next/image server, so let Unsplash resize its own
// images and serve local images as-is.
export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 80));
    return url.toString();
  }
  return src;
}
