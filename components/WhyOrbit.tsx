import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const competitors = [
  "Para no meio do envio — você não percebe",
  "Mensagem não chega, venda não acontece",
  "Um único número — tudo ou nada",
  "Sistema cai e perde o timing da oferta",
  "API pública que trava quando mais precisa",
  "Você depende de estabilidade que não existe",
];

const advantages = [
  "Troca automática — outro número assume em segundos",
  "Mensagem chegando mesmo com instabilidade",
  "Múltiplos números — operação contínua",
  "Você não perde comissão por falha técnica",
  "API própria e exclusiva — estabilidade máxima. Seu atendimento segue funcionando sem interrupção",
  "Você continua vendendo enquanto outros travam",
];

export default function WhyOrbit() {
  return (
    <section id="por-que-orbit" className="py-16 sm:py-20 lg:py-24 bg-neutral-950" aria-labelledby="why-orbit-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Copy — Top */}
        <div className="max-w-3xl mx-auto text-center scroll-reveal">
          <div className="inline-flex items-center gap-2 rounded-full border-gradient bg-white/5 px-3 py-1.5 text-xs text-indigo-300 font-semibold mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            DIFERENCIAL REAL
          </div>

          <h2 id="why-orbit-heading" className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-5 leading-[1.1]">
            Enquanto outras ferramentas travam…{' '}
            <span className="gradient-text-static">você continua vendendo</span>
          </h2>

          <p className="text-neutral-400 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            A maioria para no meio do envio. E você nem percebe.
            Resultado:{' '}
            <span className="text-white font-medium">mensagem não chega, venda não acontece.</span>
          </p>
        </div>

        {/* 3 numbered feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto scroll-reveal">
          {[
            { label: 'Troca automática inteligente', desc: 'Número cai? Outro assume em segundos. Zero perdas.' },
            { label: 'Múltiplos números', desc: 'Operação contínua mesmo com instabilidade.' },
            { label: 'API própria', desc: 'Você não perde comissão por falha técnica.' },
          ].map((feat, i) => (
            <div
              key={i}
              className="border-gradient bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500/15 ring-1 ring-indigo-500/20 flex items-center justify-center shrink-0 text-xs font-bold text-indigo-400 font-mono mb-4">
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="text-white font-semibold text-sm">{feat.label}</p>
              <p className="text-neutral-500 text-xs mt-1 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 max-w-5xl mx-auto p-4 rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.04] scroll-reveal">
          <p className="text-emerald-300/80 text-sm font-medium text-center">
            👉 você não perde comissão por falha técnica
          </p>
        </div>

        {/* Comparison — Two cards side by side below */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">

          <div className="scroll-reveal-left border-gradient bg-white/[0.02] ring-1 ring-white/[0.08] rounded-3xl p-6 sm:p-8 hover:bg-white/[0.04] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
            <h3 className="text-sm font-semibold text-neutral-500 mb-6 flex items-center gap-2 font-mono uppercase tracking-widest">
              <XCircle size={14} className="text-red-500/70" />
              Outras ferramentas
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

          <div className="scroll-reveal-right border-gradient bg-indigo-500/[0.06] ring-1 ring-indigo-500/20 rounded-3xl p-6 sm:p-8 hover:bg-indigo-500/[0.1] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
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
      </div>
    </section>
  );
}
