import React, { useEffect } from 'react';
import { Check, Zap, Flame, Tag } from 'lucide-react';

export default function Pricing() {
  const features = [
    "1 Número WhatsApp conectado",
    "50 Grupos",
    "3 Segmentos (Shopee, Amazon, etc)",
    "Ofertas Ilimitadas",
    "IA que aumenta cliques em até 40%",
    "Entrega garantida de mensagens",
    "Uptime de 99,9%",
    "QuickSender incluído",
    "Todas funcionalidades inclusas"
  ];

  // Product/Service Schema (JSON-LD)
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Automação WhatsApp para Afiliados",
      "provider": {
        "@type": "Organization",
        "name": "OrbitSender",
        "url": "https://orbitsender.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "offers": {
        "@type": "Offer",
        "price": "399",
        "priceCurrency": "BRL",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "399",
          "priceCurrency": "BRL",
          "billingIncrement": "P1M"
        },
        "availability": "https://schema.org/InStock",
        "url": "https://app.orbitsender.com/register"
      },
      "description": "Plataforma de automação WhatsApp para afiliados com API própria, múltiplos números, IA que aumenta cliques em até 40%, entrega garantida de mensagens e uptime de 99,9%.",
      "featureList": features
    };

    const scriptId = 'service-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(serviceSchema);
  }, []);

  return (
    <section id="precos" className="py-20 bg-[#0B1120]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 text-red-300 text-sm font-bold mb-4 animate-pulse">
            <Flame size={16} /> PROMOÇÃO POR TEMPO LIMITADO <Flame size={16} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Vamos <span className="gradient-text-static">Crescer</span> Juntos</h2>
          <p className="text-slate-400">Tudo que você precisa para escalar seus grupos de achadinhos em um único plano.</p>
        </div>

        <div className="relative max-w-lg mx-auto scroll-reveal-scale">
          {/* Promo badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-extrabold shadow-lg shadow-red-500/40 animate-bounce">
              <Tag size={14} /> OFERTA ESPECIAL
            </div>
          </div>

          <div className="relative p-8 md:p-10 rounded-2xl border-2 border-red-500/50 bg-slate-800/80 shadow-2xl shadow-red-500/20 hover:border-red-400 hover:shadow-red-500/40 transition-all duration-500 hover:scale-[1.02] group">
            {/* Price section with promo */}
            <div className="flex flex-col items-center gap-1 mb-8">
              {/* Old price struck through */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500 line-through">R$ 497/mês</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold">-20% OFF</span>
              </div>
              {/* New promo price */}
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm text-slate-400">R$</span>
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 group-hover:from-red-300 group-hover:to-amber-300 transition-all duration-300">399</span>
                <span className="text-slate-400 text-xl">/mês</span>
              </div>
              <span className="text-xs text-emerald-400 font-medium mt-1">🔥 Economize R$ 98/mês</span>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-300 scroll-reveal-left" style={{ animationDelay: `${i * 0.1}s` }}>
                  {feat.includes("IA") ? (
                    <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  ) : (
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                  )}
                  <span className="group-hover:text-slate-200 transition-colors duration-300">{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://app.orbitsender.com/register"
              className="btn-primary w-full py-4 rounded-xl font-bold block text-center bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white shadow-lg hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-1 transition-all duration-300"
            >
              🔥 Aproveitar Promoção
            </a>
          </div>
        </div>

        <div className="mt-12 text-center scroll-reveal" style={{ animationDelay: '0.3s' }}>
          <p className="text-slate-400 text-sm mb-3">Precisa de mais números? Adicione conforme cresce:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="hover:text-slate-300 transition-colors duration-300">
              <span className="text-slate-500 line-through text-xs mr-1">R$ 297</span>
              R$ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-bold">169</span>/mês por número adicional
              <span className="inline-flex items-center ml-1.5 px-1.5 py-0.5 rounded bg-red-500/20 border border-red-500/30 text-red-400 text-[10px] font-bold">PROMO</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hover:text-slate-300 transition-colors duration-300">R$ <span className="text-white font-medium">349</span>/mês por Celular Virtual</span>
          </div>
          <p className="text-slate-400 text-xs mt-3 max-w-2xl mx-auto">
            API de integração pública liberada automaticamente para contas com 5 ou mais números contratados.
          </p>
        </div>
      </div>
    </section>
  );
}