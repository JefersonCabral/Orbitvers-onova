import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-[#0B1120]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-500/20 rounded-full mb-8">
              <Rocket className="w-8 h-8 text-indigo-400" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text-static">Entrega Garantida de Mensagens</span> em Seus Grupos, Aumenta em até <span className="gradient-text-static">40% de Cliques</span> em Seus Links
            </h2>

            <p className="text-lg text-indigo-200/90 mb-10 max-w-2xl mx-auto">
              A única plataforma de gestão de grupos e campanhas em massa para achadinhos com entrega garantida de mensagens. Com API própria, múltiplos números, uptime de 99,9% e IA integrada que otimiza suas ofertas automaticamente. Junte-se a centenas de afiliados que escalaram suas operações com <span className="text-white font-semibold">estabilidade total</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="https://app.orbitsender.com/register" className="w-full sm:w-auto bg-white text-indigo-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-indigo-50 transition-colors shadow-xl text-center">
                Começar Agora
              </a>
              <a href="https://wa.me/554499763965?text=Olá! Gostaria de agendar uma demonstração do OrbitSender." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors text-center">
                Agendar Demonstração
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-indigo-300/80">
              <span className="flex items-center gap-1">✅ Promoção por tempo limitado</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">✅ Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}