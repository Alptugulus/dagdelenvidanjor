import { useParams, Navigate, Link } from "react-router-dom";
import Markdown from "react-markdown";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { PictureImg } from "../components/PictureImg";
import { useSEO } from "../hooks/useSEO";
import { posts } from "../data/posts";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Calculate estimated reading time
  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200) || 1;

  const documentTitle = post.seoTitle ?? post.title;
  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  useSEO({
    title: documentTitle,
    description: post.excerpt,
    ogImage: post.image,
    breadcrumbs: [
      { name: "Blog", url: "/blog" },
      { name: documentTitle, url: `/blog/${post.slug}` },
    ],
  });

  return (
    <div className="py-20 min-h-[calc(100vh-80px)] bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { name: "Blog", url: "/blog" },
          { name: documentTitle, url: `/blog/${post.slug}` }
        ]} />

        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-red-600 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Blog'a Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-slate-500 gap-6 text-sm mb-8 pb-8 border-b border-slate-100">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2 text-slate-400" />
              <span className="font-medium text-slate-700">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-slate-400" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-slate-400" />
              {readingTime} Dk Okuma
            </div>
          </div>
        </div>

        <div className="relative aspect-[21/9] mb-12 w-full overflow-hidden rounded-3xl shadow-md">
          <PictureImg
            src={post.image}
            alt={post.title}
            width={1200}
            height={514}
            pictureClassName="absolute inset-0 block h-full w-full"
            className="h-full w-full object-cover"
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <div className="prose prose-lg prose-slate prose-red max-w-none prose-headings:font-semibold prose-a:text-red-600 hover:prose-a:text-red-500 pb-16 border-b border-slate-100">
          <div className="markdown-body">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>

        {relatedPosts.length > 0 ? (
          <section className="mt-14 border-b border-slate-100 pb-14" aria-labelledby="related-posts-heading">
            <h2 id="related-posts-heading" className="mb-6 text-2xl font-semibold text-slate-900">
              İlgili Yazılar
            </h2>
            <ul className="space-y-4">
              {relatedPosts.map((related) => (
                <li key={related.slug}>
                  <Link
                    to={`/blog/${related.slug}`}
                    className="font-medium text-red-600 hover:text-red-700"
                  >
                    {related.seoTitle ?? related.title}
                  </Link>
                  <p className="mt-1 text-sm text-slate-600">{related.excerpt}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link to="/hizmetlerimiz" className="font-medium text-slate-700 underline-offset-4 hover:text-red-600 hover:underline">
                Vidanjör ve altyapı hizmetlerimizi inceleyin
              </Link>
            </p>
          </section>
        ) : null}

        <div className="mt-16">
          <CTASection
            title="Acil vidanjör desteğine mi ihtiyacınız var?"
            description="Kanal tıkanıklığı, taşkın veya fosseptik çekimi için ekibimiz hızlıca konumunuza ulaşır."
          />
        </div>
      </div>
    </div>
  );
}
