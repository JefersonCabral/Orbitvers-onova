import React from 'react';
import { QrCode, Layers, Wand2, BarChart3 } from 'lucide-react';

export default function Features() {
  const steps = [
    {
      id: "01",
      title: "Conecte Seus Números",
      desc: "Conecte quantos números WhatsApp quiser. Ideal para afiliados que gerenciam múltiplos grupos de achadinhos.",
      icon: <QrCode className="w-6 h-6 text-white" />
    },
    {
      id: "02",
      title: "Organize Seus Grupos",
      desc: "Sincronize e organize seus grupos por categoria: Shopee, Amazon, Mercado Livre, etc.",
      icon: <Layers className="w-6 h-6 text-white" />
    },
    {
      id: "03",
      title: "Crie Ofertas com IA",
      desc: "Adicione imagem e texto da oferta. A IA otimiza sua mensagem para aumentar cliques e conversões.",
      icon: <Wand2 className="w-6 h-6 text-white" />
    },
    {
      id: "04",
      title: "Envie e Acompanhe",
      desc: "Envie para milhares de grupos simultaneamente. Monitore entregas e conversões em tempo real.",
      icon: <BarChart3 className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-[#0B1120] relative overflow-hidden" aria-labelledby="features-heading">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-900/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-20 scroll-reveal">
          <h2 id="features-heading" className="text-3xl md:text-5xl font-bold mb-4">Como Enviar <span className="gradient-text-static">Ofertas</span> Para Seus <span className="gradient-text-static">Grupos</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Automatize o envio de ofertas e promoções em 4 passos simples. Feito para quem trabalha com grupos e quer aumentar conversões.
          </p>
        </header>

        {/* Timeline Desktop */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500/20 via-indigo-500/50 to-indigo-500/20 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group scroll-reveal-scale" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border-2 border-slate-700 group-hover:border-indigo-500 group-hover:bg-indigo-600 transition-all duration-500 flex items-center justify-center shadow-xl mb-6 relative group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl group-hover:shadow-indigo-500/50">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:bg-indigo-600 group-hover:border-indigo-400 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlight Box - Enhanced */}
        <div className="mt-24 bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 scroll-reveal hover:border-indigo-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:scale-[1.02]">
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold">
                    <Wand2 size={16} /> Nova Feature
                </div>
                <h3 className="text-3xl font-bold">IA Que Aumenta Cliques em até 40%</h3>
                <p className="text-slate-300 text-lg">
                    A IA reescreve suas ofertas em 9 estilos diferentes: Persuasivo, Urgente, Humor e mais. Transforme uma oferta simples em uma mensagem que aumenta cliques nos links de afiliados em até 40%.
                </p>
                <a href="#funcionalidades" className="text-white font-semibold underline decoration-indigo-500 underline-offset-4 hover:text-indigo-400 transition-colors">
                    Ver a IA em ação &rarr;
                </a>
            </div>
            <div className="flex-1 bg-slate-950/50 rounded-xl p-6 border border-white/10 w-full max-w-md shadow-2xl">
                {/* Mockup UI */}
                <div className="space-y-4">
                    <div className="flex gap-2 mb-4">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-xs text-slate-500 uppercase font-bold">Oferta Original</div>
                        <div className="p-3 bg-slate-800 rounded text-slate-400 text-sm">
                            iPhone em promoção, clica no link.
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-indigo-600/20 p-2 rounded-full">
                            <Wand2 size={20} className="text-indigo-400 animate-pulse" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-xs text-indigo-400 uppercase font-bold">IA Otimizada (Estilo: Persuasivo)</div>
                        <div className="p-3 bg-indigo-900/20 border border-indigo-500/30 rounded text-white text-sm">
                            🚨 <strong>ACHADO DO DIA!</strong> iPhone com desconto que você não vai acreditar! Estoque limitado, corre que ainda dá tempo! 🏃‍♂️💨 <br/>👉 [Link da Oferta]
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}