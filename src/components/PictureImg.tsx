import type { ImgHTMLAttributes } from "react";
import { webpFromPng } from "../lib/image";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  /** Örn. /slider-1.png — aynı kök adlı .webp ile <picture> üretir */
  src: string;
  /** Varsayılan: block h-full w-full (LCP / kart dolgusu için) */
  pictureClassName?: string;
};

/**
 * WebP + PNG geri dönüşü: LCP ve bant genişliği için WebP öncelikli.
 */
export function PictureImg({ src, alt = "", pictureClassName, className, style, ...imgProps }: Props) {
  const webp = webpFromPng(src);
  return (
    <picture className={pictureClassName ?? "block h-full w-full"}>
      <source type="image/webp" srcSet={webp} />
      <img src={src} alt={alt} {...imgProps} className={className} style={style} />
    </picture>
  );
}
