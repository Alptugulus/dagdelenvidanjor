import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { useSEO } from "../hooks/useSEO";
import { posts } from "../data/posts";

export function Blog() {
  const sliderImages = ["/blog-1.png", "/blog-2.png", "/blog-3.png", "/blog-4.png", "/blog-5.png"];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [sliderImages.length]);

  useSEO({
    title: "Blog & Faydalı Bilgiler - Vidanjör Hizmetleri",
    description: "Kanal tıkanıklığı, vidanjör kullanımı, altyapı bakımı ve işletmeler için periyodik temizlik konularında güncel içerikler.",
    breadcrumbs: [
      { name: "Blog", url: "/blog" }
    ]
  });

  return (
    <div className="py-20 min-h-[calc(100vh-80px)] bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />
         
         <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl mb-6">Blog & Faydalı Bilgiler</h1>
          <p className="text-xl text-slate-600">
            Vidanjör hizmetleri ve altyapı bakımı hakkında uzman ekibimizden pratik bilgiler.
          </p>
        </div>

        <section className="relative mb-14 overflow-hidden rounded-3xl bg-slate-900 shadow-xl">
          {sliderImages.map((image, index) => (
            <div
              key={image}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
              style={{
                backgroundImage: `url('${image}')`,
                opacity: activeSlide === index ? 0.65 : 0,
              }}
            />
          ))}
          <div className="relative z-10 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Sahadan Vidanjör Görselleri</h2>
            <p className="text-slate-200 max-w-2xl">Ekipmanlarımızı ve çalışma alanlarımızı gösteren görsellerle hizmet kalitemizi yakından inceleyin.</p>
          </div>
          <div className="absolute bottom-5 right-5 z-20 flex gap-2">
            {sliderImages.map((image, index) => (
              <button
                key={`${image}-dot`}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 w-8 rounded-full transition-colors ${
                  activeSlide === index ? "bg-red-500" : "bg-white/50"
                }`}
                aria-label={`Blog slider ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
             <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 transition-all hover:shadow-md flex flex-col">
               <div className="aspect-[16/9] w-full overflow-hidden">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
               </div>
               <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center text-sm text-slate-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">{post.title}</h2>
                  <p className="text-slate-600 mb-6 flex-1">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center font-medium text-red-600 hover:text-red-700 mt-auto">
                    Devamını Oku <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
               </div>
             </article>
          ))}
        </div>

        <CTASection title="Tıkanıklık mı Var? Hemen Ulaşın" />
      </div>
    </div>
  );
}
