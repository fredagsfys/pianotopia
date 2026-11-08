import type { ImageLoaderProps } from "next/image";

// Images with pre-resized copies on disk (<name>-<width>.<avif|webp>), and the
// widths that exist for each. Widths requested in srcset come from deviceSizes
// and imageSizes in next.config.ts.
const RESPONSIVE: Record<string, number[]> = {
  "/images/lessons/grupplektioner": [384, 640, 828, 1200, 1920],
  "/images/lessons/individuella": [384, 640, 828, 1200, 1920],
  "/images/bio/suzana": [384, 640, 828, 896],
};

// Static export has no /_next/image server, so pick the smallest pre-resized
// copy that is at least as wide as requested; other images are served as-is.
export default function imageLoader({ src, width }: ImageLoaderProps) {
  const [, base, ext] = src.match(/^(.*)\.(avif|webp)$/) ?? [];
  const widths = base ? RESPONSIVE[base] : undefined;
  if (!widths) return src;
  const w = widths.find((size) => size >= width) ?? widths.at(-1);
  return `${base}-${w}.${ext}`;
}
