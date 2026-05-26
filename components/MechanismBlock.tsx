import React from 'react';
import { Eye, Target, Wand2, Send, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    icon: <Eye size={22} className="text-indigo-400" />,
    label: 'Monitora',
    desc: 'grupos que já convertem',
    wrapperClass: 'bg-indigo-500/10 ring-indigo-500/25',
    dotClass: 'bg-indigo-400',
    pillClass: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
  },
  {
    id: '02',
    icon: <Target size={22} className="text-amber-400" />,
    label: 'Identifica',
    desc: 'as melhores ofertas',
    wrapperClass: 'bg-amber-500/10 ring-amber-500/25',
    dotClass: 'bg-amber-400',
    pillClass: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  },
  {
    id: '03',
    icon: <Wand2 size={22} className="text-purple-400" />,
    label: 'Reescreve',
    desc: 'com IA pra aumentar clique',
    wrapperClass: 'bg-purple-500/10 ring-purple-500/25',
    dotClass: 'bg-purple-400',
    pillClass: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  },
  {
    id: '04',
    icon: <Send size={22} className="text-emerald-400" />,
    label: 'Dispara',
    desc: 'automaticamente nos seus grupos',
    wrapperClass: 'bg-emerald-500/10 ring-emerald-500/25',
    dotClass: 'bg-emerald-400',
    pillClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  },
];

function FlowArrow({ delay }: { delay: string }) {
  return (
    <div className="hidden lg:flex items-center flex-1 px-1">
      <div className="flex items-center gap-0.5 w-full justify-center">
        {[0, 1, 2, 3].map((j) => (
          <span
            key={j}
            className="w-1.5 h-1.5 rounded-full bg-white/15 animate-pulse"
            style={{ animationDelay: `${parseFloat(delay) + j * 0.15}s` }}
          />
        ))}
        <ArrowRight size={12} className="text-white/20 ml-1 shrink-0" />
      </div>
    </div>
  );
}

export default function MechanismBlock() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0A0E1A] relative overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4 max-w-3xl mx-auto leading-tight">
            O OrbitSender roda em loop — 24 horas por dia, sem esforço, sem atraso,{' '}
            <span className="gradient-text-static">sem perda de tempo.</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Como seus grupos começam a{' '}
            <span className="gradient-text-static">vender sozinhos?</span>
          </p>
        </div>

        {/* Desktop — horizontal flow */}
        <div className="hidden lg:flex items-center justify-center gap-0 mb-10">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div
                className="flex flex-col items-center gap-4 w-48 scroll-reveal-scale"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl ring-2 flex items-center justify-center ${step.wrapperClass}`}>
                  {step.icon}
                </div>
                <div className="text-center">
                  <p className="text-white font-bold text-sm mb-0.5">{step.label}</p>
                  <p className="text-neutral-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono ${step.pillClass}`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${step.dotClass}`} />
                  {step.id}
                </div>
              </div>
              {i < steps.length - 1 && <FlowArrow delay={`${i * 0.4}s`} />}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile + Tablet — 2-col grid */}
        <div className="lg:hidden grid grid-cols-2 gap-4 sm:gap-6 mb-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="border-gradient bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-3 text-center scroll-reveal-scale"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ring-1 flex items-center justify-center ${step.wrapperClass}`}>
                {step.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{step.label}</p>
                <p className="text-neutral-500 text-xs mt-0.5 leading-relaxed">{step.desc}</p>
              </div>
              <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[9px] font-mono ${step.pillClass}`}>
                <span className={`w-1 h-1 rounded-full ${step.dotClass}`} />
                {step.id}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="max-w-2xl mx-auto scroll-reveal">
          <div className="border-gradient bg-indigo-500/[0.04] ring-1 ring-indigo-500/15 rounded-2xl p-4 sm:p-5">
            <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs text-neutral-400">
              {[
                { label: '24 horas por dia', delay: '0s' },
                { label: 'Sem esforço', delay: '0.3s' },
                { label: 'Sem atraso', delay: '0.6s' },
                { label: 'Sem perda de tempo', delay: '0.9s' },
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"
                    style={{ animationDelay: t.delay }}
                  />
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
