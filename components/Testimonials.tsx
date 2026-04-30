import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "João Silva",
    role: "Afiliado · 50+ grupos",
    content: "Trabalho com 50+ grupos. Antes perdia ofertas por instabilidade. Agora com entrega garantida e múltiplos números, minhas vendas triplicaram.",
    metric: "+300% de vendas",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Maria Santos",
    role: "Afiliada · Achadinhos",
    content: "O fallback automático é incrível! Quando um número cai, outro assume na hora. Nunca mais perdi uma oferta quente por problema técnico.",
    metric: "0% de ofertas perdidas",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Carlos Oliveira",
    role: "Afiliado · Amazon · Shopee",
    content: "A IA otimiza minhas ofertas e aumentou meus cliques em 40%! Uma oferta simples vira uma mensagem que converte muito mais. E o suporte resolve tudo rapidinho!",
    metric: "+40% de cliques",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Review/Rating Schema (JSON-LD)
  useEffect(() => {
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "OrbitSender",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": reviews.length,
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": reviews.map(review => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": review.name },
        "reviewBody": review.content,
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }))
    };

    const scriptId = 'review-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(reviewSchema);
  }, []);

  const r = reviews[active];

  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-neutral-950" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12 scroll-reveal">
          <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-bold tracking-tighter text-white max-w-lg">
            Afiliados Que <span className="gradient-text-static">Escalaram</span> Com OrbitSender
          </h2>
          <p className="text-neutral-400 max-w-xs md:text-right text-sm leading-relaxed">
            Histórias reais de quem aumentou vendas e cliques com{' '}
            <span className="text-white font-medium">entrega garantida</span>.
          </p>
        </div>

        {/* Large quote card */}
        <div className="border-gradient bg-white/[0.03] ring-1 ring-white/[0.08] rounded-3xl p-8 md:p-14 scroll-reveal hover:-translate-y-0.5 transition-all duration-300">

          {/* Stars */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
            <span className="text-neutral-500 text-xs ml-2">4.9 · avaliações verificadas</span>
          </div>

          {/* Quote text */}
          <blockquote className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-tight text-white leading-snug mb-8 max-w-3xl break-words">
            "{r.content}"
          </blockquote>

          {/* Metric pill */}
          <div className="inline-flex items-center gap-2 bg-white text-neutral-900 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide mb-10">
            {r.metric}
          </div>

          {/* Author + avatar selector */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-6 border-t border-white/[0.06]">
            {/* Active author info */}
            <div className="flex items-center gap-3 flex-1">
              <img
                src={r.image}
                alt={`Foto de ${r.name}`}
                className="w-11 h-11 rounded-full border border-white/10 object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-white font-semibold text-sm">{r.name}</p>
                <p className="text-neutral-500 text-xs">{r.role}</p>
              </div>
            </div>

            {/* Clickable avatar thumbnails */}
            <div className="flex items-center gap-2">
              {reviews.map((rev, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Ver depoimento de ${rev.name}`}
                  className={`w-9 h-9 rounded-full border-2 transition-all duration-200 overflow-hidden cursor-pointer shrink-0 ${
                    i === active
                      ? 'border-indigo-400 ring-2 ring-indigo-400/30 scale-110'
                      : 'border-white/20 opacity-50 hover:opacity-80 hover:border-white/40'
                  }`}
                >
                  <img
                    src={rev.image}
                    alt={rev.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
