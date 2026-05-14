/**
 * Build-time pre-rendering: Puppeteer ile dist/ içindeki her rotayı tarayıp
 * statik HTML dosyaları olarak kaydeder. Google crawler JS çalıştırmadan
 * sayfa içeriğini (title, meta, schema, body) görebilir.
 *
 * Kullanım: npm run build && node scripts/prerender.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "node:http";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "..", "dist");
const PORT = 4173;

const ROUTES = [
  "/",
  "/hakkimizda",
  "/hizmetlerimiz",
  "/hizmet-bolgeleri",
  "/blog",
  "/iletisim",
  "/blog/kanal-tikanikligi-aninda-ne-yapilmali",
  "/blog/fosseptik-cekimi-ne-zaman-gerekir",
  "/blog/isletmeler-icin-yag-tutucu-bakim-rehberi",
];

const ilceSlugs = [
  "arnavutkoy", "avcilar", "bagcilar", "bahcelievler", "bakirkoy",
  "basaksehir", "bayrampasa", "besiktas", "beylikduzu", "beyoglu",
  "buyukcekmece", "catalca", "esenler", "esenyurt", "eyupsultan",
  "fatih", "gaziosmanpasa", "gungoren", "kagithane", "kucukcekmece",
  "sariyer", "silivri", "sultangazi", "sisli", "zeytinburnu",
];
for (const slug of ilceSlugs) {
  ROUTES.push(`/hizmet-bolgeleri/avrupa-yakasi/${slug}`);
}

function serve(dir, port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = path.join(dir, req.url === "/" ? "index.html" : req.url);
      if (!fs.existsSync(filePath)) {
        filePath = path.join(dir, "index.html");
      }
      const ext = path.extname(filePath).toLowerCase();
      const mime = {
        ".html": "text/html",
        ".js": "application/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".webp": "image/webp",
        ".svg": "image/svg+xml",
        ".woff2": "font/woff2",
      }[ext] || "application/octet-stream";

      try {
        const data = fs.readFileSync(filePath);
        res.writeHead(200, { "Content-Type": mime });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.listen(port, () => resolve(server));
  });
}

async function main() {
  if (!fs.existsSync(DIST)) {
    console.error("dist/ bulunamadı — önce `npm run build` çalıştırın.");
    process.exit(1);
  }

  const server = await serve(DIST, PORT);
  console.log(`Lokal sunucu :${PORT} üzerinde çalışıyor`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let success = 0;
  let failed = 0;

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    try {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle0", timeout: 15000 });

      // useSEO hook'unun title/meta'yı set etmesini bekle
      await page.waitForFunction(() => document.title && document.title !== "Demir Vidanjör — Avrupa Yakası 7/24" || document.querySelector("#hero-heading"), { timeout: 5000 }).catch(() => {});

      const html = await page.content();
      await page.close();

      // /hizmetlerimiz → dist/hizmetlerimiz/index.html
      const outDir = route === "/"
        ? DIST
        : path.join(DIST, ...route.split("/").filter(Boolean));

      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");

      success++;
      console.log(`✓ ${route}`);
    } catch (err) {
      failed++;
      console.error(`✗ ${route} — ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  console.log(`\nPrerender tamamlandı: ${success} başarılı, ${failed} hata`);
  if (failed > 0) process.exit(1);
}

main();
