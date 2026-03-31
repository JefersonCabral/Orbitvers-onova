import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const competitors = [
  "Usa APIs públicas (Baileys, Meow, wwebjs)",
  "Perde ofertas no meio do envio",
  "Risco alto de banimento do WhatsApp",
  "Apenas um número por conta",
  "Sistema cai e você perde vendas",
  "Interface difícil de usar",
  "Sem IA para otimizar ofertas"
];

const advantages = [
  "API própria e exclusiva",
  "Entrega garantida — suas ofertas chegam",
  "Proteção contra banimento em massa",
  "Múltiplos números — ideal para muitos grupos",
  "Fallback automático — nunca perde uma venda",
  "Interface simples e rápida",
  "IA otimiza suas ofertas automaticamente"
];

export default function WhyOrbit() {
  return (
    <section id="por-que-orbit" className="py-16 sm:py-20 lg:py-24 bg-neutral-950" aria-labelledby="why-orbit-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left — Visual comparison */}
          <div className="scroll-reveal-left">
            <div className="border-gradient bg-white/[0.02] ring-1 ring-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              <h3 className="text-sm font-semibold text-neutral-500 mb-6 flex items-center gap-2 font-mono uppercase tracking-widest">
                <XCircle size={14} className="text-red-500/70" />
                Outras Plataformas
              </h3>
              <ul className="space-y-3.5">
                {competitors.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-500 text-sm">
                    <XCircle className="w-4 h-4 text-red-500/50 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 border-gradient bg-indigo-500/[0.06] ring-1 ring-indigo-500/20 rounded-3xl p-8 hover:bg-indigo-500/[0.1] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              <h3 className="text-sm font-semibold text-indigo-300 mb-6 flex items-center gap-2 font-mono uppercase tracking-widest">
                <CheckCircle2 size={14} className="text-indigo-400" />
                OrbitSender
              </h3>
              <ul className="space-y-3.5">
                {advantages.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="scroll-reveal-right lg:pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border-gradient bg-white/5 px-3 py-1.5 text-xs text-indigo-300 font-semibold mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              RECOMENDADO
            </div>

            <h2 id="why-orbit-heading" className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-5">
              Por Que Afiliados Escolhem{' '}
              <span className="gradient-text-static">OrbitSender</span>?
            </h2>

            <p className="text-neutral-400 text-base leading-relaxed mb-8">
              Enquanto outras plataformas perdem mensagens e derrubam números, o OrbitSender garante que suas ofertas cheguem em todos os grupos com{' '}
              <span className="text-white font-medium">entrega garantida</span>.
            </p>

            {/* 3 mini feature cards */}
            <div className="space-y-3">
              {[
                { label: "API própria e exclusiva", desc: "Nenhuma dependência de APIs públicas que caem." },
                { label: "Fallback automático", desc: "Número cai? Outro assume em segundos. Zero perdas." },
                { label: "IA que converte", desc: "Reescreve ofertas em 9 estilos. Até +40% de cliques." }
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-4 border-gradient bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-4 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/15 ring-1 ring-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400 font-mono">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{feat.label}</p>
                    <p className="text-neutral-500 text-xs mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
