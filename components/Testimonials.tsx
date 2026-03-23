import React, { useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "João Silva",
      role: "Afiliado",
      content: "Trabalho com 50+ grupos. Antes perdia ofertas por instabilidade. Agora com entrega garantida e múltiplos números, minhas vendas triplicaram.",
      metric: "+300% de vendas",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      name: "Maria Santos",
      role: "Afiliada",
      content: "O fallback automático é incrível! Quando um número cai, outro assume na hora. Nunca mais perdi uma oferta quente por problema técnico.",
      metric: "0% de ofertas perdidas",
      image: "https://picsum.photos/100/100?random=2"
    },
    {
      name: "Carlos Oliveira",
      role: "Afiliado",
      content: "A IA otimiza minhas ofertas e aumentou meus cliques em 40%! Uma oferta simples vira uma mensagem que converte muito mais. E o suporte resolve tudo rapidinho!",
      metric: "+40% de cliques",
      image: "https://picsum.photos/100/100?random=3"
    }
  ];

  // Review/Rating Schema (JSON-LD)
  useEffect(() => {
    const aggregateRating = {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    };

    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "OrbitSender",
      "aggregateRating": aggregateRating,
      "review": reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.name
        },
        "reviewBody": review.content,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
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

  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4"><span className="gradient-text-static">Afiliados</span> Que <span className="gradient-text-static">Escalaram</span> Com OrbitSender</h2>
          <p className="text-slate-400">Histórias reais de quem aumentou vendas e cliques com <span className="text-white font-medium">entrega garantida</span>.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl relative group hover:border-indigo-500/50 transition-all">
              <Quote className="absolute top-6 right-6 text-slate-700 group-hover:text-indigo-500/50 transition-colors" size={40} />

              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                "{review.content}"
              </p>

              <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                <img src={review.image} alt={`Foto de ${review.name}, ${review.role}`} className="w-12 h-12 rounded-full border-2 border-slate-600 object-cover" loading="lazy" />
                <div>
                  <h3 className="text-white font-bold text-sm">{review.name}</h3>
                  <p className="text-slate-400 text-xs">{review.role}</p>
                </div>
              </div>

              <div className="mt-4 bg-emerald-500/10 py-1 px-3 rounded text-center">
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">{review.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}