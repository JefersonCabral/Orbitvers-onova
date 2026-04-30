import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Zap, Radio, Banknote } from 'lucide-react';

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [triggered, target, duration]);
  return count;
}

export default function ResultBlock() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const freq = useCountUp(120, 1400, triggered);
  const speed = useCountUp(100, 1600, triggered);
  const presence = useCountUp(98, 1200, triggered);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Mais envio ={' '}
            <span className="gradient-text-static">mais clique</span>{' '}
            ={' '}
            <span className="gradient-text-static">mais comissão</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto">
            Não é sobre achar "o produto perfeito". É sobre{' '}
            <span className="text-white font-medium">volume + consistência.</span>
          </p>
        </div>

        {/* Equation cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 scroll-reveal-scale">

          {/* Frequência */}
          <div className="border-gradient bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-6 sm:p-7 text-center hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/15 ring-1 ring-indigo-500/20 flex items-center justify-center mx-auto mb-5">
              <Radio size={20} className="text-indigo-400" />
            </div>
            <p className="text-4xl sm:text-5xl font-bold text-white mb-1 tabular-nums">
              {triggered ? freq : 0}
              <span className="text-xl sm:text-2xl text-indigo-400">+</span>
            </p>
            <p className="text-white font-semibold text-sm mb-1">Mais frequência</p>
            <p className="text-neutral-500 text-xs">promoções enviadas por dia</p>
            <div className="mt-5 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full transition-[width]"
                style={{ width: triggered ? '100%' : '0%', transitionDuration: '1.4s' }}
              />
            </div>
          </div>

          {/* Velocidade */}
          <div className="border-gradient bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-6 sm:p-7 text-center hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 ring-1 ring-amber-500/20 flex items-center justify-center mx-auto mb-5">
              <Zap size={20} className="text-amber-400" />
            </div>
            <p className="text-4xl sm:text-5xl font-bold text-white mb-1 tabular-nums">
              {triggered ? speed : 0}
              <span className="text-xl sm:text-2xl text-amber-400">%</span>
            </p>
            <p className="text-white font-semibold text-sm mb-1">Mais velocidade</p>
            <p className="text-neutral-500 text-xs">automático, sem esperar você</p>
            <div className="mt-5 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-[width]"
                style={{ width: triggered ? '100%' : '0%', transitionDuration: '1.6s' }}
              />
            </div>
          </div>

          {/* Presença */}
          <div className="border-gradient bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-6 sm:p-7 text-center hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-500/20 flex items-center justify-center mx-auto mb-5">
              <TrendingUp size={20} className="text-emerald-400" />
            </div>
            <p className="text-4xl sm:text-5xl font-bold text-white mb-1 tabular-nums">
              {triggered ? presence : 0}
              <span className="text-xl sm:text-2xl text-emerald-400">%</span>
            </p>
            <p className="text-white font-semibold text-sm mb-1">Mais presença</p>
            <p className="text-neutral-500 text-xs">de entrega garantida nos grupos</p>
            <div className="mt-5 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-[width]"
                style={{ width: triggered ? '100%' : '0%', transitionDuration: '1.2s' }}
              />
            </div>
          </div>

        </div>

        {/* Result arrow */}
        <div className="max-w-sm mx-auto scroll-reveal">
          <div className="border-gradient bg-emerald-500/[0.06] ring-1 ring-emerald-500/20 rounded-2xl p-5 text-center hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-neutral-400 text-xs mb-1.5">e isso vira</p>
            <div className="flex items-center justify-center gap-2 text-emerald-400 mb-1">
              <Banknote size={20} />
              <p className="text-white font-bold text-xl tracking-tight uppercase">Dinheiro</p>
            </div>
            <p className="text-neutral-500 text-xs mt-1">todos os dias, no automático</p>
          </div>
        </div>

      </div>
    </section>
  );
}
