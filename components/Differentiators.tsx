import React from 'react';
import { Shield, Layers, RefreshCcw, Headset, Smartphone, Scale, Repeat, Monitor, Layout, Cpu, MessageSquare, Zap, Cloud } from 'lucide-react';

export default function Differentiators() {
  const differentiators = [
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: "Garantia de Entrega",
      desc: "Entrega garantida de mensagens. API própria desenvolvida internamente. Uptime de 99,9% e estabilidade total."
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      title: "Isolamento de Instâncias",
      desc: "Cada número é um microserviço isolado. Não cruza IPs, dificultando banimento em massa."
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-blue-400" />,
      title: "Redundância Automática",
      desc: "Se um número cair, outro assume automaticamente. Contingência real para sua operação."
    },
    {
      icon: <Headset className="w-6 h-6 text-purple-400" />,
      title: "Suporte Especializado",
      desc: "Humanos reais e acesso remoto para ensinar o uso. Nós nos importamos com seu sucesso."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-pink-400" />,
      title: "Múltiplos Números",
      desc: "Gerencie 10, 20, 50 números em uma conta. Ideal para quem trabalha com muitos grupos."
    },
    {
      icon: <Scale className="w-6 h-6 text-orange-400" />,
      title: "Distribuição Automática",
      desc: "O sistema distribui seus grupos automaticamente entre os números para evitar sobrecarga."
    },
    {
      icon: <Repeat className="w-6 h-6 text-teal-400" />,
      title: "Fallback Inteligente",
      desc: "Redirecionamento imediato de envios em caso de desconexão. Zero mensagens perdidas."
    },
    {
      icon: <Cloud className="w-6 h-6 text-sky-400" />,
      title: "Celular Virtual",
      desc: "Não tem aparelho? Use nosso serviço de celular virtual hospedado na nuvem."
    },
    {
      icon: <Monitor className="w-6 h-6 text-yellow-400" />,
      title: "Monitoramento",
      desc: "Monitore um grupo fonte e dispare automaticamente para seus segmentos de destino."
    },
    {
      icon: <Layout className="w-6 h-6 text-red-400" />,
      title: "Responsivo",
      desc: "Acesse de qualquer dispositivo: Celular, Tablet ou PC. Gestão na palma da mão."
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-300" />,
      title: "IA Que Aumenta Cliques",
      desc: "A IA otimiza suas ofertas em 9 estilos diferentes. Pode aumentar cliques nos links de afiliados em até 40%."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "QuickSender",
      desc: "Crie campanhas de ofertas rapidamente. Adicione imagem, texto e envie para seus grupos em segundos."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-green-400" />,
      title: "UI/UX Avançado",
      desc: "Interface moderna e limpa. Diferente da concorrência que parece sistema antigo."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-[#0F172A]" aria-labelledby="differentiators-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 scroll-reveal">
          <h2 id="differentiators-heading" className="text-3xl md:text-5xl font-bold mb-4">
            13 Diferenciais Que Fazem Orbit<span className="gradient-text-static">Sender</span> Único
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A plataforma completa para quem trabalha com grupos. Envie ofertas e promoções com <span className="text-white font-medium">garantia de entrega</span>, uptime de 99,9% e aumente cliques em até 40%.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => (
            <div key={index} className="glass-card-enhanced bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl card-hover-subtle group scroll-reveal-scale" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-indigo-500/30">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {diff.icon}
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">{diff.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">{diff.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}