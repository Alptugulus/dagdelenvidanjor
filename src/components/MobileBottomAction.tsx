import { PhoneCall } from "lucide-react";
import { WhatsAppIcon } from "./icons";

export function MobileBottomAction() {
  const phoneNumber = "+905422105627";
  const whatsappNumber = "905422105627";

  return (
    <div 
      className="md:hidden fixed bottom-6 left-4 right-4 z-50 flex gap-3 pb-safe"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Hemen ara: +90 542 210 56 27"
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-red-400/30 bg-gradient-to-r from-red-600 to-red-500 py-4 text-white shadow-lg shadow-red-500/40 transition-transform active:scale-95"
      >
        <PhoneCall className="h-5 w-5" aria-hidden />
        <span className="font-semibold text-sm tracking-wide">HEMEN ARA</span>
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}?text=Merhaba,%20acil%20vidanjör%20hizmetine%20ihtiyacım%20var.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile acil vidanjör iletişimi"
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-green-400/30 bg-gradient-to-r from-emerald-500 to-green-500 py-4 text-white shadow-lg shadow-green-500/40 transition-transform active:scale-95"
      >
        <WhatsAppIcon className="h-5 w-5" aria-hidden />
        <span className="font-semibold text-sm tracking-wide">WHATSAPP</span>
      </a>
    </div>
  );
}
