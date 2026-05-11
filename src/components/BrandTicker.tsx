const services = [
  "Kanal Açma",
  "Vidanjör Çekimi",
  "Mini Vidanjör",
  "Kombine Vidanjör",
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
  const tickerItems = [...services, ...services];

  return (
    <section className="overflow-hidden border-t border-slate-200/50 bg-slate-50 py-16">
      <div className="mx-auto mb-12 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-600">
          Sunduğumuz Vidanjör Hizmetleri
        </h2>
      </div>
      <div className="relative flex w-full items-center">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent sm:w-32" aria-hidden />
        <div className="pause-on-hover flex w-fit animate-marquee">
          {tickerItems.map((brand, index) => (
            <div key={index} className="flex items-center whitespace-nowrap px-6">
              <span className="cursor-default text-2xl font-semibold uppercase tracking-tighter text-slate-600 transition-colors duration-300 hover:text-red-600 md:text-4xl">
                {brand}
              </span>
              <div className="mx-12 h-2 w-2 shrink-0 rounded-full bg-slate-300" aria-hidden />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent sm:w-32" aria-hidden />
      </div>
    </section>
  );
}
