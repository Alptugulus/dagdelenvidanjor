import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Camera,
  CarFront,
  CloudRain,
  Container,
  Drill,
  Droplets,
  Layers,
  LocateFixed,
  MapPinned,
  Pipette,
  Truck,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { WhatsAppIcon } from "../components/icons";
import { PictureImg } from "../components/PictureImg";
import { SERVICE_CARD_IMAGES } from "../data/serviceCardImages";
import { SITE_PHONE_E164 } from "../config/site";
import { useSEO } from "../hooks/useSEO";

function waHref(serviceTitle: string) {
  const text = `Merhaba, "${serviceTitle}" hizmeti hakkında hemen bilgi almak istiyorum.`;
  return `https://wa.me/${SITE_PHONE_E164}?text=${encodeURIComponent(text)}`;
}

type ServiceCard = {
  title: string;
  Icon: LucideIcon;
  /** `public/services/` — bkz. `src/data/serviceCardImages.ts` */
  image: string;
  description: ReactNode;
};

function ServiceCardBlock({ item }: { item: ServiceCard }) {
  const Icon = item.Icon;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] w-full shrink-0 bg-slate-200">
        <PictureImg
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          pictureClassName="block h-full w-full"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-slate-50 ring-1 ring-red-100 md:h-14 md:w-14">
            <Icon className="h-6 w-6 text-red-600 md:h-7 md:w-7" aria-hidden />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 md:text-xl">{item.title}</h3>
        </div>
        <div className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 md:text-[15px]">
          {item.description}
        </div>
        <a
          href={waHref(item.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-100"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Hemen Bilgi Al
        </a>
      </div>
    </article>
  );
}

const category1Services: ServiceCard[] = [
  {
    title: "Kameralı Görüntüleme",
    Icon: Camera,
    image: SERVICE_CARD_IMAGES.kameraliGoruntuleme,
    description: (
      <>
        Pimaş ve ana hat giderlerinin içini yüksek çözünürlüklü kameralar ile izleme ve raporlama.{" "}
        <span className="font-semibold text-red-600">Kırmadan Tespit</span> ile hat durumunu net
        şekilde görüntülüyoruz; <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span>{" "}
        ile saha yorumlaması sunuyoruz.
      </>
    ),
  },
  {
    title: "Robotla Gider Açma",
    Icon: Drill,
    image: SERVICE_CARD_IMAGES.robotlaGiderAcma,
    description: (
      <>
        Gelişmiş robotik cihazlarla pimaş, mutfak ve lavabo tıkanıklıklarını kırmadan açma.
        <span className="font-semibold text-red-600"> Kırmadan Tespit</span> yaklaşımıyla müdahale
        alanını doğru noktadan yönetiyoruz.
      </>
    ),
  },
  {
    title: "Dedektörle Tespit",
    Icon: LocateFixed,
    image: SERVICE_CARD_IMAGES.dedektorleTespit,
    description: (
      <>
        Kayıp logar kapaklarını ve hat üzerindeki çöküntüleri dedektör yardımıyla noktasal olarak
        bulma. <span className="font-semibold text-red-600">Kırmadan Tespit</span> önceliğiyle
        gereksiz kazı ve maliyeti azaltıyoruz.
      </>
    ),
  },
  {
    title: "Altyapı Tesisat",
    Icon: Pipette,
    image: SERVICE_CARD_IMAGES.altyapiTesisat,
    description: (
      <>
        Sıfırdan kanalizasyon döşeme, hat yenileme ve profesyonel altyapı onarım çalışmaları.{" "}
        <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span> ile güvenli ve
        standartlara uygun uygulama sunuyoruz.
      </>
    ),
  },
  {
    title: "Logar Yapma & Bulma",
    Icon: MapPinned,
    image: SERVICE_CARD_IMAGES.logarYapmaBulma,
    description: (
      <>
        Yeni logar inşası ve yeri bilinmeyen körelmiş logarların profesyonel tespiti.{" "}
        <span className="font-semibold text-red-600">Kırmadan Tespit</span> yöntemleriyle konum
        netleştirilir, <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span> ile
        uygulama planlanır.
      </>
    ),
  },
];

const category2Services: ServiceCard[] = [
  {
    title: "Vidanjör Hizmetleri",
    Icon: Truck,
    image: SERVICE_CARD_IMAGES.vidanjorHizmetleri,
    description: (
      <>
        Orta ve büyük boy araçlarla her türlü atık su tahliyesi. Geniş filo ve{" "}
        <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span> ile sahada hızlı ve
        güvenli operasyon.
      </>
    ),
  },
  {
    title: "Mini Vidanjör",
    Icon: CarFront,
    image: SERVICE_CARD_IMAGES.miniVidanjor,
    description: (
      <>
        Dar sokak, site içi ve düşük tavanlı alanlarda manevra kabiliyeti yüksek kompakt araçlarla
        tahliye. Yoğun yerleşimde hızlı erişim;{" "}
        <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span> ile güvenli saha
        yönetimi.
      </>
    ),
  },
  {
    title: "Kombine Vidanjör",
    Icon: Layers,
    image: SERVICE_CARD_IMAGES.kombineVidanjor,
    description: (
      <>
        Vakumlama ve yüksek basınçlı yıkama/jet kapasitesini tek araçta birleştiren çözüm. Zorlu
        hatlarda etkili müdahale;{" "}
        <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span> ile doğru ekipman
        seçimi.
      </>
    ),
  },
  {
    title: "Vidanjör Kuka",
    Icon: Droplets,
    image: SERVICE_CARD_IMAGES.vidanjorKuka,
    description: (
      <>
        Yüksek basınçlı su jeti ile kanalizasyon hatlarını temizleme ve açma. Yoğun kir ve
        tortularda etkili müdahale; <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span>{" "}
        ile doğru basınç ve güvenli uygulama.
      </>
    ),
  },
  {
    title: "Foseptik Çekimi",
    Icon: Container,
    image: SERVICE_CARD_IMAGES.foseptikCekimi,
    description: (
      <>
        Foseptik kuyularının boşaltılması, temizlenmesi ve hijyenik bakımı. Periyodik planlama ve
        raporlama ile <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span>{" "}
        garantisi.
      </>
    ),
  },
  {
    title: "Yağ Tutucu Temizliği",
    Icon: Waves,
    image: SERVICE_CARD_IMAGES.yagTutucuTemizligi,
    description: (
      <>
        Restoran ve sanayi tipi yağ ayırıcıların periyodik temizliği ve bakımı. Yasal uyum ve
        operasyon sürekliliği için <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span>{" "}
        ile düzenli bakım planı.
      </>
    ),
  },
  {
    title: "Atık Su & Yağmur Suyu",
    Icon: CloudRain,
    image: SERVICE_CARD_IMAGES.atiksuYagmursuyu,
    description: (
      <>
        Su baskınları sonrası hızlı tahliye ve yağmur suyu kanallarının temizliği. Acil müdahale ve
        altyapı yoğun bölgelerde <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span>{" "}
        ile koordineli çözüm.
      </>
    ),
  },
];

export function Services() {
  useSEO({
    title: "Hizmetlerimiz - Teknolojik Altyapı & Vidanjör",
    description:
      "Kameralı görüntüleme, robotla gider açma, dedektörle tespit, mini ve kombine vidanjör, vidanjör ve foseptik çekimi, yağ tutucu ve tahliye hizmetleri. Kırmadan tespit ve 20 yıllık tecrübe.",
    breadcrumbs: [{ name: "Hizmetlerimiz", url: "/hizmetlerimiz" }],
  });

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Hizmetlerimiz", url: "/hizmetlerimiz" }]} />

        <div className="mb-14 max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Hizmetlerimiz
          </h1>
          <p className="text-lg text-slate-600 sm:text-xl">
            <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span> ile hem teknolojik
            altyapı çözümlerinde <span className="font-semibold text-red-600">Kırmadan Tespit</span>{" "}
            hem de vidanjör ve tahliye operasyonlarında uçtan uca hizmet sunuyoruz.
          </p>
        </div>

        {/* Vidanjör ve Tahliye Hizmetleri */}
        <section className="mb-20">
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Vidanjör ve Tahliye Hizmetleri
            </h2>
            <p className="mt-4 max-w-4xl text-slate-600">
              Farklı kapasiteli araç filosu ve saha disiplini ile atık su, foseptik ve yağmur suyu
              hatlarında profesyonel tahliye ve temizlik.{" "}
              <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span> ile tek noktadan
              çözüm.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {category2Services.map((item) => (
              <ServiceCardBlock key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* Teknolojik Altyapı Çözümleri */}
        <section className="mb-16">
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Teknolojik Altyapı Çözümleri
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-red-600">
              Kırmadan Dökmeden
            </p>
            <p className="mt-4 max-w-4xl text-slate-600">
              Görüntüleme, robot ve dedektör ile <span className="font-semibold text-red-600">Kırmadan Tespit</span>; planlı
              müdahale ve altyapı işlerinde ise <span className="font-semibold text-red-600">20 Yıllık Tecrübe</span> ile güvenli
              sonuç.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {category1Services.map((item) => (
              <ServiceCardBlock key={item.title} item={item} />
            ))}
          </div>
        </section>

        <div className="mb-16 rounded-3xl bg-slate-900 p-8 text-center text-white md:p-10">
          <h2 className="text-2xl font-semibold mb-3">Her Zaman Size Yakınız</h2>
          <p className="mx-auto max-w-3xl text-slate-300">
            Avrupa Yakası genelinde hızlı yönlendirme. Özellikle{" "}
            <Link
              to="/hizmet-bolgeleri/avrupa-yakasi/esenyurt"
              className="text-red-400 underline decoration-red-400/30 underline-offset-4 hover:text-red-300"
            >
              Esenyurt
            </Link>
            ,{" "}
            <Link
              to="/hizmet-bolgeleri/avrupa-yakasi/beylikduzu"
              className="text-red-400 underline decoration-red-400/30 underline-offset-4 hover:text-red-300"
            >
              Beylikdüzü
            </Link>{" "}
            ve{" "}
            <Link
              to="/hizmet-bolgeleri/avrupa-yakasi/avcilar"
              className="text-red-400 underline decoration-red-400/30 underline-offset-4 hover:text-red-300"
            >
              Avcılar
            </Link>{" "}
            bölgelerinde yoğun talep yönetimi.
          </p>
        </div>

        <CTASection title="Vidanjör Hizmetine mi İhtiyacınız Var?" />
      </div>
    </div>
  );
}
