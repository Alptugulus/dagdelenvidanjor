import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  faq?: Array<{ question: string; answer: string }>;
}

export function useSEO({ title, description, breadcrumbs, faq }: SEOProps) {
  useEffect(() => {
    // 1. Set document title
    document.title = `${title} | Vidanjor Servis`;

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // 3. Set Schema: BreadcrumbList
    let breadcrumbScript = document.getElementById('schema-breadcrumb');
    if (breadcrumbs && breadcrumbs.length > 0) {
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = 'schema-breadcrumb';
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(breadcrumbScript);
      }
      
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Anasayfa",
            "item": "https://www.vidanjor.com/"
          },
          ...breadcrumbs.map((b, i) => ({
            "@type": "ListItem",
            "position": i + 2,
            "name": b.name,
            "item": `https://www.vidanjor.com${b.url}`
          }))
        ]
      };
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    } else if (breadcrumbScript) {
      breadcrumbScript.remove();
    }

    // 4. Set Schema: FAQPage
    let faqScript = document.getElementById('schema-faq');
    if (faq && faq.length > 0) {
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = 'schema-faq';
        faqScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(faqScript);
      }
      
      const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      };
      faqScript.textContent = JSON.stringify(faqData);
    } else if (faqScript) {
      faqScript.remove();
    }
  }, [title, description, breadcrumbs, faq]);
}
