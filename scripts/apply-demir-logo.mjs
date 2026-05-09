/**
 * Siyah (#000000 / çok koyu gri) arka planı şeffaf yapar; logo-header / logo-footer + webp üretir.
 * Kaynak: public/demir-brand-source.png — güncellenince bu scripti yeniden çalıştırın:
 *   node scripts/apply-demir-logo.mjs
 */
import sharp from "sharp";
import { readFile, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "public", "demir-brand-source.png");

/** Arka plan olarak kabul et: üç kanal da düşük (mavi vidanjör korpusunda B yüksek kalır) */
function shouldBeTransparent(r, g, b) {
  return r < 22 && g < 22 && b < 22;
}

const buf = await readFile(src);
const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
if (channels !== 4) throw new Error(`Beklenen RGBA, kanal: ${channels}`);

const out = new Uint8Array(data);
for (let i = 0; i < out.length; i += 4) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  if (shouldBeTransparent(r, g, b)) out[i + 3] = 0;
}

const processed = await sharp(Buffer.from(out), {
  raw: { width, height, channels: 4 },
})
  .png({ compressionLevel: 9, effort: 10 })
  .toBuffer();

const headerPng = join(root, "public", "logo-header.png");
const footerPng = join(root, "public", "logo-footer.png");

await writeFile(headerPng, processed);
await writeFile(footerPng, processed);

await sharp(processed).webp({ quality: 88, effort: 6 }).toFile(join(root, "public", "logo-header.webp"));
await sharp(processed).webp({ quality: 88, effort: 6 }).toFile(join(root, "public", "logo-footer.webp"));

const meta = await sharp(processed).metadata();
console.log("Logo güncellendi:", { width: meta.width, height: meta.height });
console.log("Yazıldı: logo-header.png, logo-footer.png, logo-header.webp, logo-footer.webp");
