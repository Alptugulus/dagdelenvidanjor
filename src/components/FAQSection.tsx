import { HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection({ faqs, title }: { faqs: FAQItem[], title?: string }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="my-16">
      <div className="flex items-center mb-8">
        <HelpCircle className="h-8 w-8 text-red-600 mr-3" />
        <h2 className="text-3xl font-semibold text-slate-900">{title || "Sıkça Sorulan Sorular"}</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
