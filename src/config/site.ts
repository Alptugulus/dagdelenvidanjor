/** Canlı domain — OG, canonical, şema ve Site Haritası için */
export const SITE_ORIGIN = "https://www.demirvidanjor.com";

export const SITE_NAME = "Demir Vidanjör";

/**
 * Tek hat: `tel:` / WhatsApp — değişiklik için yalnızca burayı güncelleyin.
 * E.164: ülke kodu + hat (başında + yok); örn. 0542 210 56 27 → 905422105627
 */
export const SITE_PHONE_E164 = "905422105627";
export const SITE_PHONE_DISPLAY = "+90 542 210 56 27";
export const SITE_PHONE_TEL_HREF = `tel:+${SITE_PHONE_E164}`;
export const SITE_WHATSAPP_URL = `https://wa.me/${SITE_PHONE_E164}`;

/** Varsayılan paylaşım görseli (mutlak URL) */
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/hero/slide-1.webp`;

/** Google Haritalar — işletme / adres konumu */
export const SITE_GOOGLE_MAPS_URL = "https://maps.app.goo.gl/n5LLjFaAaxWEJQ2X9";

/**
 * Google Haritalar’da kayıtlı işletme adı (gömülü kart / sayfa başlığı ile uyumlu).
 * Haritada “yer bilgileri yüklenemedi” hatasını önlemek için embed URL’si bu kayda bağlı olmalı.
 */
export const SITE_GOOGLE_MAPS_LISTING_NAME =
  "Vidanjör Kuka Servisi | İstanbul Vidanjör Hizmetleri";

/**
 * Gömülü harita — koordinat yerine işletme kimliği + ad içeren `embed?pb=` adresi.
 * Sadece `q=lat,lng` kullanıldığında Google sık sık yer kartını yükleyemiyor.
 */
export const SITE_GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.05!2d28.7018782!3d41.0328391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa723a4f4d443%3A0x52fa7a411572954e!2sVidanj%C3%B6r%20Kuka%20Servisi%20%7C%20%C4%B0stanbul%20Vidanj%C3%B6r%20Hizmetleri!5e0!3m2!1str!2str!4v1!5m2!1str!2str";
