/**
 * Hizmet kartı görselleri: `public/services/` altına aynı ada sahip PNG koyun,
 * ardından `npm run images` ile WebP üretin. Dosyayı güncellediğinizde kart otomatik yenilenir.
 */
export const SERVICE_CARD_IMAGES = {
  kameraliGoruntuleme: "/services/kamerali-goruntuleme.png",
  robotlaGiderAcma: "/services/robotla-gider-acma.png",
  dedektorleTespit: "/services/dedektorle-tespit.png",
  altyapiTesisat: "/services/altyapi-tesisat.png",
  logarYapmaBulma: "/services/logar-yapma-bulma.png",
  vidanjorHizmetleri: "/services/vidanjor-hizmetleri.png",
  miniVidanjor: "/services/mini-vidanjor.png",
  kombineVidanjor: "/services/kombine-vidanjor.png",
  vidanjorKuka: "/services/vidanjor-kuka.png",
  foseptikCekimi: "/services/foseptik-cekimi.png",
  yagTutucuTemizligi: "/services/yag-tutucu-temizligi.png",
  atiksuYagmursuyu: "/services/atiksu-yagmursuyu.png",
} as const;
