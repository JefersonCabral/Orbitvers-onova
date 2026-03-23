import React from 'react';
import { Rocket, Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <article id="sobre" className="py-20 bg-[#0B1120] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre o OrbitSender</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A plataforma de envio em massa feita especialmente para afiliados que trabalham com grupos. Conheça nossa história, missão e valores.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-indigo-600/20 p-4 rounded-lg w-fit mb-6">
              <Rocket className="w-8 h-8 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Nossa Missão</h2>
            <p className="text-slate-400 leading-relaxed">
              Oferecer a melhor plataforma de gestão de grupos e campanhas em massa para achadinhos,
              garantindo <span className="text-white font-medium">entrega garantida de mensagens</span>, uptime de 99,9% e ferramentas que aumentam cliques em até 40%. Fundada em 2024, a OrbitSender nasceu da necessidade de afiliados que precisavam de uma solução confiável e escalável para automação WhatsApp.
            </p>
          </div>

          <div>
            <div className="bg-emerald-600/20 p-4 rounded-lg w-fit mb-6">
              <Target className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Nossa Visão</h2>
            <p className="text-slate-400 leading-relaxed">
              Ser a plataforma líder em automação de mensagens, combinando tecnologia de ponta,
              inteligência artificial e uma experiência de usuário excepcional.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Por que escolher o OrbitSender?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-600/20 p-3 rounded-lg shrink-0">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Feito para Afiliados</h3>
                <p className="text-slate-400">
                  Desenvolvido especialmente para quem trabalha com grupos.
                  Múltiplos números, distribuição automática, entrega garantida de mensagens, uptime de 99,9% e IA que aumenta cliques em até 40%.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-600/20 p-3 rounded-lg shrink-0">
                <Award className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Tecnologia Própria</h3>
                <p className="text-slate-400">
                  API própria significa controle total, sem dependência de terceiros e com
                  garantia de estabilidade total.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Números que Falam por Nós</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Mais de 150 afiliados confiam na OrbitSender para escalar seus negócios. Nossa plataforma já processou milhões de mensagens com entrega garantida.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
                7K+
              </div>
              <div className="text-slate-400">Campanhas Enviadas</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                410K+
              </div>
              <div className="text-slate-400">Mensagens Enviadas</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-2">
                100%
              </div>
              <div className="text-slate-400">Taxa de Entrega</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

