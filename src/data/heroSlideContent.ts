import { HERO_SLIDER_IMAGES } from "./heroSliderImages";

export type HeroSlideCopy = {
  badge: string;
  titleLine1: string;
  titleAccent: string;
  titleAfterAccent: string;
  description: string;
  imageAlt: string;
};

/** `HERO_SLIDER_IMAGES` ile aynı sırada olmalı */
export const HERO_SLIDE_CONTENT: HeroSlideCopy[] = [
  {
    badge: "Avrupa Yakası 7/24 Hizmet",
    titleLine1: "Tıkanıklık Mı Var?",
    titleAccent: "Vidanjör",
    titleAfterAccent: " Yanınızda!",
    description:
      "İstanbul Avrupa Yakası'nın tüm ilçelerine hızlı vidanjör, kanal açma, logar temizliği ve acil su tahliyesi hizmeti veriyoruz.",
    imageAlt: "Demir Vidanjör aracı, İstanbul boğazı ve gece şehir silüeti",
  },
  {
    badge: "Dar Alan Çözümü",
    titleLine1: "Sığmayan Yere",
    titleAccent: "Mini Vidanjör",
    titleAfterAccent: " — Güçlü Performans",
    description:
      "Site içi, dar sokak ve rampalarda büyük araç giremez; kompakt mini vidanjör filomuzla aynı emiş gücünü manevra riski olmadan sunuyoruz. Bahçe yollarından bodrum kotlarına kadar erişim.",
    imageAlt: "Demir Vidanjör mini vidanjör aracı, gece İstanbul arka planında",
  },
  {
    badge: "Tek Araçta Çift Güç",
    titleLine1: "Vakum ve Basınçlı Yıkama,",
    titleAccent: "Kombine Vidanjör",
    titleAfterAccent: " ile Bir Arada",
    description:
      "Zorlu ana hat ve logarlarda emiş ile yüksek basınçlı jeti aynı şaside taşıyan kombine araçlarımızla tıkanıklık açma ve hat temizliğini tek seferde yönetiyoruz. Avrupa Yakası'nda modern ekipman ve deneyimli saha ekibi.",
    imageAlt: "Demir Vidanjör kombine vidanjör aracı, Galata Kulesi ve Boğaz köprüsü gece manzarasında",
  },
  {
    badge: "Kırmadan Tespit",
    titleLine1: "Kameralı Görüntüleme +",
    titleAccent: "Robotla Tıkanıklık Açma",
    titleAfterAccent: "",
    description:
      "Hat içini yüksek çözünürlüklü kamera ile kayıt altına alıyor; tıkanıklığı noktasal gördükten sonra paletli robot sistemlerle kırmadan, doğru mesafeden müdahale ediyoruz. Tahmin yok, gereksiz kazı yok — Avrupa Yakası'nda ölçülebilir rapor ve güvenli saha.",
    imageAlt:
      "Demir Vidanjör teknisyeni robotlu hat inceleme ekipmanıyla logar başında, gece şehir ve vidanjör aracı arka planda",
  },
];

if (HERO_SLIDE_CONTENT.length !== HERO_SLIDER_IMAGES.length) {
  throw new Error("HERO_SLIDE_CONTENT ile HERO_SLIDER_IMAGES aynı uzunlukta olmalı");
}
