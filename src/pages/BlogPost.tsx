import { useParams, Navigate, Link } from "react-router-dom";
import Markdown from "react-markdown";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
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

  useSEO({
    title: post.title,
    description: post.excerpt,
    ogImage: post.image,
    breadcrumbs: [
      { name: "Blog", url: "/blog" },
      { name: post.title, url: `/blog/${post.slug}` },
    ],
  });

  return (
    <div className="py-20 min-h-[calc(100vh-80px)] bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` }
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

        <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden mb-12 shadow-md">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg prose-slate prose-red max-w-none prose-headings:font-semibold prose-a:text-red-600 hover:prose-a:text-red-500 pb-16 border-b border-slate-100">
          <div className="markdown-body">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>

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
