import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const files = fs.readdirSync(publicDir).filter((f) => f.toLowerCase().endsWith(".png"));

function maxWidthFor(name) {
  const n = name.toLowerCase();
  if (n.includes("logo")) return 960;
  if (n.startsWith("blog-")) return 1200;
  return 1920;
}

async function main() {
  for (const file of files) {
    const input = path.join(publicDir, file);
    const outPath = path.join(publicDir, file.replace(/\.png$/i, ".webp"));
    const maxW = maxWidthFor(file);
    const isLogo = file.toLowerCase().includes("logo");
    const quality = isLogo ? 88 : 82;

    let pipeline = sharp(input);
    const meta = await pipeline.metadata();
    const w = meta.width ?? 0;
    if (maxW && w > maxW) {
      pipeline = pipeline.resize(maxW, null, { withoutEnlargement: true, fit: "inside" });
    }

    await pipeline.webp({ quality, effort: 5, smartSubsample: true }).toFile(outPath);

    const inStat = fs.statSync(input);
    const outStat = fs.statSync(outPath);
    const pct = ((1 - outStat.size / inStat.size) * 100).toFixed(0);
    console.log(`${file} → ${path.basename(outPath)} (${(inStat.size / 1024).toFixed(0)}KB → ${(outStat.size / 1024).toFixed(0)}KB, ${pct}% smaller)`);
  }
  console.log(`Done: ${files.length} WebP files`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
