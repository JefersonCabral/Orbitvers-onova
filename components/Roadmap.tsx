import React from 'react';
import { CheckCircle, Circle, Rocket, Zap, Shield, Cpu } from 'lucide-react';

export default function Roadmap() {
  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      status: 'completed',
      items: [
        'API Própria Implementada',
        'Sistema de Fallback Automático',
        'Múltiplos Números por Conta',
        'Interface Web Completa'
      ]
    },
    {
      quarter: 'Q2 2024',
      status: 'completed',
      items: [
        'IA Integrada para Otimização',
        'QuickSender com IA',
        'Sistema de Segmentos',
        'Monitoramento em Tempo Real'
      ]
    },
    {
      quarter: 'Q3 2024',
      status: 'in-progress',
      items: [
        'API Pública para Integrações',
        'Webhooks Avançados',
        'Dashboard Analytics',
        'App Mobile (iOS/Android)'
      ]
    },
    {
      quarter: 'Q4 2024',
      status: 'planned',
      items: [
        'Automação com IA Avançada',
        'Integração com CRMs',
        'White Label para Agências',
        'Marketplace de Templates'
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-emerald-400" />;
      case 'in-progress':
        return <Circle className="w-6 h-6 text-indigo-400 fill-indigo-400" />;
      default:
        return <Circle className="w-6 h-6 text-slate-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-emerald-500/30 bg-emerald-500/10';
      case 'in-progress':
        return 'border-indigo-500/30 bg-indigo-500/10';
      default:
        return 'border-slate-700 bg-slate-900/50';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-[#0B1120] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6">
            <Rocket className="w-4 h-4" />
            Roadmap de Desenvolvimento
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">O Futuro do OrbitSender</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Veja o que já implementamos e o que está por vir. Estamos sempre evoluindo para oferecer a melhor experiência.
          </p>
        </div>

        <div className="space-y-8">
          {roadmapItems.map((quarter, index) => (
            <div
              key={index}
              className={`border-2 rounded-2xl p-8 ${getStatusColor(quarter.status)} transition-all hover:scale-[1.02]`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  {getStatusIcon(quarter.status)}
                  <h2 className="text-2xl font-bold text-white">{quarter.quarter}</h2>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  quarter.status === 'completed' 
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : quarter.status === 'in-progress'
                    ? 'bg-indigo-500/20 text-indigo-300'
                    : 'bg-slate-700 text-slate-400'
                }`}>
                  {quarter.status === 'completed' ? 'Concluído' : 
                   quarter.status === 'in-progress' ? 'Em Progresso' : 'Planejado'}
                </span>
              </div>

              <ul className="space-y-3">
                {quarter.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-slate-300">
                    <div className="mt-1">
                      {quarter.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-600 shrink-0" />
                      )}
                    </div>
                    <span className={quarter.status === 'completed' ? 'line-through text-slate-500' : ''}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Tem uma sugestão?</h3>
            <p className="text-slate-400 mb-6">
              Quer ver alguma funcionalidade no OrbitSender? Entre em contato e compartilhe suas ideias!
            </p>
            <a
              href="#contato"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Enviar Sugestão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

