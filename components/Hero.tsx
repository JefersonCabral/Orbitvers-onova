import React from 'react';
import { CheckCircle, Play, ShieldCheck, Zap, Cpu } from 'lucide-react';
import Stats from './Stats';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden" aria-label="Hero section">
      {/* Background Effects - Enhanced */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] mix-blend-screen animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* Badges - Enhanced */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 scroll-reveal">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-500/30 text-indigo-300 text-xs font-semibold transition-all duration-300 hover:scale-110 hover:bg-indigo-900/60 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/30">
            <ShieldCheck size={14} className="animate-pulse" /> API Própria & Segura
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all duration-300 hover:scale-110 hover:bg-emerald-900/60 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/30">
            <Zap size={14} className="animate-pulse" /> Entrega Garantida
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all duration-300 hover:scale-110 hover:bg-purple-900/60 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/30">
            <Cpu size={14} className="animate-pulse" /> IA Integrada
          </span>
        </div>

        {/* Headlines - Enhanced */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-5xl scroll-reveal">
          <span className="gradient-text" aria-label="Entrega garantida de mensagens">Entrega Garantida de Mensagens</span> em Seus Grupos, <span className="gradient-text" aria-label="Aumento de até 40% nos cliques">Aumenta em até 40%</span> de Cliques em Seus Links
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed scroll-reveal" style={{ animationDelay: '0.2s' }}>
          A única plataforma com entrega garantida de mensagens nas campanhas de achadinhos em grupos de WhatsApp. Com uptime de 99,9%, garantia de entrega e IA que aumenta cliques em até 40% nos seus links de afiliados.
        </p>

        {/* CTAs - Enhanced */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto scroll-reveal" style={{ animationDelay: '0.4s' }}>
          <a href="https://app.orbitsender.com/register" className="btn-primary bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)] transform hover:-translate-y-1 hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.6)] flex items-center justify-center gap-2">
            Começar Agora
          </a>
          <a href="#funcionalidades" className="bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 hover:border-indigo-500/50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group hover:scale-105 hover:shadow-lg hover:shadow-slate-900/50">
            <Play size={20} className="fill-white group-hover:scale-125 transition-transform duration-300" /> Ver Demonstração
          </a>
        </div>

        {/* Stats Section */}
        <div className="w-full max-w-4xl mb-16">
          <Stats />
        </div>

        {/* Stats / Value Props Cards - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <div className="glass-card-enhanced p-6 rounded-2xl flex flex-col items-start card-hover-subtle group scroll-reveal-scale">
            <div className="p-3 bg-emerald-500/10 rounded-lg mb-4 group-hover:bg-emerald-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <CheckCircle className="text-emerald-400 group-hover:text-emerald-300 transition-colors" size={24} />
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">Garantia de Entrega</h2>
            <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Entrega garantida de mensagens. Uptime de 99,9% e API própria para estabilidade total.</p>
          </div>
          <div className="glass-card-enhanced p-6 rounded-2xl flex flex-col items-start card-hover-subtle group scroll-reveal-scale" style={{ animationDelay: '0.1s' }}>
            <div className="p-3 bg-blue-500/10 rounded-lg mb-4 group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Zap className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">Múltiplos Números</h2>
            <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">Gerencie vários números em uma conta. Ideal para quem tem muitos grupos de achadinhos.</p>
          </div>
          <div className="glass-card-enhanced p-6 rounded-2xl flex flex-col items-start card-hover-subtle group scroll-reveal-scale" style={{ animationDelay: '0.2s' }}>
            <div className="p-3 bg-purple-500/10 rounded-lg mb-4 group-hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Cpu className="text-purple-400 group-hover:text-purple-300 transition-colors" size={24} />
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">IA que Aumenta Cliques</h2>
            <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">A IA otimiza suas ofertas e pode aumentar cliques nos links de afiliados em até 40%.</p>
          </div>
        </div>
      </div>
    </section>
  );
}