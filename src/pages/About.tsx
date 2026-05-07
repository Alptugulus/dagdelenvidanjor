import { useEffect, useState } from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { useSEO } from "../hooks/useSEO";

export function About() {
  const aboutImages = ["/about-1.png", "/about-2.png", "/about-3.png"];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((prev) => (prev + 1) % aboutImages.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [aboutImages.length]);

  useSEO({
    title: "Hakkımızda | Vidanjor 7/24 Hizmet",
    description: "İstanbul Avrupa Yakası'nda vidanjör, kanal açma ve altyapı temizlik hizmetlerinde uzman ekibimizi ve çalışma yaklaşımımızı tanıyın.",
    breadcrumbs: [
      { name: "Hakkımızda", url: "/hakkimizda" }
    ]
  });

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Hakkımızda", url: "/hakkimizda" }]} />
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl mb-6">Hakkımızda</h1>
          <p className="text-xl text-slate-600">
            Yılların verdiği tecrübeyle İstanbul Avrupa Yakası'nda vidanjör ve altyapı hizmetlerinde güvenilir çözüm ortağınızız.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-lg">
              <div className="absolute inset-0" aria-hidden>
                <img
                  src={aboutImages[activeImage]}
                  alt=""
                  width={900}
                  height={600}
                  className="h-full w-full object-cover"
                  loading={activeImage === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1" role="group" aria-label="Hakkımızda görselleri">
                {aboutImages.map((image, index) => (
                  <button
                    key={`${image}-about-dot`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                    aria-label={`Görsel ${index + 1} / ${aboutImages.length}`}
                    aria-current={activeImage === index ? "true" : undefined}
                  >
                    <span
                      className={`block h-2.5 w-8 rounded-full transition-colors ${
                        activeImage === index ? "bg-red-500" : "bg-white/60"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
             <h2 className="text-3xl font-semibold text-slate-900">Misyonumuz ve Vizyonumuz</h2>
             <p className="text-lg text-slate-600 leading-relaxed">
               Misyonumuz, kanal tıkanıklığı, logar taşması ve fosseptik dolumu gibi acil sorunlarda müşterilerimize en kısa sürede profesyonel müdahale sağlamaktır.
             </p>
             <p className="text-lg text-slate-600 leading-relaxed">
               Profesyonel ekibimiz ve tam donanımlı vidanjör araçlarımızla 7/24 hizmet veriyoruz. Hedefimiz, İstanbul Avrupa Yakası'nda vidanjör hizmeti denildiğinde akla gelen ilk marka olmaktır.
             </p>
             <div className="pt-4 border-t border-slate-200">
               <div className="grid grid-cols-2 gap-6">
                 <div>
                   <h4 className="text-4xl font-bold text-red-600 mb-2">15+</h4>
                   <p className="text-slate-600 font-medium">Yıllık Tecrübe</p>
                 </div>
                 <div>
                   <h4 className="text-4xl font-bold text-red-600 mb-2">10B+</h4>
                   <p className="text-slate-600 font-medium">Mutlu Müşteri</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
