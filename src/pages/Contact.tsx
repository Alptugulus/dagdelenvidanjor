import { Phone, MapPin, Clock } from "lucide-react";
import { WhatsAppIcon } from "../components/icons";
import { useSEO } from "../hooks/useSEO";

export function Contact() {
  useSEO({
    title: "İletişim — 7/24 Hat ve WhatsApp",
    description:
      "Avrupa Yakası vidanjör, kanal ve tahliye için 7/24 telefon (+90 542 210 56 27) ve WhatsApp ile hemen iletişim.",
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
                   <a href="tel:+905422105627" className="text-2xl font-semibold text-red-400 hover:text-white transition-colors">
                     +90 542 210 56 27
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
                   <a href="https://wa.me/905422105627" target="_blank" rel="noreferrer" className="text-xl font-semibold text-green-400 hover:text-white transition-colors">
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
             </div>
           </div>

           {/* Generic Contact Form / Map replacement */}
           <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Hizmet Bölgemiz</h3>
                <p className="text-slate-600 mb-6">İstanbul Avrupa Yakası'nın tüm ilçelerine vidanjör araçlarımızla hızlı şekilde ulaşmaktayız.</p>
              </div>
              <div className="relative min-h-[300px] flex-1 overflow-hidden bg-slate-200">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-slate-400 via-slate-600 to-slate-800"
                  aria-hidden
                />
                 <div className="absolute inset-0 flex items-center justify-center bg-slate-900/35">
                    <div className="bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <MapPin className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Merkez Noktamız</div>
                        <div className="text-sm text-slate-500">Avrupa Yakası, İstanbul</div>
                      </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
