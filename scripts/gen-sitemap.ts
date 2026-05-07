import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { avrupaYakasiIlceleri, generateSlug } from "../src/data/locations";
import { posts } from "../src/data/posts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SITE = "https://www.vidanjor.com";
const isoDate = () => new Date().toISOString().split("T")[0];

type Entry = { path: string; changefreq: string; priority: string };

const staticPaths: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/hakkimizda", changefreq: "monthly", priority: "0.85" },
  { path: "/hizmetlerimiz", changefreq: "monthly", priority: "0.9" },
  { path: "/hizmet-bolgeleri", changefreq: "weekly", priority: "0.85" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/iletisim", changefreq: "monthly", priority: "0.75" },
];

const urls: Entry[] = [
  ...staticPaths,
  ...avrupaYakasiIlceleri.map((ilce) => ({
    path: `/hizmet-bolgeleri/avrupa-yakasi/${generateSlug(ilce)}`,
    changefreq: "monthly",
    priority: "0.75",
  })),
  ...posts.map((p) => ({
    path: `/blog/${p.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  })),
];

const lastmod = isoDate();
const body = urls
  .map(
    (u) =>
      `  <url>
    <loc>${SITE}${u.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(join(ROOT, "public/sitemap.xml"), xml, "utf8");
console.log(`sitemap: ${urls.length} URLs → public/sitemap.xml`);
