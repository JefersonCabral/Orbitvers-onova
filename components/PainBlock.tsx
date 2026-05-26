import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function PainBlock() {
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

        {/* Pain points list */}
        <div className="max-w-2xl mx-auto scroll-reveal-left">
          <div className="border-gradient bg-white/[0.02] ring-1 ring-white/[0.06] rounded-3xl p-8">
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

        {/* Remaining Copy - Centered Below */}
        <div className="mt-16 sm:mt-20 text-center scroll-reveal">
          <div className="inline-block px-10 py-8 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-2xl">
            <p className="text-neutral-400 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-4">
              Se você depende de você pra postar… <span className="text-white font-bold">você nunca vai escalar.</span>
            </p>
            <p className="text-white font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter gradient-text-static">
              Simples assim.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
