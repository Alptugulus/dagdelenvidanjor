import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Phone, PhoneCall, ShieldCheck, Clock, MapPin, CheckCircle2, Navigation, ChevronRight } from "lucide-react";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF, SITE_WHATSAPP_URL } from "../config/site";
import { trackConversion } from "../lib/trackConversion";
import { HERO_SLIDE_CONTENT } from "../data/heroSlideContent";
import { HERO_SLIDER_IMAGES } from "../data/heroSliderImages";
import { avrupaYakasiIlceleri, generateSlug } from "../data/locations";
import { WhatsAppIcon } from "../components/icons";
import { useSEO } from "../hooks/useSEO";
import { BrandTicker } from "../components/BrandTicker";
import { PictureImg } from "../components/PictureImg";
import { SERVICE_CARD_IMAGES } from "../data/serviceCardImages";

/** Ana sayfa “hizmet özeti” slaytı — listedeki maddelerle uyumlu, /hizmetlerimiz kartlarıyla aynı görseller */
const SERVICE_SHOWCASE_SLIDES = [
  {
    src: SERVICE_CARD_IMAGES.vidanjorHizmetleri,
    alt: "Vidanjör aracı ile atık su tahliyesi ve saha operasyonu",
  },
  {
    src: SERVICE_CARD_IMAGES.robotlaGiderAcma,
    alt: "Robotla gider ve kanal açma ekipmanı",
  },
  {
    src: SERVICE_CARD_IMAGES.logarYapmaBulma,
    alt: "Logar yapma, bulma ve rögar hizmetleri",
  },
  {
    src: SERVICE_CARD_IMAGES.foseptikCekimi,
    alt: "Foseptik çekimi ve tanker hizmeti",
  },
] as const;

export function Home() {
  const heroSlides = HERO_SLIDER_IMAGES;
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const heroCopy = HERO_SLIDE_CONTENT[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveServiceSlide((prev) => (prev + 1) % SERVICE_SHOWCASE_SLIDES.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  useSEO({
    title: "Avrupa Yakası 7/24 Vidanjör Hizmeti",
    description:
      "İstanbul Avrupa Yakası genelinde 7/24 acil vidanjör, kanal açma, logar temizliği ve su tahliye hizmeti sunuyoruz.",
    ogImage: "/hero/slide-1.webp",
    faq: [
      {
        question: "Vidanjör ekibi ne kadar sürede gelir?",
        answer: "Yoğunluğa bağlı olarak Avrupa Yakası içinde ortalama 30 dakika içinde ekibimizi konumunuza yönlendiriyoruz."
      },
      {
        question: "Gece de hizmet veriyor musunuz?",
        answer: "Evet. Vidanjor 7/24 hizmet verir; gece, hafta sonu ve resmi tatillerde acil müdahale sağlarız."
      }
    ]
  });

  return (
    <div className="flex flex-col">
      {/* Hero — arka planda yalnızca slayt görseli (marka görsellerin üzerinde); sola hafif okunurluk gradienti */}
      <div className="flex w-full justify-center pb-16 pt-3 sm:pt-4 md:pt-6 lg:pt-8">
        <section
          className="relative w-11/12 max-w-[1600px] overflow-hidden rounded-[2.5rem] bg-black shadow-2xl ring-1 ring-white/10 lg:w-5/6"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-black" aria-hidden />

          <div className="absolute inset-0" aria-hidden>
            <PictureImg
              src={heroSlides[activeSlide]}
              alt={heroCopy.imageAlt}
              width={1920}
              height={1080}
              sizes="(max-width: 1024px) 92vw, 83vw"
              className="h-full w-full object-cover opacity-100 transition-opacity duration-700"
              decoding="async"
              fetchPriority={activeSlide === 0 ? "high" : "low"}
            />
          </div>

          {/* Sadece sol şerit: karanlık görsellerde başlık/CTA okunaklı kalsın; sağ taraf görselde serbest */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent sm:from-black/75 sm:via-black/25"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25"
            aria-hidden
          />

          <a
            href={SITE_PHONE_TEL_HREF}
            onClick={(e) => trackConversion(e, "phone")}
            className="absolute bottom-[4.5rem] right-6 z-[2] hidden items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/90 px-4 py-2.5 text-sm font-semibold text-slate-200 shadow-lg backdrop-blur-sm transition-colors hover:border-red-500/50 hover:text-white sm:flex md:bottom-[5.25rem] md:right-10"
          >
            <Phone className="h-4 w-4 shrink-0 text-red-500" aria-hidden />
            <span className="tracking-wide">{SITE_PHONE_DISPLAY.replace(/^\+90\s*/, "0")}</span>
          </a>

          <div className="relative z-[2] flex min-h-[560px] w-full flex-col justify-center px-6 py-16 sm:px-12 lg:min-h-[680px] lg:px-16 lg:py-20">
            <div key={activeSlide} className="max-w-2xl text-left text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.75)]">
              <span className="mb-6 inline-block rounded-full bg-red-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-red-900/40">
                {heroCopy.badge}
              </span>
              <h1 id="hero-heading" className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {heroCopy.titleLine1} <br />
                <span className="text-red-500">{heroCopy.titleAccent}</span>
                {heroCopy.titleAfterAccent}
              </h1>
              <p className="mb-10 max-w-xl text-lg text-slate-300">{heroCopy.description}</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
                <a
                  href={SITE_PHONE_TEL_HREF}
                  onClick={(e) => trackConversion(e, "phone")}
                  className="flex items-center justify-center space-x-2 rounded-2xl border-t border-red-400/30 bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-red-500/40 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <PhoneCall className="h-5 w-5" aria-hidden />
                  <span>Hemen Ara</span>
                </a>
                <a
                  href={SITE_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => trackConversion(e, "whatsapp")}
                  className="flex items-center justify-center space-x-2 rounded-2xl border-t border-green-400/30 bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-500/30 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <WhatsAppIcon className="h-5 w-5" aria-hidden />
                  <span>WhatsApp&apos;tan Yaz</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-5 right-5 z-[3] flex gap-2 sm:bottom-6 sm:right-6 md:bottom-7 md:right-8"
            role="group"
            aria-label="Ana görsel slayt"
          >
            {heroSlides.map((image, index) => (
              <button
                key={`${image}-dot`}
                type="button"
                onClick={() => setActiveSlide(index)}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                aria-label={`Slayt ${index + 1} / ${heroSlides.length}`}
                aria-current={activeSlide === index ? "true" : undefined}
              >
                <span
                  className={`block h-2.5 w-9 rounded-full transition-all duration-300 ${
                    activeSlide === index ? "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.55)]" : "bg-white/35 hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Neden Bizi Seçmelisiniz?</h2>
            <p className="mt-4 text-lg text-slate-600">Müşteri memnuniyeti ve güvenliğiniz bizim için her şeyden önce gelir.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
                <Clock className="h-7 w-7 text-red-600" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">7/24 Kesintisiz Hizmet</h3>
              <p className="text-slate-600">Günün her saatinde acil vidanjör talepleriniz için hazır ekiplerle hizmet veriyoruz.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                <Navigation className="h-7 w-7 text-blue-600" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Konumunuza Hızlı Ulaşım</h3>
              <p className="text-slate-600">Mobil vidanjör araçlarımızla Avrupa Yakası'nın her noktasına hızlı şekilde ulaşıyoruz.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                <ShieldCheck className="h-7 w-7 text-green-600" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Profesyonel ve Güvenilir İşlem</h3>
              <p className="text-slate-600">Uzman ekibimiz modern ekipmanlarla altyapı sorunlarını güvenli ve kalıcı şekilde çözer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-2xl md:h-[500px] lg:w-1/2">
            <div className="absolute inset-0" aria-hidden>
              <PictureImg
                src={SERVICE_SHOWCASE_SLIDES[activeServiceSlide].src}
                alt={SERVICE_SHOWCASE_SLIDES[activeServiceSlide].alt}
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1" role="group" aria-label="Hizmet görselleri slayt">
              {SERVICE_SHOWCASE_SLIDES.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setActiveServiceSlide(index)}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                  aria-label={`Hizmet görseli ${index + 1} / ${SERVICE_SHOWCASE_SLIDES.length}`}
                  aria-current={activeServiceSlide === index ? "true" : undefined}
                >
                  <span
                    className={`block h-2.5 w-8 rounded-full transition-colors ${
                      activeServiceSlide === index ? "bg-red-500" : "bg-white/60"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl mb-6">Tüm Vidanjör İhtiyaçlarınıza Tek Çözüm</h2>
            <ul className="space-y-4 mb-8">
              {[
                "Kanal açma ve gider temizliği",
                "Vidanjör çekimi",
                "Logar ve rögar temizliği",
                "Fosseptik çekimi",
                "Su baskını tahliyesi"
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 shrink-0 text-red-500" aria-hidden />
                  <span className="text-lg text-slate-700">{service}</span>
                </li>
              ))}
            </ul>
            <Link to="/hizmetlerimiz" className="inline-flex items-center text-red-600 font-semibold hover:text-red-700">
              Tüm Hizmetleri İnceleyin
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Districts */}
      <section className="py-20 bg-slate-900 text-white">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-slate-800 rounded-full mb-4">
              <MapPin className="h-5 w-5 text-red-500 mr-2" />
              <span className="font-semibold text-slate-200 pr-2">Geniş Hizmet Ağı</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Avrupa Yakasında Her İlçedeyiz</h2>
            <p className="mt-4 text-lg text-slate-400">İstanbul Avrupa Yakası'nın tüm ilçelerine 7/24 vidanjör hizmeti veriyoruz.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {avrupaYakasiIlceleri.slice(0, 10).map((ilce) => (
               <Link 
                key={ilce}
                to={`/hizmet-bolgeleri/avrupa-yakasi/${generateSlug(ilce)}`}
                className="bg-slate-800 hover:bg-red-600 transition-colors rounded-lg p-4 text-center group"
              >
                <div className="font-medium text-slate-200 group-hover:text-white">{ilce} vidanjör hizmeti</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/hizmet-bolgeleri" className="inline-block border border-slate-600 hover:border-red-500 hover:bg-slate-800 text-white font-medium rounded-lg px-6 py-3 transition-colors">
              Tüm Hizmet Bölgelerini Gör
            </Link>
          </div>
         </div>
      </section>

      <BrandTicker />
    </div>
  );
}
