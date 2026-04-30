import React, { useEffect, useRef, useState } from 'react';
import { Clock, Zap, TrendingDown, Search, AlertCircle } from 'lucide-react';

const lossItems = [
  {
    icon: <Clock size={20} className="text-amber-400" />,
    label: 'Horas garimpando hoje',
    value: '4h',
    sub: 'perdidas',
    barColor: 'bg-amber-400',
    barPct: 80,
  },
  {
    icon: <Zap size={20} className="text-red-400" />,
    label: 'Promoções perdidas',
    value: '12',
    sub: 'hoje',
    barColor: 'bg-red-400',
    barPct: 60,
  },
  {
    icon: <TrendingDown size={20} className="text-orange-400" />,
    label: 'Comissão não gerada',
    value: 'R$ ???',
    sub: 'este mês',
    barColor: 'bg-orange-400',
    barPct: 95,
  },
  {
    icon: <Search size={20} className="text-neutral-500" />,
    label: 'Concorrentes ativos',
    value: '∞',
    sub: 'neste momento',
    barColor: 'bg-neutral-500',
    barPct: 100,
  },
];

export default function PainBlock() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0A0E1A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 scroll-reveal">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
            O problema não é{' '}
            <span className="gradient-text-static">falta de grupo.</span>
            <br />
            É falta de consistência.
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Vamos ser diretos: o jogo de afiliados hoje exige volume e presença 24h.
            <br className="hidden sm:block" /> Cada minuto offline é uma venda que você entrega de graça.
          </p>
        </div>

        {/* Grid of Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Pain points list */}
          <div className="lg:col-span-5 scroll-reveal-left">
            <div className="border-gradient bg-white/[0.02] ring-1 ring-white/[0.06] rounded-3xl p-8 h-full">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <AlertCircle size={20} className="text-red-500" />
                O que trava sua escala:
              </h3>
              <ul className="space-y-4">
                {[
                  'Você não consegue postar o dia todo',
                  'Perde as melhores promoções relâmpago',
                  'Fica horas garimpando em vez de vender',
                  'E no fim… vê o concorrente levar a venda',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-neutral-300 text-base leading-relaxed group">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0 group-hover:scale-125 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="text-neutral-500 text-sm italic">E cada vez que você para:</p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-8 h-px bg-red-500/50" />
                  <p className="text-white font-bold text-lg">alguém vende no seu lugar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Loss Metrics Grid */}
          <div ref={ref} className="lg:col-span-7 scroll-reveal-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lossItems.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-white/[0.02] ring-1 ring-white/[0.06] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="text-right">
                      <span className="block text-white text-xl font-black tabular-nums">{item.value}</span>
                      <span className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold">{item.sub}</span>
                    </div>
                  </div>
                  <p className="text-neutral-400 text-sm font-medium mb-4">{item.label}</p>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.barColor} rounded-full transition-all duration-1000`}
                      style={{
                        width: visible ? `${item.barPct}%` : '0%',
                        transitionDelay: `${i * 0.15}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
              
              {/* Critical Alert Card */}
              <div className="sm:col-span-2 p-5 rounded-2xl border border-red-500/20 bg-red-500/[0.05] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <p className="text-red-300 text-sm font-semibold italic">
                    Promoção relâmpago expirada enquanto você estava offline
                  </p>
                </div>
                <span className="text-[10px] font-mono font-bold text-red-500/60 uppercase tracking-widest">
                  - R$ COMISSÃO
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
