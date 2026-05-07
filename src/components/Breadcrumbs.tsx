import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs({ items }: { items: { name: string; url: string }[] }) {
  return (
    <nav className="flex text-sm text-slate-500 mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center hover:text-red-600 transition-colors">
            <Home className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Anasayfa</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1 text-slate-400" />
              {index === items.length - 1 ? (
                <span className="text-slate-900 font-medium" aria-current="page">{item.name}</span>
              ) : (
                <Link to={item.url} className="hover:text-red-600 transition-colors">{item.name}</Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
