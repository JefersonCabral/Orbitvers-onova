import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-neutral-950 relative overflow-hidden">
      {/* Indigo ambient blob */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border-gradient bg-white/[0.03] ring-1 ring-white/[0.08] rounded-3xl p-10 md:p-16 text-center scroll-reveal hover:-translate-y-0.5 transition-all duration-300">

          {/* Gradient accent pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 ring-1 ring-indigo-500/30 px-4 py-1.5 text-xs text-indigo-300 font-semibold mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Comece hoje mesmo
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-5">
            <span className="gradient-text-static">Entrega Garantida de Mensagens</span>{' '}
            em Seus Grupos, Aumenta em até{' '}
            <span className="gradient-text-static">40% de Cliques</span>{' '}
            em Seus Links
          </h2>

          <p className="text-base text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            A única plataforma de gestão de grupos e campanhas em massa para achadinhos com entrega garantida de mensagens. Com API própria, múltiplos números, uptime de 99,9% e IA integrada que otimiza suas ofertas automaticamente. Junte-se a centenas de afiliados que escalaram suas operações com{' '}
            <span className="text-white font-medium">estabilidade total</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href="https://app.orbitsender.com/register"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-white text-neutral-900 px-8 py-4 text-sm font-bold hover:-translate-y-0.5 transition-all duration-200 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset] cursor-pointer"
            >
              Começar Agora <ArrowRight size={14} />
            </a>
            <a
              href="https://wa.me/554499763965?text=Olá! Gostaria de agendar uma demonstração do OrbitSender."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center border-gradient bg-white/5 backdrop-blur-xl rounded-full px-8 py-4 text-sm font-medium text-white/80 hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Agendar Demonstração
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Promoção por tempo limitado
            </span>
            <span className="hidden sm:inline text-neutral-700">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Cancele quando quiser
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
