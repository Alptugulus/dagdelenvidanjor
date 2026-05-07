import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs({ items }: { items: { name: string; url: string }[] }) {
  return (
    <nav className="mb-8 flex text-sm text-slate-500" aria-label="Sayfa konumu">
      <ol className="inline-flex flex-wrap items-center gap-x-1 md:gap-x-2">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center hover:text-red-600 transition-colors">
            <Home className="mr-2 h-4 w-4 shrink-0" aria-hidden />
            <span>Anasayfa</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <ChevronRight className="mx-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
            {index === items.length - 1 ? (
              <span className="font-medium text-slate-900" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={item.url} className="hover:text-red-600 transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
