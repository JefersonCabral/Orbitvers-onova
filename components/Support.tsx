import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Support() {
  return (
    <section id="suporte" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#0B1120] via-[#0A0E1A] to-[#0A0E1A]" aria-labelledby="support-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-xs font-semibold mb-6 animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
            ESTAMOS PRONTOS PARA AJUDAR
          </div>
          <h2 id="support-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Precisa de <span className="gradient-text-static">Suporte</span>?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Fale com nosso time via WhatsApp. Resposta rápida, suporte especializado e disponível 24/7.
          </p>
        </div>

        {/* WhatsApp Card */}
        <div className="max-w-2xl mx-auto scroll-reveal-scale">
          <a
            href="https://wa.me/554497357216"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Iniciar chat de suporte no WhatsApp"
            className="group relative rounded-2xl border-2 border-green-500/50 hover:border-green-400/70 bg-slate-900/50 backdrop-blur-xl p-8 sm:p-12 shadow-2xl shadow-green-500/20 hover:shadow-green-500/40 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#0A0E1A] transition-all duration-500 overflow-hidden flex flex-col items-center text-center cursor-pointer"
          >
            {/* Gradient Background Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-green-500/10 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit mb-6 sm:mb-8 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 group-hover:border-green-500/50 transition-colors duration-300 relative z-10">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="text-xs font-semibold text-green-300">Resposta em 2 minutos</span>
            </div>

            {/* Icon */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 mb-6 sm:mb-8 relative z-10">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path>
              </svg>
            </div>

            {/* Title & Description */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 relative z-10">
              Fale com nosso suporte
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 relative z-10 max-w-sm">
              Chat direto via WhatsApp com resposta rápida do nosso time especializado. Disponível 24/7 para resolver suas dúvidas.
            </p>

            {/* CTA — div styled as button (parent <a> handles the link) */}
            <div className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-bold text-white bg-gradient-to-r from-green-600 to-green-500 group-hover:from-green-500 group-hover:to-green-400 group-hover:shadow-lg group-hover:shadow-green-600/40 group-hover:-translate-y-1 transition-all duration-300 relative z-10">
              Iniciar Chat no WhatsApp
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
