import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-neutral-950 relative overflow-hidden">
      {/* Indigo ambient blob */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border-gradient bg-white/[0.03] ring-1 ring-white/[0.08] rounded-3xl p-8 sm:p-10 md:p-16 text-center scroll-reveal hover:-translate-y-0.5 transition-all duration-300">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 ring-1 ring-red-500/30 px-4 py-1.5 text-xs text-red-300 font-semibold mb-6 sm:mb-8 animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
            Cada dia manual é dinheiro que você deixa na mesa
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-white mb-5 leading-[1.1]">
            Seus concorrentes já estão{' '}
            <span className="gradient-text-static">postando mais,
            mais rápido,</span>{' '}
            <span className="text-white">mais vezes.</span>
          </h2>

          <p className="text-base text-neutral-400 mb-2 max-w-xl mx-auto">
            E você?
          </p>
          <p className="text-base text-neutral-300 mb-8 sm:mb-10 max-w-xl mx-auto font-medium">
            Ainda decidindo se automatiza.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href="#precos"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-white text-neutral-900 px-6 sm:px-8 py-4 text-sm font-bold hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 transition-all duration-200 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset] cursor-pointer"
            >
              Quero vender mais todos os dias <ArrowRight size={14} />
            </a>
            <a
              href="https://wa.me/554497357216?text=Olá! Quero saber mais sobre o OrbitSender."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center border-gradient bg-white/5 backdrop-blur-xl rounded-full px-6 sm:px-8 py-4 text-sm font-medium text-white/80 hover:text-white hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 cursor-pointer"
            >
              Falar com especialista
            </a>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shrink-0" />
              Afiliados já rodando operação 24h
            </span>
            <span className="hidden sm:inline text-neutral-700">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shrink-0" />
              Sem depender de esforço manual
            </span>
            <span className="hidden sm:inline text-neutral-700">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shrink-0" />
              Cancele quando quiser
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
