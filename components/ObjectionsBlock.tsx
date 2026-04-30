import React from 'react';
import { CheckCircle2, HelpCircle, TrendingUp, Settings } from 'lucide-react';

const objections = [
  {
    icon: <HelpCircle size={22} className="text-amber-400" />,
    iconBg: 'bg-amber-500/10 ring-amber-500/20',
    question: '"Não sei usar"',
    answer: 'foi feito pra quem não sabe',
    detail: 'Interface simples, suporte humano real e acesso remoto para te ensinar. Você não precisa saber tecnologia.',
  },
  {
    icon: <TrendingUp size={22} className="text-indigo-400" />,
    iconBg: 'bg-indigo-500/10 ring-indigo-500/20',
    question: '"Tenho poucos grupos"',
    answer: 'perfeito, você cresce com ele',
    detail: 'Começa pequeno, escala sem troca de plano. O sistema distribui automaticamente conforme você adiciona grupos.',
  },
  {
    icon: <Settings size={22} className="text-emerald-400" />,
    iconBg: 'bg-emerald-500/10 ring-emerald-500/20',
    question: '"Já tentei bot"',
    answer: 'o problema não era automação',
    detail: 'Era a ferramenta errada. API própria, fallback automático e múltiplos números fazem toda a diferença na prática.',
  },
];

export default function ObjectionsBlock() {
  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-white mb-3">
            Antes de decidir —{' '}
            <span className="gradient-text-static">vamos direto ao ponto</span>
          </h2>
          <p className="text-neutral-500 text-sm max-w-sm mx-auto leading-relaxed">
            As dúvidas mais comuns, respondidas sem enrolação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {objections.map((obj, i) => (
            <div
              key={i}
              className="border-gradient bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl p-6 sm:p-7 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-200 scroll-reveal-scale"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl ring-1 flex items-center justify-center mb-5 ${obj.iconBg}`}>
                {obj.icon}
              </div>

              {/* Objection */}
              <p className="text-neutral-500 text-sm font-medium mb-3 italic">
                {obj.question}
              </p>

              {/* Answer */}
              <div className="flex items-start gap-2 mb-4">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-white font-semibold text-sm leading-snug">
                  {obj.answer}
                </p>
              </div>

              {/* Detail */}
              <p className="text-neutral-500 text-xs leading-relaxed border-t border-white/[0.05] pt-4">
                {obj.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
