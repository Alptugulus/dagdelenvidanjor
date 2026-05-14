import { PhoneCall } from "lucide-react";
import { SITE_PHONE_TEL_HREF, SITE_WHATSAPP_URL } from "../config/site";
import { trackConversion } from "../lib/trackConversion";
import { WhatsAppIcon } from "./icons";

export function CTASection({ title, description }: { title?: string; description?: string }) {
  return (
    <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center my-16 text-white shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-slate-900/80 to-slate-900" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(220, 38, 38, 0.45), transparent 55%)",
        }}
        aria-hidden
      />
      
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="h-16 w-16 bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-red-500/40" aria-hidden>
          <PhoneCall className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title || "Acil Vidanjör Hizmeti Mi Lazım?"}</h2>
        <p className="text-lg text-slate-300 mb-10">{description || "İstanbul Avrupa Yakası genelinde kanal açma, vidanjör çekimi ve acil tahliye hizmetleri için hemen bize ulaşın."}</p>
        
        <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center">
          <a href={SITE_PHONE_TEL_HREF} onClick={(e) => trackConversion(e, "phone")} className="flex items-center justify-center space-x-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-red-500/40 border-t border-red-400/30">
            <PhoneCall className="h-5 w-5" aria-hidden />
            <span>Hemen Ara</span>
          </a>
          <a href={SITE_WHATSAPP_URL} onClick={(e) => trackConversion(e, "whatsapp")} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-green-500/30 border-t border-green-400/30">
            <WhatsAppIcon className="h-5 w-5" aria-hidden />
            <span>WhatsApp'tan Yaz</span>
          </a>
        </div>
      </div>
    </section>
  );
}
