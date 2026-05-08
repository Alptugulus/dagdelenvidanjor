import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PhoneCall, ShieldCheck, Clock, MapPin, CheckCircle2, Navigation, ChevronRight } from "lucide-react";
import { avrupaYakasiIlceleri, generateSlug } from "../data/locations";
import { WhatsAppIcon } from "../components/icons";
import { useSEO } from "../hooks/useSEO";
import { BrandTicker } from "../components/BrandTicker";
import { PictureImg } from "../components/PictureImg";

export function Home() {
  const sliderImages = ["/slider-1.png", "/slider-2.png", "/about-3.png"];
  const serviceSliderImages = ["/about-1.png", "/about-2.png", "/about-3.png"];
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [sliderImages.length]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveServiceSlide((prev) => (prev + 1) % serviceSliderImages.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [serviceSliderImages.length]);

  useSEO({
    title: "Avrupa Yakası 7/24 Vidanjör Hizmeti",
    description:
      "İstanbul Avrupa Yakası genelinde 7/24 acil vidanjör, kanal açma, logar temizliği ve su tahliye hizmeti sunuyoruz.",
    ogImage: "/slider-1.webp",
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
      {/* Hero Section */}
      <div className="w-full pt-8 pb-16 sm:pt-10 md:pt-14 lg:pt-16 flex justify-center">
        <section
          className="relative min-h-[560px] w-11/12 max-w-[1600px] overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl lg:min-h-[680px] lg:w-5/6"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0" aria-hidden>
            <PictureImg
              src={sliderImages[activeSlide]}
              alt=""
              width={1920}
              height={1080}
              sizes="(max-width: 1024px) 92vw, 83vw"
              className="h-full w-full object-cover opacity-40"
              decoding="async"
              fetchPriority={activeSlide === 0 ? "high" : "low"}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" aria-hidden />
          <div className="relative w-full px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
            <div className="max-w-2xl text-left text-white">
            <span className="mb-6 inline-block rounded-full border border-red-500/30 bg-red-600/20 px-3 py-1 text-sm font-semibold text-red-300">
              Avrupa Yakası 7/24 Hizmet
            </span>
            <h1 id="hero-heading" className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Tıkanıklık Mı Var? <br/>
              <span className="text-red-500">Vidanjor</span> Yanınızda!
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-xl">
              İstanbul Avrupa Yakası'nın tüm ilçelerine hızlı vidanjör, kanal açma, logar temizliği ve acil su tahliyesi hizmeti veriyoruz.
            </p>
            <div className="hidden sm:flex sm:flex-row gap-4 justify-start">
              <a href="tel:+905422105627" className="flex items-center justify-center space-x-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-red-500/40 border-t border-red-400/30">
                <PhoneCall className="h-5 w-5" aria-hidden />
                <span>Hemen Ara</span>
              </a>
              <a href="https://wa.me/905422105627" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-green-500/30 border-t border-green-400/30">
                <WhatsAppIcon className="h-5 w-5" aria-hidden />
                <span>WhatsApp'tan Yaz</span>
              </a>
            </div>
          </div>
        </div>
          <div className="absolute bottom-4 right-4 z-10 flex gap-1 sm:bottom-6 sm:right-6" role="group" aria-label="Ana görsel slayt">
            {sliderImages.map((image, index) => (
              <button
                key={`${image}-dot`}
                type="button"
                onClick={() => setActiveSlide(index)}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                aria-label={`Slayt ${index + 1} / ${sliderImages.length}`}
                aria-current={activeSlide === index ? "true" : undefined}
              >
                <span
                  className={`block h-2.5 w-8 rounded-full transition-colors ${
                    activeSlide === index ? "bg-red-500" : "bg-white/40"
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
                src={serviceSliderImages[activeServiceSlide]}
                alt=""
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1" role="group" aria-label="Hizmet görselleri slayt">
              {serviceSliderImages.map((image, index) => (
                <button
                  key={`${image}-service-dot`}
                  type="button"
                  onClick={() => setActiveServiceSlide(index)}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                  aria-label={`Hizmet görseli ${index + 1} / ${serviceSliderImages.length}`}
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
