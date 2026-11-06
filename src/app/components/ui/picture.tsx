import { getImageProps, type ImageProps } from "next/image";
import { preload } from "react-dom";

type PictureProps = Omit<ImageProps, "src"> & {
  // Path without extension; <src>.avif and <src>.webp must both exist
  src: string;
};

// next/image with an AVIF source and WebP fallback. Static export can't
// negotiate formats on the server, so let the browser pick via <picture>.
export default function Picture({ src, ...props }: PictureProps) {
  const {
    props: { srcSet: avifSrcSet },
  } = getImageProps({ ...props, src: `${src}.avif` });
  const { props: img } = getImageProps({ ...props, src: `${src}.webp` });

  // getImageProps doesn't preload like <Image priority> does. Browsers
  // without AVIF ignore a typed preload and fetch the WebP from the <img>.
  if (props.priority && avifSrcSet) {
    preload(`${src}.avif`, {
      as: "image",
      type: "image/avif",
      fetchPriority: "high",
      imageSrcSet: avifSrcSet,
      imageSizes: img.sizes,
    });
  }

  return (
    // display: contents keeps the <img> laid out as if it had no wrapper. The
    // <source> must then be hidden, or it becomes a flex/grid item itself.
    <picture style={{ display: "contents" }}>
      <source
        type="image/avif"
        srcSet={avifSrcSet}
        sizes={img.sizes}
        style={{ display: "none" }}
      />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from props */}
      <img {...img} />
    </picture>
  );
}
