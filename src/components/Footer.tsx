import { Link } from "react-router-dom";
import { Phone, ChevronRight, MapPin } from "lucide-react";
import { avrupaYakasiIlceleri, generateSlug } from "../data/locations";
import { PictureImg } from "./PictureImg";

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pb-20 md:pb-0 border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] left-1/2 w-[800px] h-[800px] -translate-x-1/2 rounded-full bg-red-600/5 blur-[120px]"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-4 pb-0 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="md:col-span-4 lg:col-span-3">
            <Link to="/" className="mb-6 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-md">
              <div className="relative aspect-[1024/682] w-full max-w-[460px] sm:max-w-[560px]">
                <PictureImg
                  src="/logo-footer.png"
                  alt="Demir Vidanjör Logo"
                  pictureClassName="absolute inset-0 block h-full w-full"
                  width={1024}
                  height={682}
                  decoding="async"
                  loading="lazy"
                  className="h-full w-full object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-8 border-l-2 border-red-500 pl-4 py-1">
              Avrupa Yakası'nda 7/24 hızlı, güvenilir ve profesyonel vidanjör hizmeti. Tıkanıklık ve tahliye ihtiyaçlarınızda bize ulaşın.
            </p>
            <div className="flex flex-col space-y-4">
              <a href="tel:+905422105627" className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors group p-3 bg-slate-900 rounded-xl border border-slate-800 hover:border-red-500/30">
                <div className="bg-red-600/10 p-2 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-red-500 group-hover:text-white" />
                </div>
                <span className="font-semibold tracking-wide">+90 542 210 56 27</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-400 p-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Avrupa Yakası, İstanbul</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2 lg:ml-8">
            <h3 className="text-white font-medium mb-6 text-lg tracking-wide">Hızlı Menü</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="group flex items-center text-slate-400 hover:text-white transition-colors"><ChevronRight className="h-3 w-3 mr-2 text-slate-600 group-hover:text-red-500 transition-colors" />Anasayfa</Link></li>
              <li><Link to="/hakkimizda" className="group flex items-center text-slate-400 hover:text-white transition-colors"><ChevronRight className="h-3 w-3 mr-2 text-slate-600 group-hover:text-red-500 transition-colors" />Hakkımızda</Link></li>
              <li><Link to="/hizmetlerimiz" className="group flex items-center text-slate-400 hover:text-white transition-colors"><ChevronRight className="h-3 w-3 mr-2 text-slate-600 group-hover:text-red-500 transition-colors" />Hizmetlerimiz</Link></li>
              <li><Link to="/blog" className="group flex items-center text-slate-400 hover:text-white transition-colors"><ChevronRight className="h-3 w-3 mr-2 text-slate-600 group-hover:text-red-500 transition-colors" />Blog</Link></li>
              <li><Link to="/iletisim" className="group flex items-center text-slate-400 hover:text-white transition-colors"><ChevronRight className="h-3 w-3 mr-2 text-slate-600 group-hover:text-red-500 transition-colors" />İletişim</Link></li>
            </ul>
          </div>

          <div className="md:col-span-5 lg:col-span-7">
            <h3 className="text-white font-medium mb-6 text-lg tracking-wide">Hizmet Bölgeleri <span className="text-slate-500 text-sm font-normal ml-2">(Avrupa Yakası)</span></h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
              {avrupaYakasiIlceleri.map((ilce) => (
                <Link 
                  key={ilce} 
                  to={`/hizmet-bolgeleri/avrupa-yakasi/${generateSlug(ilce)}`}
                  className="flex items-center text-slate-400 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-lg transition-all border border-transparent hover:border-slate-800"
                >
                  <ChevronRight className="h-3 w-3 text-red-500/70 mr-1.5" />
                  {ilce}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Credits & Copyright Area */}
        <div className="border-t border-slate-800/60 mt-8 pt-4 pb-2 flex flex-col items-center justify-between gap-2 text-sm md:flex-row md:gap-4 relative z-10">
          <p className="text-slate-400/80 text-center md:text-left">
            &copy; 2026 <span className="text-white/80">Demir Vidanjör</span>. Tüm Hakları Saklıdır.
          </p>
          
          <p className="text-slate-400/80 text-center md:text-right">
            Web Tasarım | Reklam:{" "}
            <span className="font-semibold text-slate-300">Ulus Medya</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
