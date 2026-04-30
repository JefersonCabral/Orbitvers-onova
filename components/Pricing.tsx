import React, { useEffect } from 'react';
import { Check, X, Rocket, Moon, Sparkles, Flame } from 'lucide-react';

const plans = [
  {
    name: 'COMETA',
    icon: <Rocket className="w-5 h-5" />,
    priceOld: 142.89,
    priceNew: 129.90,
    discount: '-10% OFF',
    savings: 'R$ 12,99/mês',
    description: 'Ideal para validar sua operação e começar os primeiros envios.',
    popular: false,
    paymentUrl: 'https://pay.kiwify.com.br/u6Xy97a',
    colorClass: 'border-cyan-500/30 shadow-cyan-500/10 hover:border-cyan-400/60 hover:shadow-cyan-500/20',
    colorGradient: 'from-cyan-400 to-blue-400',
    buttonGradient: 'from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 hover:shadow-cyan-600/40',
    features: [
      { text: 'Envios e Ofertas Ilimitadas', included: true },
      { text: 'Gerencie até 10 Grupos', included: true },
      { text: 'Fazolli Arena: Replique as ofertas do Fazolli nos seus grupos automaticamente', included: true },
      { text: 'Fila Agendada: Programe suas ofertas para o dia todo', included: true },
      { text: 'Replique Grupos: Copie publicações de outros grupos de terceiros', included: true },
      { text: 'Entrega Robusta: Garantimos a entrega para todos os membros do grupo', included: true },
      { text: 'Proteção Anti-Ban: Tecnologia de segurança integrada', included: true },
      { text: 'Apenas 1 Conexão WhatsApp', included: true },
      { text: 'IA para Gerar Promoções', included: true },
      { text: 'Link Preview e Carrossel de Ofertas', included: true },
      { text: 'Integração: Shopee, Amazon, ML e Magalu', included: true },
      { text: 'Acesso para Equipe / Gestão de Membros', included: false },
      { text: 'MultSender PRO (Cadastro em massa)', included: false },
      { text: 'Infraestrutura Premium Isolada', included: false },
    ]
  },
  {
    name: 'LUNAR',
    icon: <Moon className="w-5 h-5" />,
    priceOld: 264.39,
    priceNew: 229.90,
    discount: '-15% OFF',
    savings: 'R$ 34,49/mês',
    description: 'Focado em crescimento e expansão da operação.',
    popular: true,
    paymentUrl: 'https://pay.kiwify.com.br/fG4UEO7',
    colorClass: 'border-violet-500/50 shadow-violet-500/20 hover:border-violet-400/70 hover:shadow-violet-500/40',
    colorGradient: 'from-violet-400 via-fuchsia-400 to-pink-400',
    buttonGradient: 'from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 hover:shadow-violet-600/40',
    features: [
      { text: 'TUDO DO PLANO COMETA E...', included: true },
      { text: 'Gerencie até 30 Grupos', included: true },
      { text: 'Escala de Conexões: Contrate novos números conforme sua necessidade', included: true },
      { text: 'QuickSender: Sistema de envio ultra rápido', included: true },
      { text: 'IA Optimizer: +40% de Cliques', included: true },
      { text: 'Rodízio de IPs Dedicados: Maior segurança nos disparos', included: true },
      { text: 'Dashboard de Métricas', included: true },
      { text: 'Acesso para Equipe / Gestão de Membros', included: false },
      { text: 'MultSender PRO (Cadastro em massa)', included: false },
      { text: 'Infraestrutura Premium Isolada', included: false },
    ]
  },
  {
    name: 'NOVA',
    icon: <Sparkles className="w-5 h-5" />,
    priceOld: 497,
    priceNew: 399,
    discount: '-20% OFF',
    savings: 'R$ 98/mês',
    description: 'A potência máxima: Gestão de equipe e automação industrial.',
    popular: false,
    paymentUrl: 'https://pay.kiwify.com.br/RZ72mdo',
    colorClass: 'border-red-500/50 shadow-red-500/20 hover:border-red-400/70 hover:shadow-red-500/40',
    colorGradient: 'from-red-400 via-orange-400 to-amber-400',
    buttonGradient: 'from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 hover:shadow-red-600/40',
    features: [
      { text: 'TUDO DO PLANO LUNAR E...', included: true },
      { text: 'Grupos ILIMITADOS', included: true },
      { text: 'Gestão de Equipe: Acesso multi-membros para gerenciar sua operação', included: true },
      { text: 'Escala de Conexões Ilimitada: Contrate quantos números sua operação exigir', included: true },
      { text: 'Infraestrutura Premium Isolada: Máxima performance e estabilidade', included: true },
      { text: 'MultSender PRO: Cole 50 links e transforme em 50 campanhas instantaneamente', included: true },
      { text: 'Disparo Simultâneo: Várias filas rodando ao mesmo tempo', included: true },
      { text: 'API e Webhook para Integrações Externas', included: true },
      { text: 'Métricas Avançadas: Relatórios de performance de alto nível', included: true },
      { text: 'Suporte via WhatsApp Prioritário', included: true },
    ]
  },
];

export default function Pricing() {
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Automação WhatsApp para Afiliados",
      "provider": { "@type": "Organization", "name": "OrbitSender", "url": "https://orbitsender.com" },
      "areaServed": { "@type": "Country", "name": "Brasil" },
      "offers": plans.map(plan => ({
        "@type": "Offer",
        "price": plan.priceNew.toString(),
        "priceCurrency": "BRL",
        "description": plan.description,
      })),
      "description": "Plataforma de automação WhatsApp para afiliados com API própria, múltiplos números, IA que aumenta cliques em até 40%, entrega garantida de mensagens e uptime de 99,9%."
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
    <section id="precos" className="py-20 bg-[#0B1120]" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 text-red-300 text-sm font-bold mb-4 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame" aria-hidden="true"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
            PROMOÇÃO POR TEMPO LIMITADO
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame" aria-hidden="true"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
          </div>
          <h2 id="pricing-heading" className="text-3xl md:text-5xl font-bold mb-4">Vamos <span className="gradient-text-static">Crescer</span> Juntos</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Escolha o plano ideal para escalar seus grupos de achadinhos, e turbine seus envios com nossas funcionalidades.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const priceStr = plan.priceNew.toFixed(2);
            const [wholePart, decimalPart] = priceStr.split('.');

            return (
              <div key={idx} className="relative scroll-reveal-scale">
                {/* Badge */}
                {(plan.popular || idx === 2) && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className={`inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full text-white text-sm font-extrabold shadow-lg animate-bounce ${
                      plan.popular
                        ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-violet-500/40'
                        : 'bg-gradient-to-r from-red-600 to-orange-500 shadow-red-500/40'
                    }`}>
                      {plan.popular ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                          MAIS POPULAR
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag" aria-hidden="true"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                          OFERTA ESPECIAL
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`relative p-8 lg:p-7 xl:p-8 rounded-2xl border-2 bg-slate-800/80 shadow-2xl transition-all duration-500 hover:scale-[1.02] group h-full flex flex-col ${plan.popular || idx === 2 ? 'pt-10 lg:pt-8' : ''} ${plan.colorClass}`}>

                  {/* Plan Header */}
                  <div className="flex items-center justify-center gap-2 mb-4 lg:mb-3">
                    <div className={`text-${plan.name === 'COMETA' ? 'cyan' : plan.name === 'LUNAR' ? 'violet' : 'red'}-400 transition-colors duration-300`}>
                      {plan.icon}
                    </div>
                    <span className="text-lg font-semibold text-slate-200 tracking-wide uppercase">{plan.name}</span>
                  </div>

                  {/* Price */}
                  <div className="flex flex-col items-center gap-1 mb-4 lg:mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500 line-through">R$ {plan.priceOld.toFixed(2)}/mês</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold">{plan.discount}</span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-slate-400">R$</span>
                      <span className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${plan.colorGradient} group-hover:from-${plan.name === 'COMETA' ? 'cyan-300' : plan.name === 'LUNAR' ? 'violet-300' : 'red-300'} group-hover:to-${plan.name === 'COMETA' ? 'blue-300' : plan.name === 'LUNAR' ? 'pink-300' : 'amber-300'} transition-all duration-300`}>{wholePart}</span>
                      {decimalPart && <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${plan.colorGradient} group-hover:from-${plan.name === 'COMETA' ? 'cyan-300' : plan.name === 'LUNAR' ? 'violet-300' : 'red-300'} group-hover:to-${plan.name === 'COMETA' ? 'blue-300' : plan.name === 'LUNAR' ? 'pink-300' : 'amber-300'} transition-all duration-300`}>,{decimalPart}</span>}
                      <span className="text-slate-400 text-xl">/mês</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-medium mt-1 inline-flex items-center gap-1.5">
                      <Flame size={12} className="text-emerald-400" />
                      Economize {plan.savings}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-center text-sm italic text-slate-400 mb-6 px-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400 font-medium">{plan.description}</span>
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 lg:space-y-2 mb-6 lg:mb-5">
                    {plan.features.map((feature, i) => {
                      const featureText = typeof feature === 'string' ? feature : feature.text;
                      const isIncluded = typeof feature === 'string' ? true : feature.included;

                      return (
                        <li
                          key={i}
                          className={`flex items-start gap-3 text-sm md:text-base scroll-reveal-left ${isIncluded ? 'text-slate-300' : 'opacity-50'}`}
                          style={{ animationDelay: `${idx * 0.15 + i * 0.04}s` }}
                        >
                          {featureText.startsWith('TUDO') ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 text-violet-400 shrink-0 mt-0.5" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                          ) : isIncluded ? (
                            <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                          ) : (
                            <X className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                          )}
                          <span className={featureText.startsWith('TUDO') ? 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 text-sm uppercase tracking-wide' : isIncluded ? 'font-semibold text-white group-hover:text-white transition-colors duration-300' : 'line-through text-slate-600'}>
                            {featureText}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={plan.paymentUrl}
                    className={`w-full py-4 rounded-xl font-bold block text-center text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mt-auto bg-gradient-to-r ${plan.buttonGradient}`}
                  >
                    Aproveitar Promoção
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-on Info */}
        <div className="mt-12 text-center scroll-reveal">
          <p className="text-slate-400 text-sm mb-3">Precisa de mais números? Adicione conforme cresce:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span className="hover:text-slate-300 transition-colors duration-300">R$ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-bold">169</span>/mês por número adicional</span>
          </div>
        </div>
      </div>
    </section>
  );
}
