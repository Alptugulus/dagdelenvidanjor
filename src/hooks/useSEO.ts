import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_ORIGIN } from "../config/site";
import { webpFromPng } from "../lib/image";

interface SEOProps {
  title: string;
  /** true ise sekme başlığı yalnızca `title` olur (marka eki eklenmez) */
  fullTitle?: boolean;
  description: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faq?: Array<{ question: string; answer: string }>;
  /** Open Graph / Twitter görseli; / ile başlayan yol veya tam URL */
  ogImage?: string;
  /** Arama motorlarında sayfayı gizle */
  noIndex?: boolean;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  const sel = attr === "property" ? `meta[property="${key}"]` : `meta[name="${key}"]`;
  let el = document.querySelector(sel) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function absoluteOgImage(src?: string): string {
  let raw = src?.trim() || DEFAULT_OG_IMAGE;
  if (raw.startsWith("http://") || raw.startsWith("https://")) {
    return raw;
  }
  const pathOnly = raw.startsWith("/") ? raw : `/${raw}`;
  const forOg = /\.png$/i.test(pathOnly) ? webpFromPng(pathOnly) : pathOnly;
  return `${SITE_ORIGIN}${forOg}`;
}

function normalizeCanonicalPath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function useSEO({
  title,
  fullTitle,
  description,
  breadcrumbs,
  faq,
  ogImage,
  noIndex,
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const documentTitle = fullTitle ? title : `${title} | ${SITE_NAME}`;
    document.title = documentTitle;

    setMeta("name", "description", description);

    // Canonical URL'de query string kullanmayız; UTM/gclid gibi parametreler
    // aynı içeriği farklı URL gibi gösterebilir.
    const canonicalPath = normalizeCanonicalPath(location.pathname);
    const canonicalUrl = `${SITE_ORIGIN}${canonicalPath}`;
    setLink("canonical", canonicalUrl);

    // Open Graph
    setMeta("property", "og:type", "website");
    setMeta("property", "og:locale", "tr_TR");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", documentTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    const ogFullImage = absoluteOgImage(ogImage);
    setMeta("property", "og:image", ogFullImage);

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", documentTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogFullImage);

    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    // Schema: BreadcrumbList
    let breadcrumbScript = document.getElementById("schema-breadcrumb");
    if (breadcrumbs && breadcrumbs.length > 0) {
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement("script");
        breadcrumbScript.id = "schema-breadcrumb";
        breadcrumbScript.setAttribute("type", "application/ld+json");
        document.head.appendChild(breadcrumbScript);
      }

      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Anasayfa",
            item: `${SITE_ORIGIN}/`,
          },
          ...breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            position: i + 2,
            name: b.name,
            item: `${SITE_ORIGIN}${b.url.startsWith("/") ? b.url : `/${b.url}`}`,
          })),
        ],
      };
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    } else if (breadcrumbScript) {
      breadcrumbScript.remove();
    }

    // Schema: FAQPage
    let faqScript = document.getElementById("schema-faq");
    if (faq && faq.length > 0) {
      if (!faqScript) {
        faqScript = document.createElement("script");
        faqScript.id = "schema-faq";
        faqScript.setAttribute("type", "application/ld+json");
        document.head.appendChild(faqScript);
      }

      const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      };
      faqScript.textContent = JSON.stringify(faqData);
    } else if (faqScript) {
      faqScript.remove();
    }
  }, [
    title,
    fullTitle,
    description,
    breadcrumbs,
    faq,
    ogImage,
    noIndex,
    location.pathname,
    location.search,
  ]);
}
