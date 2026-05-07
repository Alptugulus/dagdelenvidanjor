import { useParams, Navigate, Link } from "react-router-dom";
import { PhoneCall, MapPin, SearchCheck } from "lucide-react";
import { avrupaYakasiIlceleri, generateSlug } from "../data/locations";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { useSEO } from "../hooks/useSEO";
import { FAQSection } from "../components/FAQSection";
import { CTASection } from "../components/CTASection";

export function LocationDetail() {
  const { ilceSlug } = useParams<{ ilceSlug: string }>();

  const matchedIlce = avrupaYakasiIlceleri.find((ilce) => generateSlug(ilce) === ilceSlug);

  if (!matchedIlce) {
    return <Navigate to="/hizmet-bolgeleri" replace />;
  }

  useSEO({
    title: `${matchedIlce} Vidanjör Hizmeti - 7/24 Acil Müdahale`,
    description: `${matchedIlce} ve çevresinde 7/24 acil vidanjör, kanal açma, logar temizliği ve tahliye hizmetleri için hızlı ekip yönlendiriyoruz.`,
    breadcrumbs: [
      { name: "Hizmet Bölgeleri", url: "/hizmet-bolgeleri" },
      { name: matchedIlce, url: `/hizmet-bolgeleri/avrupa-yakasi/${ilceSlug}` }
    ],
    faq: [
      {
        question: `${matchedIlce} bölgesinde gece hizmet veriyor musunuz?`,
        answer: `Evet, ${matchedIlce} ve çevresindeki mahallelere 7 gün 24 saat acil vidanjör hizmeti veriyoruz.`
      },
      {
        question: `Ekibiniz ${matchedIlce} bölgesine ne kadar sürede ulaşır?`,
        answer: `Trafik ve yoğunluğa bağlı olarak ortalama 15-30 dakika arasında konumunuza ulaşıyoruz.`
      },
      {
        question: `Hangi hizmetleri sunuyorsunuz?`,
        answer: `Kanal açma, vidanjör çekimi, logar-rögar temizliği, fosseptik çekimi ve su baskını tahliyesi gibi kapsamlı hizmetler sunuyoruz.`
      }
    ]
  });

  return (
    <div className="flex flex-col">
       <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <Breadcrumbs items={[
             { name: "Hizmet Bölgeleri", url: "/hizmet-bolgeleri" },
             { name: matchedIlce, url: `/hizmet-bolgeleri/avrupa-yakasi/${ilceSlug}` }
           ]} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-8">
           <MapPin className="h-12 w-12 text-red-500 mx-auto mb-6" />
           <h1 className="text-4xl md:text-5xl font-bold mb-6">
             {matchedIlce} Vidanjör Hizmeti
           </h1>
           <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
             {matchedIlce} ve çevresinde kanal tıkanıklığı, fosseptik çekimi veya su tahliyesi için 7/24 hizmet veriyoruz.
           </p>
           <a 
              href="tel:+905422105627" 
              className="inline-flex items-center justify-center space-x-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-red-500/40 border-t border-red-400/30"
            >
              <PhoneCall className="h-6 w-6" />
              <span>Hemen Ara</span>
            </a>
        </div>
       </section>

       <section className="py-20 bg-slate-50">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">{matchedIlce} 7/24 Vidanjör Ekibi</h2>
              <p className="text-lg text-slate-600">
                İstanbul Avrupa Yakası'nın yoğun ilçelerinden biri olan <strong>{matchedIlce}</strong> bölgesinde acil vidanjör ihtiyaçlarınızda hızlıca konumunuza ulaşıyor, altyapı problemlerini yerinde çözüyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <SearchCheck className="h-10 w-10 text-red-600 mb-6" />
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{matchedIlce} Acil Kanal Açma</h3>
                <p className="text-slate-600">Ev, iş yeri ve bina giderlerindeki tıkanıklıklara profesyonel ekipmanlarla hızlı müdahale ediyoruz.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                 <SearchCheck className="h-10 w-10 text-red-600 mb-6" />
                 <h3 className="text-xl font-semibold text-slate-900 mb-4">Vidanjör Çekimi</h3>
                 <p className="text-slate-600">Fosseptik, logar ve birikinti su alanlarında güvenli ve hızlı tahliye işlemi gerçekleştiriyoruz.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                 <SearchCheck className="h-10 w-10 text-red-600 mb-6" />
                 <h3 className="text-xl font-semibold text-slate-900 mb-4">Logar ve Rögar Temizliği</h3>
                 <p className="text-slate-600">Koku ve geri tepme sorunlarını önlemek için hatlarınızda düzenli temizlik ve bakım yapıyoruz.</p>
              </div>
            </div>

            {/* Internal Linking text block */}
            <div className="bg-red-50 p-6 rounded-lg mb-12 border-l-4 border-red-500">
               <p className="text-slate-700 m-0 leading-relaxed font-medium">Hizmetlerimiz sadece tek bir işlemle sınırlı değildir. <Link to="/hizmetlerimiz" className="text-red-600 underline underline-offset-2">Kanal açma, vidanjör çekimi ve logar temizliği</Link> gibi ihtiyaçlarınızda tek çağrı ile profesyonel destek alabilirsiniz.</p>
            </div>

            <FAQSection 
              title={`${matchedIlce} Vidanjör Servisi - Sıkça Sorulan Sorular`}
              faqs={[
                {
                  question: `${matchedIlce} bölgesinde gece hizmet veriyor musunuz?`,
                  answer: `Evet, ${matchedIlce} ve çevresindeki mahallelere 7/24 acil vidanjör hizmeti veriyoruz.`
                },
                {
                  question: `Ekibiniz ${matchedIlce} bölgesine ne kadar sürede ulaşır?`,
                  answer: `Trafik ve yoğunluğa bağlı olarak ortalama 15-30 dakika arasında konumunuza ulaşıyoruz.`
                },
                {
                  question: `Hangi hizmetleri sunuyorsunuz?`,
                  answer: `Kanal açma, vidanjör çekimi, logar-rögar temizliği, fosseptik çekimi ve su baskını tahliyesi hizmetleri sunuyoruz.`
                }
              ]} 
            />

            <h3 className="text-2xl font-semibold mt-16 mb-6">{matchedIlce} Yakınındaki Diğer Hizmet Bölgelerimiz</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
              {avrupaYakasiIlceleri.filter(i => i !== matchedIlce).slice(0, 7).map(ilce => (
                 <Link 
                   key={ilce} 
                   to={`/hizmet-bolgeleri/avrupa-yakasi/${generateSlug(ilce)}`}
                   className="flex items-center justify-center p-3 bg-white hover:bg-red-50 hover:text-red-600 text-slate-600 rounded-lg text-sm transition-colors border border-slate-200 font-medium text-center shadow-sm"
                 >
                   {ilce} Vidanjör Hizmeti
                 </Link>
              ))}
              <Link 
                   to={`/hizmet-bolgeleri`}
                   className="flex items-center justify-center p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-sm transition-colors shadow-sm text-center"
                 >
                   Tümünü Gör
                 </Link>
            </div>

            <CTASection title={`${matchedIlce} Bölgesinde Acil Vidanjör Hizmeti`} description="Panik yapmanıza gerek yok. Ekibimiz konumunuza hızlıca ulaşarak sorunu yerinde çözer." />
         </div>
       </section>
    </div>
  );
}
