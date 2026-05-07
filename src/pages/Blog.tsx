import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { useSEO } from "../hooks/useSEO";
import { posts } from "../data/posts";

export function Blog() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
             <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 transition-all hover:shadow-md flex flex-col">
               <div className="aspect-[16/9] w-full overflow-hidden">
                 <img
                   src={post.image}
                   alt=""
                   width={800}
                   height={450}
                   loading="lazy"
                   decoding="async"
                   className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                 />
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
