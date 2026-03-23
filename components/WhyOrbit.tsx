import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function WhyOrbit() {
  return (
    <section id="por-que-orbit" className="py-20 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Por Que <span className="gradient-text-static">Afiliados</span> Escolhem <span className="gradient-text-static">OrbitSender</span>?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Enquanto outras plataformas perdem mensagens e derrubam números, o OrbitSender garante que suas ofertas cheguem em todos os grupos com <span className="text-white font-medium">entrega garantida</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Competitors */}
          <div className="relative p-8 rounded-2xl border border-red-500/20 bg-red-950/5">
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
              <XCircle className="fill-red-900/20" /> Outras Plataformas
            </h3>
            <ul className="space-y-4">
              {[
                "Usa APIs públicas (Baileys, Meow, wwebjs)",
                "Perde ofertas no meio do envio",
                "Risco alto de banimento do WhatsApp",
                "Apenas um número por conta",
                "Sistema cai e você perde vendas",
                "Interface difícil de usar",
                "Sem IA para otimizar ofertas"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* OrbitSender */}
          <div className="relative p-8 rounded-2xl border border-indigo-500/30 bg-indigo-900/10 shadow-[0_0_50px_-12px_rgba(99,102,241,0.25)]">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              RECOMENDADO
            </div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-6 flex items-center gap-3">
              <CheckCircle2 className="fill-indigo-900/20" /> OrbitSender
            </h3>
            <ul className="space-y-4">
              {[
                "API própria e exclusiva",
                "Entrega garantida - suas ofertas chegam",
                "Proteção contra banimento em massa",
                "Múltiplos números - ideal para muitos grupos",
                "Fallback automático - nunca perde uma venda",
                "Interface simples e rápida",
                "IA otimiza suas ofertas automaticamente"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
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