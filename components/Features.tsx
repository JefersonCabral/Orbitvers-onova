import React from 'react';
import { Wand2, BarChart3, ShoppingBag, Box, Smartphone, Sparkles } from 'lucide-react';

const steps = [
  {
    id: "PASSO 1",
    title: "Conecta via QR",
    desc: "Conecte seus números WhatsApp via QR Code em segundos. Sem configuração técnica, sem complicação. Só escanear e pronto.",
    visual: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        {/* QR Code */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/10 rounded-lg border border-white/10 grid grid-cols-5 gap-0.5 p-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className={`rounded-[1px] ${[0,1,5,6,10,14,15,16,20,24,23,18,4,9].includes(i) ? 'bg-white/80' : 'bg-transparent'}`} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-300 font-medium">Conectado</span>
        </div>
      </div>
    ),
  },
  {
    id: "PASSO 2",
    title: "Organiza grupos",
    desc: "Sincronize e organize seus grupos por segmentos em segundos. O sistema distribui automaticamente entre os números. Zero trabalho manual.",
    visual: (
      <div className="w-full h-full grid grid-cols-2 gap-3 items-center">
        {[
          { name: 'Shopee', icon: <ShoppingBag size={18} />, count: '34', color: 'bg-orange-400/15 border-orange-400/40 text-orange-400' },
          { name: 'Amazon', icon: <Box size={18} />, count: '28', color: 'bg-yellow-400/15 border-yellow-400/40 text-yellow-400' },
          { name: 'Mercado Livre', icon: <Smartphone size={18} />, count: '19', color: 'bg-blue-400/15 border-blue-400/40 text-blue-400' },
          { name: 'Outros', icon: <Sparkles size={18} />, count: '+12', color: 'bg-indigo-400/15 border-indigo-400/40 text-indigo-400' },
        ].map((seg, i) => (
          <div key={i} className={`${seg.color} border rounded-xl p-3 bg-neutral-900/50 text-center flex flex-col items-center justify-center`}>
            <div className="mb-1">{seg.icon}</div>
            <p className="text-xs text-white font-medium">{seg.name}</p>
            <p className="text-xs text-neutral-400 mt-1">{seg.count} grupos</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "PASSO 3",
    title: "Ativa a IA",
    desc: "A IA entra em ação: monitora, reescreve suas ofertas em 9 estilos diferentes e aumenta cliques em até 40%. Você só liga o sistema.",
    visual: (
      <div className="w-full h-full flex flex-col justify-center gap-4">
        <div className="bg-neutral-950/60 border border-white/10 rounded-lg p-3.5">
          <p className="text-[9px] text-neutral-500 font-mono uppercase tracking-widest mb-2 opacity-70">Original</p>
          <p className="text-sm text-neutral-300">iPhone em promoção, clica no link.</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-indigo-600/20 ring-1 ring-indigo-500/30 p-2 rounded-full">
            <Wand2 size={14} className="text-indigo-300 animate-pulse" />
          </div>
        </div>
        <div className="bg-indigo-950/40 border border-indigo-500/30 rounded-lg p-3.5">
          <p className="text-[9px] text-indigo-300 font-mono uppercase tracking-widest mb-2">IA Persuasivo</p>
          <p className="text-sm text-white font-medium leading-relaxed">ACHADO DO DIA! iPhone com desconto incrível. Estoque limitado!</p>
        </div>
      </div>
    ),
  },
  {
    id: "PASSO 4",
    title: "Começa a rodar",
    desc: "O sistema dispara automaticamente para todos os seus grupos, monitora entregas e você acompanha tudo em tempo real. 24h por dia.",
    visual: (
      <div className="w-full h-full flex flex-col justify-center gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-500/20 rounded-md flex items-center justify-center">
              <BarChart3 size={12} className="text-indigo-400" />
            </div>
            <span className="text-xs font-medium text-white">Em Andamento</span>
          </div>
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
        </div>
        <div className="space-y-3">
          {[
            { label: 'Grupos', val: '2.4K', pct: 80, color: 'from-indigo-500 to-indigo-400' },
            { label: 'Entregues', val: '98%', pct: 98, color: 'from-emerald-500 to-emerald-400' },
            { label: 'Cliques', val: '+40%', pct: 60, color: 'from-amber-500 to-amber-400' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="flex-1">
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
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
        <div className="flex items-end gap-1.5 h-10 sm:h-12">
          {[65, 72, 80, 75, 88, 85, 92, 90, 95].map((h, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-indigo-500/40 to-indigo-400/20 rounded-sm" style={{ height: `${h * 0.11}px` }} />
          ))}
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-14 sm:py-18 lg:py-24 bg-neutral-950" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Simplified and single line */}
        <div className="mb-12 sm:mb-16 md:mb-20 scroll-reveal text-center">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight"
          >
            Você entra no automático <span className="gradient-text-static whitespace-nowrap">em minutos.</span>
          </h2>
          <div className="mt-6 w-24 h-1 bg-indigo-500/30 mx-auto rounded-full" />
        </div>

        {/* Steps */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="scroll-reveal-scale grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-stretch"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Visual mockup */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden p-5 sm:p-6 lg:p-8 h-full min-h-56 sm:min-h-64 lg:min-h-80 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                    <div className="w-full h-full flex items-center justify-center">
                      {step.visual}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                  <span className="inline-flex items-center w-fit px-3 sm:px-3.5 py-1 rounded-full border border-white/20 bg-white/5 text-xs text-white tracking-tight font-medium mb-4 sm:mb-6">
                    {step.id}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight font-bold mb-3 sm:mb-4">
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
