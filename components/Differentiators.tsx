import React from 'react';
import { Shield, Layers, RefreshCcw, Headset, Smartphone, Scale, Repeat, Monitor, Layout, Cpu, MessageSquare, Zap, Cloud } from 'lucide-react';

const differentiators = [
  {
    icon: <Shield className="w-5 h-5 text-emerald-400" />,
    title: "Garantia de Entrega",
    desc: "Entrega garantida de mensagens. API própria desenvolvida internamente. Uptime de 99,9% e estabilidade total."
  },
  {
    icon: <Layers className="w-5 h-5 text-indigo-400" />,
    title: "Isolamento de Instâncias",
    desc: "Cada número é um microserviço isolado. Não cruza IPs, dificultando banimento em massa."
  },
  {
    icon: <RefreshCcw className="w-5 h-5 text-blue-400" />,
    title: "Redundância Automática",
    desc: "Se um número cair, outro assume automaticamente. Contingência real para sua operação."
  },
  {
    icon: <Headset className="w-5 h-5 text-purple-400" />,
    title: "Suporte Especializado",
    desc: "Humanos reais e acesso remoto para ensinar o uso. Nós nos importamos com seu sucesso."
  },
  {
    icon: <Smartphone className="w-5 h-5 text-pink-400" />,
    title: "Múltiplos Números",
    desc: "Gerencie 10, 20, 50 números em uma conta. Ideal para quem trabalha com muitos grupos."
  },
  {
    icon: <Scale className="w-5 h-5 text-orange-400" />,
    title: "Distribuição Automática",
    desc: "O sistema distribui seus grupos automaticamente entre os números para evitar sobrecarga."
  },
  {
    icon: <Repeat className="w-5 h-5 text-teal-400" />,
    title: "Fallback Inteligente",
    desc: "Redirecionamento imediato de envios em caso de desconexão. Zero mensagens perdidas."
  },
  {
    icon: <Cloud className="w-5 h-5 text-sky-400" />,
    title: "Celular Virtual",
    desc: "Não tem aparelho? Use nosso serviço de celular virtual hospedado na nuvem."
  },
  {
    icon: <Monitor className="w-5 h-5 text-yellow-400" />,
    title: "Monitoramento",
    desc: "Monitore um grupo fonte e dispare automaticamente para seus segmentos de destino."
  },
  {
    icon: <Layout className="w-5 h-5 text-red-400" />,
    title: "Responsivo",
    desc: "Acesse de qualquer dispositivo: Celular, Tablet ou PC. Gestão na palma da mão."
  },
  {
    icon: <Cpu className="w-5 h-5 text-indigo-300" />,
    title: "IA Que Aumenta Cliques",
    desc: "A IA otimiza suas ofertas em 9 estilos diferentes. Pode aumentar cliques em até 40%."
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    title: "QuickSender",
    desc: "Crie campanhas de ofertas rapidamente. Adicione imagem, texto e envie para seus grupos em segundos."
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-green-400" />,
    title: "UI/UX Avançado",
    desc: "Interface moderna e limpa. Diferente da concorrência que parece sistema antigo."
  }
];

export default function Differentiators() {
  return (
    <section id="diferenciais" className="py-14 sm:py-18 lg:py-24 bg-neutral-950" aria-labelledby="differentiators-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12 scroll-reveal">
          <h2 id="differentiators-heading" className="text-3xl md:text-5xl font-bold tracking-tighter text-white max-w-lg">
            13 Diferenciais Que Fazem Orbit<span className="gradient-text-static">Sender</span> Único
          </h2>
          <p className="text-neutral-400 max-w-xs md:text-right text-sm leading-relaxed">
            A plataforma completa para escalar grupos com{' '}
            <span className="text-white font-medium">garantia de entrega</span>.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="border-gradient bg-white/[0.03] ring-1 ring-white/[0.06] p-6 rounded-2xl group hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-200 scroll-reveal-scale cursor-pointer"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 ring-1 ring-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-white/[0.08] transition-colors duration-200">
                {diff.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5">{diff.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{diff.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
