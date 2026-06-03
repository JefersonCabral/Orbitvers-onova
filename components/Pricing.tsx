import React, { useEffect } from 'react';
import { Check, X, Rocket, Moon, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'COMETA',
    icon: <Rocket className="w-5 h-5" />,
    priceOld: 129.90,
    priceNew: 97.90,
    savings: 'R$ 32,00/mês',
    description: 'Ideal para validar sua operação e começar os primeiros envios.',
    popular: false,
    paymentUrl: 'https://pay.kiwify.com.br/ZhQszc7',
    colorClass: 'border-cyan-500/30 shadow-cyan-500/10 hover:border-cyan-400/60 hover:shadow-cyan-500/20',
    colorGradient: 'from-cyan-400 to-blue-400',
    buttonGradient: 'from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 hover:shadow-cyan-600/40',
    highlightClass: 'border-cyan-400/40 bg-cyan-500/10 ring-1 ring-cyan-400/20 shadow-[0_0_24px_-8px_rgba(34,211,238,0.6)]',
    highlightIconClass: 'text-cyan-300',
    highlightSubClass: 'text-cyan-200/80',
    footer: 'cometa',
    features: [
      { kind: 'highlight' },
      'Envios de Ofertas Ilimitados',
      'Gerencie até 10 Grupos',
      '1 Número de Envio no WhatsApp',
      '1 Segmento (Bloco de envio)',
      'Fila Agendada: Programe suas ofertas para o dia todo',
      'Replique Grupos: Copie publicações de outros grupos de terceiros',
      'Entrega Robusta: Garantimos a entrega para todos os membros do grupo',
      'Proteção Anti-Ban: Tecnologia de segurança integrada',
      'IA para Gerar Promoções',
      'Link Preview e Carrossel de Ofertas',
      'Integração: Shopee, Amazon, ML e Magalu',
      'Encurtador de Link: Link personalizado para cada grupo, reduzindo a chance de banimento nos grupos',
      'Estrutura dedicada para cada número conectado',
      'Proteção de números por Proxy',
      { kind: 'cross', text: 'Canais Adicionais (Proxy + IP Dedicado)' },
      { kind: 'cross', text: 'Acesso para Equipe / Gestão de Membros' },
      { kind: 'cross', text: 'MultSender PRO (Cadastro em massa)' },
      { kind: 'cross', text: 'Infraestrutura Premium Isolada' },
    ]
  },
  {
    name: 'LUNAR',
    icon: <Moon className="w-5 h-5" />,
    priceOld: 229.90,
    priceNew: 179.90,
    savings: 'R$ 32,00/mês',
    description: 'Focado em crescimento e expansão da operação.',
    popular: true,
    paymentUrl: 'https://pay.kiwify.com.br/qm2v6Xo',
    colorClass: 'border-violet-500/50 shadow-violet-500/20 hover:border-violet-400/70 hover:shadow-violet-500/40',
    colorGradient: 'from-violet-400 via-fuchsia-400 to-pink-400',
    buttonGradient: 'from-violet-600 to-fuchsia-500 hover:from-violet-500 hover:to-fuchsia-400 hover:shadow-violet-600/40',
    highlightClass: 'border-violet-400/40 bg-violet-500/10 ring-1 ring-violet-400/20 shadow-[0_0_24px_-8px_rgba(167,139,250,0.6)]',
    highlightIconClass: 'text-violet-300',
    highlightSubClass: 'text-violet-200/80',
    footer: 'channels',
    features: [
      { kind: 'arrow', text: 'TUDO DO PLANO COMETA E...' },
      { kind: 'highlight' },
      'Gerencie até 50 Grupos',
      '2 Números de Envio no WhatsApp',
      '2 Segmentos (Bloco de envio)',
      'Escala de Conexões: Adicione números com Proxy + IP dedicado contra banimentos',
      'QuickSender: Sistema de envio ultra rápido',
      'Disparo Simultâneo: Várias filas rodando ao mesmo tempo',
      'IA Optimizer: +40% de Cliques',
      'Rodízio de IPs Residenciais Dedicados: Maior segurança simulando residências no Brasil',
      'Encurtador + Comissões: Saiba quanto cada grupo rendeu de comissão',
      'Comissões Shopee: Veja suas comissões assim que o relatório de vendas é liberado',
      'Métricas por Região: cliques e visualizações por estado e cidade',
      { kind: 'cross', text: 'Acesso para Equipe / Gestão de Membros' },
      { kind: 'cross', text: 'MultSender PRO (Cadastro em massa)' },
      { kind: 'cross', text: 'Infraestrutura Premium Isolada' },
    ]
  },
  {
    name: 'NOVA',
    icon: <Sparkles className="w-5 h-5" />,
    priceOld: 497.00,
    priceNew: 399.90,
    savings: 'R$ 100,00/mês',
    description: 'A potência máxima: Gestão de equipe e automação industrial.',
    popular: false,
    paymentUrl: 'https://pay.kiwify.com.br/vJ58Rtj',
    colorClass: 'border-red-500/50 shadow-red-500/20 hover:border-red-400/70 hover:shadow-red-500/40',
    colorGradient: 'from-red-400 via-orange-400 to-amber-400',
    buttonGradient: 'from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 hover:shadow-red-600/40',
    highlightClass: 'border-red-400/40 bg-red-500/10 ring-1 ring-red-400/20 shadow-[0_0_24px_-8px_rgba(248,113,113,0.6)]',
    highlightIconClass: 'text-red-300',
    highlightSubClass: 'text-red-200/80',
    footer: 'channels',
    features: [
      { kind: 'arrow', text: 'TUDO DO PLANO LUNAR E...' },
      { kind: 'highlight' },
      'Grupos ILIMITADOS',
      '5 Números de Envio no WhatsApp',
      'Segmentos ILIMITADOS',
      'Gestão de Equipe: Acesso multi-membros para gerenciar sua operação',
      'Escala de Conexões Ilimitada: Contrate quantos números sua operação exigir',
      'Infraestrutura Premium Isolada: Máxima performance e estabilidade',
      'MultSender PRO: Cole 50 links e transforme em 50 campanhas instantaneamente',
      'API e Webhook para Integrações Externas',
      'Métricas Avançadas: Relatórios de performance de alto nível',
      'Suporte via WhatsApp Prioritário',
    ]
  },
];

const includedFeatures = [
  'Encurtador de link personalizado por grupo',
  'Estrutura dedicada para cada número conectado',
  'Proteção de números por Proxy',
  'Monitoramento de grupos com Link Preview',
  'Crédito de IA ilimitado para texto',
  'Sistema de Trava e Anti-Ban',
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
                      <span className="text-sm text-slate-400 line-through">R$ {plan.priceOld.toFixed(2)}/mês</span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-slate-400">R$</span>
                      <span className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${plan.colorGradient} group-hover:from-${plan.name === 'COMETA' ? 'cyan-300' : plan.name === 'LUNAR' ? 'violet-300' : 'red-300'} group-hover:to-${plan.name === 'COMETA' ? 'blue-300' : plan.name === 'LUNAR' ? 'pink-300' : 'amber-300'} transition-all duration-300`}>{wholePart}</span>
                      {decimalPart && <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${plan.colorGradient} group-hover:from-${plan.name === 'COMETA' ? 'cyan-300' : plan.name === 'LUNAR' ? 'violet-300' : 'red-300'} group-hover:to-${plan.name === 'COMETA' ? 'blue-300' : plan.name === 'LUNAR' ? 'pink-300' : 'amber-300'} transition-all duration-300`}>,{decimalPart}</span>}
                      <span className="text-slate-400 text-xl">/mês</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-medium mt-1">🔥 Economize {plan.savings}</span>
                  </div>

                  {/* Description */}
                  <p className="text-center text-sm italic text-slate-300 font-medium mb-6 px-2 leading-relaxed">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 lg:space-y-2.5 mb-6 lg:mb-5">
                    {plan.features.map((feature, i) => {
                      const delay = `${idx * 0.15 + i * 0.04}s`;

                      if (typeof feature !== 'string' && feature.kind === 'highlight') {
                        return (
                          <li key={i} className="scroll-reveal-left" style={{ animationDelay: delay }}>
                            <div className={`flex items-start gap-2.5 rounded-xl border px-3 py-2.5 ${plan.highlightClass}`}>
                              <Sparkles className={`w-5 h-5 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110 ${plan.highlightIconClass}`} />
                              <span className="leading-snug text-sm md:text-base">
                                <span className="font-bold text-white">Grupo de Suporte Individual Exclusivo</span>
                                <span className={`block text-xs md:text-sm mt-0.5 ${plan.highlightSubClass}`}>onde você pode adicionar sua equipe</span>
                              </span>
                            </div>
                          </li>
                        );
                      }

                      if (typeof feature !== 'string' && feature.kind === 'arrow') {
                        return (
                          <li key={i} className="flex items-start gap-3 text-sm md:text-base scroll-reveal-left text-slate-300" style={{ animationDelay: delay }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5 text-violet-400 shrink-0 mt-0.5" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 text-sm uppercase tracking-wide">{feature.text}</span>
                          </li>
                        );
                      }

                      if (typeof feature !== 'string' && feature.kind === 'cross') {
                        return (
                          <li key={i} className="flex items-start gap-3 text-sm md:text-base scroll-reveal-left opacity-50" style={{ animationDelay: delay }}>
                            <X className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                            <span className="line-through text-slate-500">{feature.text}</span>
                          </li>
                        );
                      }

                      const text = feature as string;
                      const colonIndex = text.indexOf(': ');
                      const hasLabel = colonIndex !== -1;

                      return (
                        <li key={i} className="flex items-start gap-3 text-sm md:text-base scroll-reveal-left text-slate-300" style={{ animationDelay: delay }}>
                          <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                          {hasLabel ? (
                            <span className="text-slate-400 leading-snug">
                              <span className="font-semibold text-white">{text.slice(0, colonIndex + 1)}</span>{text.slice(colonIndex + 1)}
                            </span>
                          ) : (
                            <span className="font-semibold text-slate-100 leading-snug">{text}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={plan.paymentUrl}
                    className={`w-full py-4 rounded-xl font-bold block text-center text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mt-auto bg-gradient-to-r ${plan.buttonGradient}`}
                  >
                    🔥 Aproveitar Promoção
                  </a>

                  {/* Card Footer */}
                  <div className="mt-5 pt-5 border-t border-slate-700/60 text-center">
                    {plan.footer === 'cometa' ? (
                      <p className="text-xs text-slate-400 leading-relaxed">Precisa de mais números? A partir do plano <span className="text-violet-300 font-semibold">Lunar</span> você pode adquirir mais canais.</p>
                    ) : (
                      <>
                        <p className="text-xs text-slate-400 mb-1.5">Precisa de mais números? Adicione canais conforme cresce:</p>
                        <p className="text-sm text-slate-300">R$ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-bold">97,00</span>/mês por canal adicional</p>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">Inclui IP dedicado e rodízio para máxima segurança contra banimentos · Disponível a partir do plano Lunar</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Em qualquer plano você já tem */}
        <div className="mt-24 scroll-reveal">
          <section className="relative z-10 grid grid-cols-1 md:grid-cols-12 border border-slate-700/60 rounded-2xl overflow-hidden bg-slate-900/40">
            <div className="col-span-1 md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-700/60 flex flex-col justify-center min-h-[200px] md:min-h-[340px] bg-slate-800/50">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">Em qualquer plano<br className="hidden md:block" /> você já tem</h3>
            </div>
            <div className="col-span-1 md:col-span-8 grid grid-cols-1 sm:grid-cols-2">
              {includedFeatures.map((item, i) => (
                <div key={i} className="group p-6 md:p-8 border-b border-slate-700/60 sm:odd:border-r last:border-b-0 sm:[&:nth-child(5)]:border-b-0 flex items-start justify-between gap-4 hover:bg-slate-800/40 transition-colors duration-300">
                  <div>
                    <span className="text-xs font-mono text-slate-500 mb-2 block">{String(i + 1).padStart(2, '0')}</span>
                    <h4 className="text-base md:text-lg font-medium text-slate-200 leading-snug group-hover:text-white transition-colors duration-300">{item}</h4>
                  </div>
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-7 transition-transform duration-300 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
