import React from 'react';
import { Search, Wand2, Send } from 'lucide-react';

const flowSteps = [
  {
    icon: <Search size={24} />,
    iconClass: 'text-indigo-400',
    ringClass: 'ring-indigo-500/25',
    bgClass: 'bg-indigo-500/10',
    label: 'encontra',
    labelColor: 'text-indigo-400',
    example: 'iPhone 15 -38% na Shopee',
    detail: 'Monitorou 8 grupos e detectou a oferta em tempo real',
    badge: '12 ofertas hoje',
    badgeClass: 'bg-indigo-500/15 text-indigo-300',
  },
  {
    icon: <Wand2 size={24} />,
    iconClass: 'text-purple-400',
    ringClass: 'ring-purple-500/25',
    bgClass: 'bg-purple-500/10',
    label: 'adapta',
    labelColor: 'text-purple-400',
    example: '"🚨 ACHADO! iPhone -38%! Estoque acabando…"',
    detail: 'IA reescreveu em 9 estilos pra aumentar o clique em até 40%',
    badge: '+40% de cliques',
    badgeClass: 'bg-purple-500/15 text-purple-300',
  },
  {
    icon: <Send size={24} />,
    iconClass: 'text-emerald-400',
    ringClass: 'ring-emerald-500/25',
    bgClass: 'bg-emerald-500/10',
    label: 'envia',
    labelColor: 'text-emerald-400',
    example: 'Disparado para 34 grupos',
    detail: 'Tudo automático, sem você tocar',
    badge: '98% entregues',
    badgeClass: 'bg-emerald-500/15 text-emerald-300',
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-14 sm:py-18 lg:py-20" aria-label="Hero section">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 relative z-10">

        {/* Headline - Original Styles and Copy */}
        <div className="text-center scroll-reveal" style={{ animationDelay: '0.05s' }}>
          <h1 className="mx-auto max-w-4xl text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-bold leading-[1.15] text-center">
            <span className="text-white">Seus grupos vendendo todos os dias</span>
            <br />
            <span className="gradient-text">mesmo quando você não está online</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-sm sm:text-base text-neutral-400 leading-relaxed">
            Enquanto você ainda está procurando produto…{' '}
            <span className="text-white font-medium">tem gente rodando 100+ ofertas por dia no automático</span>{' '}
            e acumulando comissão.
          </p>
        </div>

        {/* 3 Blocks Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 scroll-reveal" style={{ animationDelay: '0.1s' }}>
          {flowSteps.map((step, index) => (
            <div 
              key={index}
              className="group relative border-gradient bg-white/[0.03] ring-1 ring-white/[0.06] rounded-3xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-1"
              style={{ 
                animationDelay: `${0.1 + index * 0.1}s`
              }}
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl ring-1 ${step.ringClass} ${step.bgClass} flex items-center justify-center shrink-0`}>
                  <span className={step.iconClass}>{step.icon}</span>
                </div>
                <span className={`font-black text-xl uppercase tracking-tight ${step.labelColor}`}>{step.label}</span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <p className="text-white text-base font-semibold leading-snug mb-3">
                  {step.example}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {step.detail}
                </p>
              </div>

              {/* Badge */}
              <div className="mt-auto">
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${step.badgeClass}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {step.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14 scroll-reveal" style={{ animationDelay: '0.2s' }}>
          <a
            href="#precos"
            className="group relative inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-10 py-4 text-sm font-bold hover:bg-indigo-50 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95 cursor-pointer"
          >
            Quero vender mais todos os dias
            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
