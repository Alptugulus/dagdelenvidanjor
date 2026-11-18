/**
 * Build-time SEO prerender (Puppeteer yok — Vercel’de çalışır).
 *
 * Vite SPA kabuğuna her rota için:
 * - title / meta description / canonical / OG
 * - #root içine H1, ana metin ve gerçek href’li iç bağlantılar
 *
 * JS açılınca React createRoot içeriği değiştirir; crawler JS’siz HTML’i görür.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, "..", "dist");
const SITE_ORIGIN = "https://www.demirvidanjor.com";
const SITE_NAME = "Demir Vidanjör";
const PHONE_DISPLAY = "+90 542 210 56 27";
const PHONE_HREF = "tel:+905422105627";
const WHATSAPP_HREF = "https://wa.me/905422105627";

const ILCELER = [
  ["arnavutkoy", "Arnavutköy"],
  ["avcilar", "Avcılar"],
  ["bagcilar", "Bağcılar"],
  ["bahcelievler", "Bahçelievler"],
  ["bakirkoy", "Bakırköy"],
  ["basaksehir", "Başakşehir"],
  ["bayrampasa", "Bayrampaşa"],
  ["besiktas", "Beşiktaş"],
  ["beylikduzu", "Beylikdüzü"],
  ["beyoglu", "Beyoğlu"],
  ["buyukcekmece", "Büyükçekmece"],
  ["catalca", "Çatalca"],
  ["esenler", "Esenler"],
  ["esenyurt", "Esenyurt"],
  ["eyupsultan", "Eyüpsultan"],
  ["fatih", "Fatih"],
  ["gaziosmanpasa", "Gaziosmanpaşa"],
  ["gungoren", "Güngören"],
  ["kagithane", "Kâğıthane"],
  ["kucukcekmece", "Küçükçekmece"],
  ["sariyer", "Sarıyer"],
  ["silivri", "Silivri"],
  ["sultangazi", "Sultangazi"],
  ["sisli", "Şişli"],
  ["zeytinburnu", "Zeytinburnu"],
];

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function navLinks() {
  return `
    <nav aria-label="Ana menü">
      <ul>
        <li><a href="/">Ana Sayfa</a></li>
        <li><a href="/hakkimizda">Hakkımızda</a></li>
        <li><a href="/hizmetlerimiz">Hizmetlerimiz</a></li>
        <li><a href="/hizmet-bolgeleri">Hizmet Bölgeleri</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/iletisim">İletişim</a></li>
      </ul>
    </nav>`;
}

function ctaLinks() {
  return `
    <p>
      <a href="${PHONE_HREF}">Hemen Ara: ${esc(PHONE_DISPLAY)}</a>
      ·
      <a href="${WHATSAPP_HREF}" rel="noopener noreferrer">WhatsApp’tan Yaz</a>
    </p>`;
}

function shell({ h1, lead, main, extra = "" }) {
  return `
    <header>
      <p><a href="/">${esc(SITE_NAME)}</a></p>
      ${navLinks()}
      ${ctaLinks()}
    </header>
    <main>
      <h1>${esc(h1)}</h1>
      <p>${lead}</p>
      ${main}
      ${extra}
    </main>
    <footer>
      <p>${esc(SITE_NAME)} — İstanbul Avrupa Yakası 7/24 vidanjör ve kanal hizmeti.</p>
      ${ctaLinks()}
      ${navLinks()}
    </footer>`;
}

function pageMeta(pathName, title, description) {
  const canonicalPath = pathName === "/" ? "/" : pathName.replace(/\/$/, "");
  const canonical = `${SITE_ORIGIN}${canonicalPath}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  return { fullTitle, description, canonical };
}

/** @type {Array<{ path: string, title: string, description: string, body: string }>} */
const PAGES = [
  {
    path: "/",
    title: "Avrupa Yakası 7/24 Vidanjör Hizmeti",
    description:
      "İstanbul Avrupa Yakası genelinde 7/24 acil vidanjör, kanal açma, logar temizliği ve su tahliye hizmeti sunuyoruz.",
    body: shell({
      h1: "Tıkanıklık Mı Var? Vidanjör Yanınızda!",
      lead: "İstanbul Avrupa Yakası'nın tüm ilçelerine hızlı vidanjör, kanal açma, logar temizliği ve acil su tahliyesi hizmeti veriyoruz.",
      main: `
        <section>
          <h2>Neden Bizi Seçmelisiniz?</h2>
          <p>7/24 kesintisiz hizmet, konumunuza hızlı ulaşım, profesyonel ve güvenilir işlem.</p>
        </section>
        <section>
          <h2>Tüm Vidanjör İhtiyaçlarınıza Tek Çözüm</h2>
          <ul>
            <li>Kanal açma ve gider temizliği</li>
            <li>Vidanjör çekimi</li>
            <li>Logar ve rögar temizliği</li>
            <li>Fosseptik çekimi</li>
            <li>Su baskını tahliyesi</li>
          </ul>
          <p><a href="/hizmetlerimiz">Tüm Hizmetleri İnceleyin</a></p>
        </section>
        <section>
          <h2>Müşterilerimiz Ne Diyor?</h2>
          <p>Google’da paylaşılan gerçek müşteri değerlendirmeleri.</p>
        </section>`,
      extra: `
        <section>
          <h2>Avrupa Yakasında Her İlçedeyiz</h2>
          <ul>
            ${ILCELER.slice(0, 10)
              .map(
                ([slug, name]) =>
                  `<li><a href="/hizmet-bolgeleri/avrupa-yakasi/${slug}">${esc(name)} vidanjör hizmeti</a></li>`
              )
              .join("")}
          </ul>
          <p><a href="/hizmet-bolgeleri">Tüm Hizmet Bölgelerini Gör</a></p>
        </section>`,
    }),
  },
  {
    path: "/hakkimizda",
    title: "Hakkımızda | Vidanjor 7/24 Hizmet",
    description:
      "İstanbul Avrupa Yakası'nda vidanjör, kanal açma ve altyapı temizlik hizmetlerinde uzman ekibimizi ve çalışma yaklaşımımızı tanıyın.",
    body: shell({
      h1: "Hakkımızda",
      lead: "İstanbul Avrupa Yakası’nda 7/24 vidanjör, kanal açma ve altyapı temizlik hizmetlerinde uzman ekibimizle yanınızdayız.",
      main: `
        <p>Demir Vidanjör olarak acil müdahale, kırmadan tespit ve 20 yıllık saha tecrübesiyle hizmet veriyoruz.</p>
        <p><a href="/hizmetlerimiz">Hizmetlerimizi inceleyin</a> · <a href="/iletisim">İletişime geçin</a></p>`,
    }),
  },
  {
    path: "/hizmetlerimiz",
    title: "Hizmetlerimiz - Teknolojik Altyapı & Vidanjör",
    description:
      "Kameralı görüntüleme, robotla gider açma, dedektörle tespit, mini ve kombine vidanjör, vidanjör ve foseptik çekimi, yağ tutucu ve tahliye hizmetleri. Kırmadan tespit ve 20 yıllık tecrübe.",
    body: shell({
      h1: "Hizmetlerimiz",
      lead: "20 Yıllık Tecrübe ile hem teknolojik altyapı çözümlerinde Kırmadan Tespit hem de vidanjör ve tahliye operasyonlarında uçtan uca hizmet sunuyoruz.",
      main: `
        <section>
          <h2>Vidanjör ve Tahliye Hizmetleri</h2>
          <p>Farklı kapasiteli araç filosu ve saha disiplini ile atık su, foseptik ve yağmur suyu hatlarında profesyonel tahliye ve temizlik.</p>
          <article>
            <h3>Vidanjör Hizmetleri</h3>
            <p>Orta ve büyük boy araçlarla her türlü atık su tahliyesi. Geniş filo ve 20 Yıllık Tecrübe ile sahada hızlı ve güvenli operasyon.</p>
            <p><a href="${WHATSAPP_HREF}?text=${encodeURIComponent('Merhaba, "Vidanjör Hizmetleri" hizmeti hakkında hemen bilgi almak istiyorum.')}">WhatsApp ile bilgi al</a></p>
          </article>
          <article>
            <h3>Mini Vidanjör</h3>
            <p>Dar sokak, site içi ve düşük tavanlı alanlarda manevra kabiliyeti yüksek kompakt araçlarla tahliye.</p>
          </article>
          <article>
            <h3>Kombine Vidanjör</h3>
            <p>Vakumlama ve yüksek basınçlı yıkama/jet kapasitesini tek araçta birleştiren çözüm.</p>
          </article>
          <article>
            <h3>Vidanjör Kuka</h3>
            <p>Yüksek basınçlı su jeti ile kanalizasyon hatlarını temizleme ve açma.</p>
          </article>
          <article>
            <h3>Foseptik Çekimi</h3>
            <p>Foseptik kuyularının boşaltılması, temizlenmesi ve hijyenik bakımı.</p>
          </article>
          <article>
            <h3>Yağ Tutucu Temizliği</h3>
            <p>Restoran ve sanayi tipi yağ ayırıcıların periyodik temizliği ve bakımı.</p>
          </article>
          <article>
            <h3>Atık Su &amp; Yağmur Suyu</h3>
            <p>Su baskınları sonrası hızlı tahliye ve yağmur suyu kanallarının temizliği.</p>
          </article>
        </section>
        <section>
          <h2>Teknolojik Altyapı Çözümleri</h2>
          <p>Görüntüleme, robot ve dedektör ile Kırmadan Tespit; planlı müdahale ve altyapı işlerinde 20 Yıllık Tecrübe ile güvenli sonuç.</p>
          <article>
            <h3>Kameralı Görüntüleme</h3>
            <p>Pimaş ve ana hat giderlerinin içini yüksek çözünürlüklü kameralar ile izleme ve raporlama. Kırmadan Tespit ile hat durumunu net şekilde görüntülüyoruz; 20 Yıllık Tecrübe ile saha yorumlaması sunuyoruz.</p>
            <p><a href="${WHATSAPP_HREF}?text=${encodeURIComponent('Merhaba, "Kameralı Görüntüleme" hizmeti hakkında hemen bilgi almak istiyorum.')}">WhatsApp ile bilgi al</a></p>
          </article>
          <article>
            <h3>Robotla Gider Açma</h3>
            <p>Gelişmiş robotik cihazlarla pimaş, mutfak ve lavabo tıkanıklıklarını kırmadan açma. Kırmadan Tespit yaklaşımıyla müdahale alanını doğru noktadan yönetiyoruz.</p>
            <p><a href="${WHATSAPP_HREF}?text=${encodeURIComponent('Merhaba, "Robotla Gider Açma" hizmeti hakkında hemen bilgi almak istiyorum.')}">WhatsApp ile bilgi al</a></p>
          </article>
          <article>
            <h3>Dedektörle Tespit</h3>
            <p>Kayıp logar kapaklarını ve hat üzerindeki çöküntüleri dedektör yardımıyla noktasal olarak bulma.</p>
          </article>
          <article>
            <h3>Altyapı Tesisat</h3>
            <p>Sıfırdan kanalizasyon döşeme, hat yenileme ve profesyonel altyapı onarım çalışmaları.</p>
          </article>
          <article>
            <h3>Logar Yapma &amp; Bulma</h3>
            <p>Yeni logar inşası ve yeri bilinmeyen körelmiş logarların profesyonel tespiti.</p>
          </article>
        </section>
        <p>
          Yoğun bölgeler:
          <a href="/hizmet-bolgeleri/avrupa-yakasi/esenyurt">Esenyurt</a>,
          <a href="/hizmet-bolgeleri/avrupa-yakasi/beylikduzu">Beylikdüzü</a>,
          <a href="/hizmet-bolgeleri/avrupa-yakasi/avcilar">Avcılar</a>.
        </p>`,
    }),
  },
  {
    path: "/hizmet-bolgeleri",
    title: "Hizmet Bölgelerimiz - İstanbul Avrupa Yakası Vidanjör",
    description:
      "İstanbul Avrupa Yakası'nda tüm ilçelere 7/24 vidanjör, kanal açma ve logar temizliği hizmeti veriyoruz.",
    body: shell({
      h1: "Hizmet Bölgelerimiz",
      lead: "İstanbul Avrupa Yakası'nda tüm ilçelere 7/24 vidanjör, kanal açma ve logar temizliği hizmeti veriyoruz.",
      main: `
        <ul>
          ${ILCELER.map(
            ([slug, name]) =>
              `<li><a href="/hizmet-bolgeleri/avrupa-yakasi/${slug}">${esc(name)} vidanjör hizmeti</a></li>`
          ).join("")}
        </ul>`,
    }),
  },
  {
    path: "/blog",
    title: "Blog & Faydalı Bilgiler - Vidanjör Hizmetleri",
    description:
      "Kanal tıkanıklığı, vidanjör kullanımı, altyapı bakımı ve işletmeler için periyodik temizlik konularında güncel içerikler.",
    body: shell({
      h1: "Blog & Faydalı Bilgiler",
      lead: "Kanal tıkanıklığı, vidanjör kullanımı, altyapı bakımı ve işletmeler için periyodik temizlik konularında güncel içerikler.",
      main: `
        <ul>
          <li><a href="/blog/kanal-tikanikligi-aninda-ne-yapilmali">Kanal Tıkanıklığı Anında Ne Yapılmalı?</a></li>
          <li><a href="/blog/fosseptik-cekimi-ne-zaman-gerekir">Fosseptik Çekimi Ne Zaman Gerekir?</a></li>
          <li><a href="/blog/isletmeler-icin-yag-tutucu-bakim-rehberi">İşletmeler İçin Yağ Tutucu Bakım Rehberi</a></li>
        </ul>`,
    }),
  },
  {
    path: "/iletisim",
    title: "İletişim — 7/24 Hat ve WhatsApp",
    description: `Avrupa Yakası vidanjör, kanal ve tahliye için 7/24 telefon (${PHONE_DISPLAY}) ve WhatsApp ile hemen iletişim.`,
    body: shell({
      h1: "İletişim",
      lead: `Avrupa Yakası vidanjör, kanal ve tahliye için 7/24 telefon (${esc(PHONE_DISPLAY)}) ve WhatsApp ile hemen iletişim.`,
      main: `
        <p><a href="${PHONE_HREF}">Telefon: ${esc(PHONE_DISPLAY)}</a></p>
        <p><a href="${WHATSAPP_HREF}" rel="noopener noreferrer">WhatsApp</a></p>
        <p><a href="/hizmetlerimiz">Hizmetlerimiz</a> · <a href="/hizmet-bolgeleri">Hizmet Bölgeleri</a></p>`,
    }),
  },
  {
    path: "/blog/kanal-tikanikligi-aninda-ne-yapilmali",
    title: "Kanal Tıkanıklığı Anında Ne Yapılmalı? Ev ve İş Yeri İçin Pratik Rehber",
    description:
      "Kanal tıkanıklığında yanlış müdahale hem maliyeti artırır hem de taşkına yol açabilir. Doğru adımlar ve profesyonel destek zamanı bu rehberde.",
    body: shell({
      h1: "Kanal Tıkanıklığı Anında Ne Yapılmalı? Ev ve İş Yeri İçin Pratik Rehber",
      lead: "Kanal tıkanıklığında yanlış müdahale hem maliyeti artırır hem de taşkına yol açabilir. Doğru adımlar ve profesyonel destek zamanı bu rehberde.",
      main: `
        <p>Kanal tıkanıklığı fark edildiğinde ilk kural panik yapmadan su kullanımını durdurmaktır.</p>
        <p><a href="/blog">Tüm blog yazıları</a> · <a href="/hizmetlerimiz">Hizmetlerimiz</a></p>`,
    }),
  },
  {
    path: "/blog/fosseptik-cekimi-ne-zaman-gerekir",
    title: "Fosseptik Çekimi Ne Zaman Gerekir? Taşma Yaşamadan Önlem Alın",
    description:
      "Fosseptik dolumunu son ana bırakmak koku, taşma ve çevresel risk oluşturur. Doğru periyot ve erken uyarı belirtilerini öğrenin.",
    body: shell({
      h1: "Fosseptik Çekimi Ne Zaman Gerekir? Taşma Yaşamadan Önlem Alın",
      lead: "Fosseptik dolumunu son ana bırakmak koku, taşma ve çevresel risk oluşturur. Doğru periyot ve erken uyarı belirtilerini öğrenin.",
      main: `
        <p>Fosseptik sistemlerinde geciken çekim, taşma ve kötü koku dışında altyapı hatlarında geri basınca neden olabilir.</p>
        <p><a href="/blog">Tüm blog yazıları</a> · <a href="/hizmetlerimiz">Hizmetlerimiz</a></p>`,
    }),
  },
  {
    path: "/blog/isletmeler-icin-yag-tutucu-bakim-rehberi",
    title: "Restoran ve Kafeler İçin Yağ Tutucu Bakım Rehberi",
    description:
      "Yağ tutucu temizliği geciktiğinde gider tıkanıklığı, kötü koku ve operasyon aksaması kaçınılmaz olur. İşletmeler için net bakım planı burada.",
    body: shell({
      h1: "Restoran ve Kafeler İçin Yağ Tutucu Bakım Rehberi",
      lead: "Yağ tutucu temizliği geciktiğinde gider tıkanıklığı, kötü koku ve operasyon aksaması kaçınılmaz olur. İşletmeler için net bakım planı burada.",
      main: `
        <p>Periyodik yağ tutucu temizliği işletme sürekliliği ve altyapı sağlığı için gereklidir.</p>
        <p><a href="/blog">Tüm blog yazıları</a> · <a href="/hizmetlerimiz">Hizmetlerimiz</a></p>`,
    }),
  },
];

for (const [slug, name] of ILCELER) {
  PAGES.push({
    path: `/hizmet-bolgeleri/avrupa-yakasi/${slug}`,
    title: `${name} Vidanjör Hizmeti - 7/24 Acil Müdahale`,
    description: `${name} ve çevresinde 7/24 acil vidanjör, kanal açma, logar temizliği ve tahliye hizmetleri için hızlı ekip yönlendiriyoruz.`,
    body: shell({
      h1: `${name} Vidanjör Hizmeti`,
      // LocationDetail.tsx hero metni ile hizalı
      lead: `${esc(name)} ve çevresinde kanal tıkanıklığı, fosseptik çekimi veya su tahliyesi için 7/24 hizmet veriyoruz.`,
      main: `
        <h2>${esc(name)} 7/24 Vidanjör Ekibi</h2>
        <p>İstanbul Avrupa Yakası'nın yoğun ilçelerinden biri olan <strong>${esc(name)}</strong> bölgesinde acil vidanjör ihtiyaçlarınızda hızlıca konumunuza ulaşıyor, altyapı problemlerini yerinde çözüyoruz.</p>
        <h3>${esc(name)} Acil Kanal Açma</h3>
        <ul>
          <li>Kanal açma</li>
          <li>Vidanjör çekimi</li>
          <li>Logar ve rögar temizliği</li>
          <li>Fosseptik çekimi</li>
          <li>Su baskını tahliyesi</li>
        </ul>
        <p>
          <a href="/hizmet-bolgeleri">Tüm hizmet bölgeleri</a> ·
          <a href="/hizmetlerimiz">Hizmetlerimiz</a> ·
          <a href="/iletisim">İletişim</a>
        </p>`,
    }),
  });
}

function upsertMeta(html, attr, key, content) {
  const re =
    attr === "property"
      ? new RegExp(`<meta\\s+property=["']${key}["'][^>]*>`, "i")
      : new RegExp(`<meta\\s+name=["']${key}["'][^>]*>`, "i");
  const tag = `<meta ${attr}="${key}" content="${esc(content)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
}

function upsertCanonical(html, href) {
  const re = /<link\s+rel=["']canonical["'][^>]*>/i;
  const tag = `<link rel="canonical" href="${esc(href)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
}

function applyPage(template, page) {
  const { fullTitle, description, canonical } = pageMeta(
    page.path,
    page.title,
    page.description
  );

  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(fullTitle)}</title>`);
  html = upsertMeta(html, "name", "description", description);
  html = upsertCanonical(html, canonical);
  html = upsertMeta(html, "property", "og:title", fullTitle);
  html = upsertMeta(html, "property", "og:description", description);
  html = upsertMeta(html, "property", "og:url", canonical);
  html = upsertMeta(html, "name", "twitter:title", fullTitle);
  html = upsertMeta(html, "name", "twitter:description", description);

  // #root içine SEO gövdesi — React mount olunca değiştirilir
  if (!/<div\s+id=["']root["'][^>]*>/i.test(html)) {
    throw new Error("dist/index.html içinde #root bulunamadı");
  }
  html = html.replace(
    /<div\s+id=["']root["'][^>]*>[\s\S]*?<\/div>/i,
    `<div id="root">${page.body}</div>`
  );

  return html;
}

function outPathsFor(routePath) {
  if (routePath === "/") return [path.join(DIST, "index.html")];
  const parts = routePath.split("/").filter(Boolean);
  const dirIndex = path.join(DIST, ...parts, "index.html");
  // cleanUrls / slash'sız istekler için düz .html (Vercel + vite preview)
  const flatHtml = path.join(DIST, ...parts.slice(0, -1), `${parts.at(-1)}.html`);
  return [dirIndex, flatHtml];
}

function main() {
  if (process.env.SKIP_PRERENDER === "1") {
    console.log("Prerender atlandı (SKIP_PRERENDER=1).");
    return;
  }

  const templatePath = path.join(DIST, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("dist/index.html bulunamadı — önce `vite build` çalıştırın.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf8");
  let ok = 0;

  for (const page of PAGES) {
    const html = applyPage(template, page);
    for (const out of outPathsFor(page.path)) {
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, html, "utf8");
    }
    ok++;
    console.log(`✓ ${page.path}`);
  }

  console.log(`\nSEO prerender tamamlandı: ${ok} sayfa (Puppeteer yok).`);
}

main();
