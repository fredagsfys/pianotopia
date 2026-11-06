import type { ImageLoaderProps } from "next/image";

// Pre-generated widths in public/images/lessons, must match deviceSizes and
// imageSizes in next.config.ts
const LESSON_WIDTHS = [384, 640, 828, 1200, 1920];

// Static export has no /_next/image server, so lesson images use pre-resized
// files (name-<width>.webp) and other local images are served as-is.
export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (src.startsWith("/images/lessons/")) {
    const w =
      LESSON_WIDTHS.find((size) => size >= width) ?? LESSON_WIDTHS.at(-1);
    return src.replace(/\.webp$/, `-${w}.webp`);
  }
  return src;
}
