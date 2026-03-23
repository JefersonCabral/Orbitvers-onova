import React, { useEffect } from 'react';
import { Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // BreadcrumbList Schema (JSON-LD)
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    const scriptId = 'breadcrumb-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(breadcrumbSchema);
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <ol className="flex items-center space-x-2 text-sm text-slate-400">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index === 0 ? (
              <a href={item.url} className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ) : index === items.length - 1 ? (
              <span className="text-white font-medium" aria-current="page">{item.name}</span>
            ) : (
              <a href={item.url} className="hover:text-white transition-colors">{item.name}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

