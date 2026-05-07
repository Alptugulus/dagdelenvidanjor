import { PhoneCall } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export function CTASection({ title, description }: { title?: string; description?: string }) {
  return (
    <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center my-16 text-white shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592853624511-bba6d2bbbf29?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="h-16 w-16 bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-red-500/40">
          <PhoneCall className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title || "Acil Vidanjör Hizmeti Mi Lazım?"}</h2>
        <p className="text-lg text-slate-300 mb-10">{description || "İstanbul Avrupa Yakası genelinde kanal açma, vidanjör çekimi ve acil tahliye hizmetleri için hemen bize ulaşın."}</p>
        
        <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center">
          <a href="tel:+905422105627" className="flex items-center justify-center space-x-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-red-500/40 border-t border-red-400/30">
            <PhoneCall className="h-5 w-5" />
            <span>Hemen Ara</span>
          </a>
          <a href="https://wa.me/905422105627" target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-green-500/30 border-t border-green-400/30">
            <WhatsAppIcon className="h-5 w-5" />
            <span>WhatsApp'tan Yaz</span>
          </a>
        </div>
      </div>
    </section>
  );
}
