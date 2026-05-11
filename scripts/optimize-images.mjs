import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

/** public/ altındaki tüm .png dosyaları (alt klasörler dahil) */
function listPngFiles(dir, base = dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...listPngFiles(full, base));
    } else if (ent.name.toLowerCase().endsWith(".png")) {
      out.push(path.relative(base, full));
    }
  }
  return out;
}

function maxWidthFor(relPath) {
  const n = relPath.replace(/\\/g, "/").toLowerCase();
  if (n.includes("logo")) return 960;
  if (n.includes("/services/") || n.startsWith("services/")) return 1600;
  if (n.includes("/hero/") || n.startsWith("hero/")) return 1920;
  if (n.startsWith("blog-")) return 1200;
  return 1920;
}

async function main() {
  const files = listPngFiles(publicDir);
  for (const rel of files) {
    const input = path.join(publicDir, rel);
    const outPath = path.join(publicDir, rel.replace(/\.png$/i, ".webp"));
    const maxW = maxWidthFor(rel);
    const isLogo = rel.toLowerCase().includes("logo");
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
    console.log(
      `${rel} → ${path.relative(publicDir, outPath)} (${(inStat.size / 1024).toFixed(0)}KB → ${(outStat.size / 1024).toFixed(0)}KB, ${pct}% smaller)`,
    );
  }
  console.log(`Done: ${files.length} WebP files`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
