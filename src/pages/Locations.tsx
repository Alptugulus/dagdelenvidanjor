import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { avrupaYakasiIlceleri, generateSlug } from "../data/locations";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { useSEO } from "../hooks/useSEO";

export function Locations() {
  useSEO({
    title: "Hizmet Bölgelerimiz - İstanbul Avrupa Yakası Vidanjör",
    description: "İstanbul Avrupa Yakası'nda tüm ilçelere 7/24 vidanjör, kanal açma ve logar temizliği hizmeti veriyoruz.",
    breadcrumbs: [
      { name: "Hizmet Bölgeleri", url: "/hizmet-bolgeleri" }
    ]
  });

  return (
    <div className="py-20 min-h-[calc(100vh-80px)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Hizmet Bölgeleri", url: "/hizmet-bolgeleri" }]} />
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl mb-6">Hizmet Bölgelerimiz</h1>
          <p className="text-xl text-slate-600">
            İstanbul Avrupa Yakası'nın tüm ilçelerine haftanın 7 günü 24 saat kesintisiz vidanjör hizmeti sunuyoruz.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12">
          <div className="flex items-center mb-6 border-b border-slate-200 pb-4">
             <MapPin className="h-8 w-8 text-red-600 mr-3" />
             <h2 className="text-2xl font-semibold text-slate-900">Avrupa Yakası İlçeleri</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {avrupaYakasiIlceleri.map((ilce) => (
              <Link
                key={ilce}
                to={`/hizmet-bolgeleri/avrupa-yakasi/${generateSlug(ilce)}`}
                className="flex items-center p-3 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md hover:border-red-400 hover:text-red-700 transition-all font-medium text-slate-700"
              >
                {ilce}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
