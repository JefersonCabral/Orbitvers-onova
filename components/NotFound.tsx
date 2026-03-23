import React, { useMemo } from 'react';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  const funnyMessages = [
    "Pitico vai te ajudar a voltar para o galinheiro... ops, para a página que realmente existe! 🐓",
    "Pitico está confuso... onde você quer ir? 🐓",
    "Pitico não encontrou o que você procura! 🐓",
    "Ops! Pitico voou para longe desta página! 🐓",
    "Pitico está procurando... mas não achou nada aqui! 🐓",
  ];

  // Seleciona uma mensagem aleatória apenas uma vez no carregamento
  const selectedMessage = useMemo(() => {
    return funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
  }, []);

  const APP_URL = 'https://app.orbitsender.com';

  return (
    <div className="h-screen bg-gradient-to-br from-[#0F172A] via-[#1e293b] to-[#0F172A] flex items-center justify-center px-4 py-4 overflow-hidden">
      <div className="max-w-4xl w-full text-center flex flex-col items-center justify-center h-full">
        {/* Título 404 com animação */}
        <div className="mb-2 md:mb-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-pulse">
            404
          </h1>
        </div>

        {/* Galo Pitico com animações */}
        <div className="mb-2 md:mb-4 relative">
          <div className="inline-block titico-peck">
            <img
              src="/titico.png"
              alt="Pitico - O galo perdido"
              className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto drop-shadow-2xl rounded-full border-2 md:border-4 border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.5)]"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))',
              }}
            />
          </div>

          {/* Efeito de brilho ao redor do galo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>
          </div>
        </div>

        {/* Mensagem cômica */}
        <div className="mb-2 md:mb-4 flex items-center justify-center">
          <h2 className="text-base md:text-xl lg:text-2xl font-bold text-white px-4">
            {selectedMessage}
          </h2>
        </div>

        {/* Texto explicativo */}
        <p className="text-slate-300 text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto leading-tight px-4">
          Parece que você se perdeu! O galo Pitico está aqui para te ajudar a encontrar o caminho de volta.
          <span className="text-indigo-400 font-semibold"> Que tal voltar para casa?</span>
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center mb-3 md:mb-4">
          <a
            href="https://orbitsender.com/"
            className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base shadow-lg shadow-indigo-600/30 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600/50 transition-all duration-300"
          >
            <Home className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            Voltar para o Início
          </a>

          <a
            href={`${APP_URL}/register`}
            className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base shadow-lg shadow-purple-600/30 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-600/50 transition-all duration-300"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            Começar Agora
          </a>
        </div>

        {/* Mensagem extra cômica */}
        <div className="p-3 md:p-4 bg-slate-800/50 rounded-xl border border-indigo-500/30 backdrop-blur-sm max-w-2xl mx-auto">
          <p className="text-slate-400 text-xs md:text-sm">
            <span className="text-indigo-400 font-semibold">💡 Dica do Pitico:</span> Se você está procurando algo específico,
            tente usar o menu de navegação acima ou volte para a página inicial!
          </p>
        </div>
      </div>

      <style>{`
        @keyframes titicoPeck {
          /* 0%: Inicia inclinado para esquerda */
          0% {
            transform: rotate(-8deg);
          }
          /* 0-25%: Gira para direita lento (uma vez) */
          25% {
            transform: rotate(15deg);
          }
          /* 25-30%: Gira para frente rápido (bica) */
          30% {
            transform: rotate(0deg) translateY(-8px);
          }
          /* 30-35%: Volta para direita rápido */
          35% {
            transform: rotate(15deg);
          }
          /* 35-40%: Bica rápido para esquerda */
          40% {
            transform: rotate(-15deg) translateY(-8px);
          }
          /* 40-50%: Volta lento para esquerda (posição inicial) */
          50% {
            transform: rotate(-8deg);
          }
          /* 50-100%: Mantém inclinado para esquerda (pausa antes do loop) */
          100% {
            transform: rotate(-8deg);
          }
        }
        
        .titico-peck {
          animation: titicoPeck 6s ease-in-out infinite;
          transform-origin: center center;
        }
      `}</style>
    </div>
  );
}

