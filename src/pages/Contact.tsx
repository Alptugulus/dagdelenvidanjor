import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { WhatsAppIcon } from "../components/icons";
import { useSEO } from "../hooks/useSEO";
import {
  SITE_GOOGLE_MAPS_EMBED_URL,
  SITE_GOOGLE_MAPS_LISTING_NAME,
  SITE_GOOGLE_MAPS_URL,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL_HREF,
  SITE_WHATSAPP_URL,
} from "../config/site";

export function Contact() {
  useSEO({
    title: "İletişim — 7/24 Hat ve WhatsApp",
    description: `Avrupa Yakası vidanjör, kanal ve tahliye için 7/24 telefon (${SITE_PHONE_DISPLAY}) ve WhatsApp ile hemen iletişim.`,
    ogImage: "/logo-header.png",
    breadcrumbs: [{ name: "İletişim", url: "/iletisim" }],
  });

  return (
    <div className="py-20 min-h-[calc(100vh-80px)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl mb-6">İletişim</h1>
          <p className="text-xl text-slate-600">
            Avrupa Yakası'nın neresinde olursanız olun, acil vidanjör ihtiyaçlarınız için form beklemeden bize hemen ulaşın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
           <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-white">
             <h2 className="text-3xl font-semibold mb-8">Bize Ulaşın</h2>
             
             <div className="space-y-8">
               <div className="flex items-start">
                 <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                   <Phone className="h-6 w-6 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold mb-1">Acil Hizmet Hattı</h3>
                   <p className="text-slate-300 mb-2">7/24 kesintisiz hizmet için bizi hemen arayın.</p>
                   <a href={SITE_PHONE_TEL_HREF} className="text-2xl font-semibold text-red-400 hover:text-white transition-colors">
                     {SITE_PHONE_DISPLAY}
                   </a>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                   <WhatsAppIcon className="h-6 w-6 text-white" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold mb-1">WhatsApp İletişim</h3>
                   <p className="text-slate-300 mb-2">Konumunuzu atın, en yakın ekibimizi yönlendirelim.</p>
                   <a href={SITE_WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-xl font-semibold text-green-400 hover:text-white transition-colors">
                     WhatsApp'tan Yazın
                   </a>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="h-12 w-12 bg-slate-800 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                   <Clock className="h-6 w-6 text-blue-400" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold mb-1">Çalışma Saatleri</h3>
                   <p className="text-slate-300 text-lg font-medium">Haftanın 7 Günü, 24 Saat</p>
                 </div>
               </div>

               <div className="flex items-start">
                 <div className="h-12 w-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0 mr-4 ring-1 ring-red-500/30">
                   <MapPin className="h-6 w-6 text-red-400" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold mb-1">Adres</h3>
                   <p className="text-slate-300 mb-2">Avrupa Yakası, İstanbul</p>
                   <a
                     href={SITE_GOOGLE_MAPS_URL}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-lg font-semibold text-red-400 transition-colors hover:text-white"
                   >
                     Google Haritalar&apos;da aç
                     <ExternalLink className="h-5 w-5 shrink-0" aria-hidden />
                   </a>
                 </div>
               </div>
             </div>
           </div>

           {/* Generic Contact Form / Map replacement */}
           <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Adres &amp; harita</h3>
                <p className="text-slate-600 mb-6">
                  İstanbul Avrupa Yakası&apos;nın tüm ilçelerine vidanjör araçlarımızla hızlı şekilde ulaşmaktayız. Ofis
                  konumumuzu Google Haritalar üzerinden açabilirsiniz.
                </p>
              </div>
              <div className="border-y border-slate-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 rounded-lg bg-red-100 p-2">
                    <MapPin className="h-5 w-5 text-red-600" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-900">{SITE_GOOGLE_MAPS_LISTING_NAME}</div>
                    <p className="text-sm text-slate-500">Avrupa Yakası, İstanbul — Google Haritalar kaydı</p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[300px] w-full flex-1 bg-slate-200">
                <iframe
                  title={`${SITE_GOOGLE_MAPS_LISTING_NAME} — harita`}
                  src={SITE_GOOGLE_MAPS_EMBED_URL}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-center gap-2 border-t border-slate-200 bg-white px-4 py-3">
                <a
                  href={SITE_GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition-colors hover:text-red-700"
                >
                  Google Haritalar&apos;da tam ekran aç
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
