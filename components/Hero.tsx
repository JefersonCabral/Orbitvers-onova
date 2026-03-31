import React from 'react';
import { Play, Shield, Smartphone, Cpu } from 'lucide-react';

const featureCards = [
  {
    icon: <Shield size={16} className="text-emerald-400" />,
    title: 'Garantia de Entrega',
    desc: 'Entrega garantida de mensagens. Uptime de 99,9% e API própria para estabilidade total.',
  },
  {
    icon: <Smartphone size={16} className="text-indigo-400" />,
    title: 'Múltiplos Números',
    desc: 'Gerencie vários números em uma conta. Ideal para quem tem muitos grupos de achadinhos.',
  },
  {
    icon: <Cpu size={16} className="text-amber-400" />,
    title: 'IA que Aumenta Cliques',
    desc: 'A IA otimiza suas ofertas e pode aumentar cliques nos links de afiliados em até 40%.',
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-14 sm:py-18 lg:py-20" aria-label="Hero section">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">

        {/* Announcement pill */}
        <div className="mx-auto w-fit mb-8 scroll-reveal">
          <div className="inline-flex items-center gap-2 rounded-full border-gradient bg-white/5 px-3 py-1.5 text-xs text-neutral-300 backdrop-blur-sm">
            <span className="inline-flex items-center rounded-full bg-indigo-400/20 text-indigo-300 px-2 py-0.5 font-semibold text-[10px] tracking-wide">
              NOVO
            </span>
            <span className="font-medium">IA que aumenta cliques em até 40% nos links de afiliados</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center scroll-reveal" style={{ animationDelay: '0.1s' }}>
          <h1 className="mx-auto max-w-2xl text-3xl sm:text-4xl md:text-5xl tracking-tighter font-bold leading-[1.1]">
            <span className="gradient-text">Entrega Garantida</span>{' '}
            <span className="text-white">em Seus Grupos,</span>{' '}
            <span className="gradient-text">+40% de Cliques</span>{' '}
            <span className="text-white">em Seus Links</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm sm:text-base text-neutral-400 leading-relaxed">
            A única plataforma com entrega garantida de mensagens para campanhas de achadinhos em grupos de WhatsApp. API própria, uptime de 99,9% e IA integrada.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 items-center justify-center scroll-reveal" style={{ animationDelay: '0.15s' }}>
          <a
            href="#precos"
            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-7 py-3.5 text-sm font-semibold hover:-translate-y-0.5 transition-all duration-200 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset] cursor-pointer"
          >
            Começar Agora
          </a>
          <div className="inline-block group relative">
            <a
              href="#funcionalidades"
              className="inline-flex gap-2 border-gradient hover:text-white transition-all duration-200 hover:-translate-y-0.5 text-sm font-medium text-white/80 bg-white/5 rounded-full py-3.5 px-6 backdrop-blur-xl items-center cursor-pointer"
            >
              <Play size={13} className="fill-white/70" />
              Ver Demonstração
            </a>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: 'radial-gradient(60% 100% at 50% 50%,rgba(99,102,241,.45),rgba(99,102,241,.2)35%,transparent 70%)', filter: 'blur(10px)' }}
            />
          </div>
        </div>

        {/* 3 Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 scroll-reveal" style={{ animationDelay: '0.2s' }}>
          {featureCards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 border-gradient bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 ring-1 ring-white/[0.08] flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">{card.title}</p>
                <p className="text-neutral-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
