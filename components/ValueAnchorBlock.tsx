import React, { useEffect, useRef, useState } from 'react';
import { TrendingDown, AlertTriangle, ArrowRight } from 'lucide-react';

const days = [
  {
    label: '1 dia sem postar',
    period: 'Curto Prazo',
    items: ['Menos cliques nas ofertas', 'Vendas perdidas no dia', 'Dinheiro deixando de entrar'],
    loss: '~ R$ 50',
    barPct: 20,
    barClass: 'bg-amber-400',
    ringClass: 'ring-amber-500/20',
    borderClass: 'border-amber-500/20',
    textClass: 'text-amber-400',
    bgClass: 'bg-amber-500/10',
  },
  {
    label: '1 semana inconsistente',
    period: 'Médio Prazo',
    items: ['Concorrentes dominando', 'Grupos perdendo o engajamento', 'Queda visível nas comissões'],
    loss: '~ R$ 350',
    barPct: 55,
    barClass: 'bg-orange-400',
    ringClass: 'ring-orange-500/20',
    borderClass: 'border-orange-500/20',
    textClass: 'text-orange-400',
    bgClass: 'bg-orange-500/10',
  },
  {
    label: 'Um mês no manual',
    period: 'Longo Prazo',
    items: ['Operação totalmente estagnada', 'Centenas de vendas perdidas', 'Você ficando para trás no mercado'],
    loss: '~ R$ 1.500+',
    barPct: 100,
    barClass: 'bg-red-400',
    ringClass: 'ring-red-500/20',
    borderClass: 'border-red-500/20',
    textClass: 'text-red-400',
    bgClass: 'bg-red-500/10',
  },
];

export default function ValueAnchorBlock() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Quanto custa{' '}
            <span className="gradient-text-static">ficar manual?</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-lg mx-auto leading-relaxed">
            Veja o impacto direto da falta de automação na sua lucratividade.
          </p>
        </div>

        {/* Day cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {days.map((day, i) => (
            <div
              key={i}
              className={`border-gradient bg-white/[0.02] ring-1 ${day.ringClass} rounded-3xl p-6 sm:p-8 scroll-reveal-scale hover:bg-white/[0.04] transition-all duration-300`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${day.borderClass} ${day.textClass} ${day.bgClass}`}>
                  {day.period}
                </span>
                <TrendingDown size={18} className={day.textClass} />
              </div>

              <p className="text-white font-bold text-lg mb-6">{day.label}</p>

              <ul className="space-y-3 mb-8">
                {day.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-neutral-500 text-sm leading-tight">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${day.barClass}`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Loss bar */}
              <div className="mb-4">
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${day.barClass} rounded-full transition-[width] duration-1000`}
                    style={{
                      width: visible ? `${day.barPct}%` : '0%',
                      transitionDelay: `${i * 0.25}s`,
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                <span className="text-neutral-600 text-xs font-medium uppercase tracking-wider">Comissão Perdida</span>
                <span
                  className={`text-xl font-black ${day.textClass} transition-opacity duration-700`}
                  style={{ transitionDelay: `${0.5 + i * 0.25}s`, opacity: visible ? 1 : 0 }}
                >
                  {day.loss}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Multiplier callout */}
        <div className="max-w-2xl mx-auto scroll-reveal">
          <div className="border-gradient bg-red-500/[0.05] ring-1 ring-red-500/20 rounded-[2rem] p-8 sm:p-10 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertTriangle size={80} className="text-red-500" />
            </div>
            
            <p className="text-neutral-400 text-lg mb-4 relative z-10">
              Agora multiplique isso por 30 dias de operação...
            </p>
            <div className="flex items-center justify-center gap-3 relative z-10">
              <ArrowRight className="text-red-500 animate-bounce-x" size={24} />
              <p className="text-white font-black text-2xl sm:text-3xl uppercase tracking-tighter">
                é isso que você está perdendo
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
