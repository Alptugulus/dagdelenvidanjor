/**
 * PNG yolundan eş WebP yolunu üretir (public/ altındaki statik dosyalar).
 */
export function webpFromPng(pngPath: string): string {
  return pngPath.replace(/\.png$/i, ".webp");
}
