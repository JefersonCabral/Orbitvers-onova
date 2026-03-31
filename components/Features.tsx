import React from 'react';
import { QrCode, Layers, Wand2, BarChart3 } from 'lucide-react';

const steps = [
  {
    id: "PASSO 1",
    title: "Conecte Seus Números",
    desc: "Conecte quantos números WhatsApp quiser via QR Code. Ideal para afiliados que gerenciam múltiplos grupos de achadinhos.",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        {/* QR Code */}
        <div className="w-32 h-32 bg-white/10 rounded-lg border border-white/10 grid grid-cols-5 gap-0.5 p-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className={`rounded-[1px] ${Math.random() > 0.5 ? 'bg-white/80' : 'bg-transparent'}`} />
          ))}
        </div>
        {/* Status */}
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-300 font-medium">Conectado</span>
        </div>
      </div>
    )
  },
  {
    id: "PASSO 2",
    title: "Organize Seus Grupos",
    desc: "Sincronize e organize seus grupos por segmentos: Shopee, Amazon, Mercado Livre, etc. Distribuição automática entre números.",
    visual: (
      <div className="w-full h-full grid grid-cols-2 gap-3 items-center">
        {[
          { name: 'Shopee', icon: '🛒', count: '34', color: 'bg-orange-400/15 border-orange-400/40' },
          { name: 'Amazon', icon: '📦', count: '28', color: 'bg-yellow-400/15 border-yellow-400/40' },
          { name: 'Mercado Livre', icon: '📱', count: '19', color: 'bg-blue-400/15 border-blue-400/40' },
          { name: 'Outros', icon: '✨', count: '+12', color: 'bg-indigo-400/15 border-indigo-400/40' },
        ].map((seg, i) => (
          <div key={i} className={`${seg.color} border rounded-xl p-3 bg-neutral-900/50 text-center`}>
            <p className="text-lg mb-1">{seg.icon}</p>
            <p className="text-xs text-white font-medium">{seg.name}</p>
            <p className="text-xs text-neutral-400 mt-1">{seg.count} grupos</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: "PASSO 3",
    title: "Crie Ofertas com IA",
    desc: "Adicione imagem e texto da oferta. A IA reescreve em 9 estilos diferentes e aumenta cliques em até 40%.",
    visual: (
      <div className="w-full h-full flex flex-col justify-center gap-4">
        {/* Original message */}
        <div className="bg-neutral-900/60 border border-white/10 rounded-lg p-3.5">
          <p className="text-[9px] text-neutral-500 font-mono uppercase tracking-widest mb-2 opacity-70">Original</p>
          <p className="text-sm text-neutral-300">iPhone em promoção, clica no link.</p>
        </div>

        {/* Magic arrow */}
        <div className="flex justify-center">
          <div className="bg-indigo-600/20 ring-1 ring-indigo-500/30 p-2 rounded-full">
            <Wand2 size={14} className="text-indigo-300 animate-pulse" />
          </div>
        </div>

        {/* AI enhanced message */}
        <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-lg p-3.5">
          <p className="text-[9px] text-indigo-300 font-mono uppercase tracking-widest mb-2">IA Persuasivo</p>
          <p className="text-sm text-white font-medium leading-relaxed">🚨 ACHADO DO DIA! iPhone com desconto incrível. Estoque limitado!</p>
        </div>
      </div>
    )
  },
  {
    id: "PASSO 4",
    title: "Envie e Acompanhe",
    desc: "Envie para milhares de grupos simultaneamente. Monitore entregas e conversões em tempo real.",
    visual: (
      <div className="w-full h-full flex flex-col justify-center gap-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-500/20 rounded-md flex items-center justify-center">
              <BarChart3 size={12} className="text-indigo-400" />
            </div>
            <span className="text-xs font-medium text-white">Em Andamento</span>
          </div>
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
        </div>

        {/* Stats */}
        <div className="space-y-3">
          {[
            { label: 'Grupos', val: '2.4K', pct: 80, color: 'from-indigo-500 to-indigo-400' },
            { label: 'Entregues', val: '98%', pct: 98, color: 'from-emerald-500 to-emerald-400' },
            { label: 'Cliques', val: '+40%', pct: 60, color: 'from-amber-500 to-amber-400' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="flex-1">
                <div className={`h-1.5 bg-white/5 rounded-full overflow-hidden`}>
                  <div className={`h-full bg-gradient-to-r ${stat.color}`} style={{ width: `${stat.pct}%` }} />
                </div>
              </div>
              <div className="text-right min-w-fit">
                <p className="text-[10px] text-neutral-400">{stat.label}</p>
                <p className="text-xs text-white font-semibold">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="flex items-flex-end gap-1.5 h-12">
          {[65, 72, 80, 75, 88, 85, 92, 90, 95].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-indigo-500/40 to-indigo-400/20 rounded-sm" style={{ height: `${h * 0.12}px` }} />
          ))}
        </div>
      </div>
    )
  }
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-14 sm:py-18 lg:py-24 bg-neutral-950" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 md:mb-12 scroll-reveal">
          <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center lg:justify-between">
            <div className="flex-1">
              <h2
                id="features-heading"
                className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1]"
              >
                Como Enviar Ofertas.
              </h2>
            </div>
            <div className="mt-4 lg:mt-0 lg:text-right flex-shrink-0">
              <p className="text-sm text-neutral-300 tracking-tight max-w-[28ch] lg:max-w-none leading-relaxed">
                Automatize o envio de promoções em 4 passos simples.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="scroll-reveal-scale grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Visual mockup */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden p-6 sm:p-8 h-full min-h-80 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                    <div className="w-full h-full flex items-center justify-center">
                      {step.visual}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                  <span className="inline-flex items-center w-fit px-3.5 py-1 rounded-full border border-white/20 bg-white/5 text-xs text-white tracking-tight font-medium mb-6">
                    {step.id}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
