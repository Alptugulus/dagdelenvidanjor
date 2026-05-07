import { ShieldCheck } from "lucide-react";

const services = [
  "Kanal Açma",
  "Vidanjör Çekimi",
  "Logar Temizliği",
  "Rögar Açma",
  "Fosseptik Çekimi",
  "Yağ Tutucu Temizliği",
  "Su Baskını Tahliyesi",
  "Kokulu Gider Çözümü",
  "Periyodik Altyapı Bakımı",
  "Acil Müdahale",
];

export function BrandTicker() {
  // We duplicate the array to make the infinite scroll seamless
  const tickerItems = [...services, ...services];

  return (
    <section className="py-16 bg-slate-50 overflow-hidden border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-sm font-semibold tracking-widest text-slate-400 uppercase">Sunduğumuz Vidanjör Hizmetleri</h2>
      </div>
      <div className="relative flex w-full items-center">
        {/* Left gradient fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-fit animate-marquee pause-on-hover">
          {tickerItems.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-12 px-6 whitespace-nowrap"
            >
               <span className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-300 uppercase transition-colors duration-300 hover:text-red-600 cursor-default">{brand}</span>
               <div className="w-2 h-2 rounded-full bg-slate-200"></div>
            </div>
          ))}
        </div>

        {/* Right gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
