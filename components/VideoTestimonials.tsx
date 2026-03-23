import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail?: string;
}

interface Video {
  id: string;
  title: string;
  thumbnail?: string;
}

export default function VideoTestimonials() {
  // IDs dos vídeos do YouTube - SUBSTITUA pelos IDs reais dos seus vídeos de depoimentos
  // Para obter o ID: https://www.youtube.com/watch?v=ID_DO_VIDEO <- o ID é a parte após "v="
  const videos: Video[] = [
    { id: 'dQw4w9WgXcQ', title: 'Depoimento Cliente 1' }, // ⚠️ SUBSTITUIR pelo ID real
    { id: 'dQw4w9WgXcQ', title: 'Depoimento Cliente 2' }, // ⚠️ SUBSTITUIR pelo ID real
    { id: 'dQw4w9WgXcQ', title: 'Depoimento Cliente 3' }, // ⚠️ SUBSTITUIR pelo ID real
    { id: 'dQw4w9WgXcQ', title: 'Depoimento Cliente 4' }, // ⚠️ SUBSTITUIR pelo ID real
    { id: 'dQw4w9WgXcQ', title: 'Depoimento Cliente 5' }, // ⚠️ SUBSTITUIR pelo ID real
    // Adicione mais vídeos aqui conforme necessário
  ];

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const scrollSpeedRef = useRef(0.5); // Velocidade de scroll (pixels por frame)
  const isUserScrollingRef = useRef(false);
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Duplica vídeos várias vezes para criar loop infinito suave
  const infiniteVideos = [...videos, ...videos, ...videos, ...videos, ...videos];

  // Auto-scroll infinito contínuo - otimizado para performance
  useEffect(() => {
    if (!isAutoPlaying || !scrollContainerRef.current || isUserScrollingRef.current) return;

    const container = scrollContainerRef.current;
    let lastTime = performance.now();
    
    const animate = (currentTime: number) => {
      if (!scrollContainerRef.current || !isAutoPlaying || isUserScrollingRef.current) return;
      
      const container = scrollContainerRef.current;
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      // Usa deltaTime para scroll suave independente do FPS
      const scrollDelta = (scrollSpeedRef.current * deltaTime) / 16; // Normaliza para 60fps
      
      // Cache dimensões para evitar reflows
      if (!dimensionsCacheRef.current) {
        const containerWidth = container.offsetWidth;
        const videoWidth = container.children[0]?.clientWidth || 0;
        const gap = 24;
        dimensionsCacheRef.current = {
          containerWidth,
          videoWidth,
          totalVideoWidth: videoWidth + gap
        };
      }
      const { containerWidth, videoWidth, totalVideoWidth } = dimensionsCacheRef.current;
      const scrollWidth = container.scrollWidth;
      const middleSetStart = videos.length * totalVideoWidth * 2;

      // Scroll contínuo suave
      container.scrollLeft += scrollDelta;

      // Loop infinito - reposiciona quando necessário
      if (container.scrollLeft >= scrollWidth - containerWidth - totalVideoWidth * 3) {
        const scrollFromMiddle = container.scrollLeft - middleSetStart;
        container.scrollLeft = middleSetStart + (scrollFromMiddle % (videos.length * totalVideoWidth));
      } else if (container.scrollLeft <= videos.length * totalVideoWidth + totalVideoWidth) {
        const scrollFromMiddle = container.scrollLeft - middleSetStart;
        container.scrollLeft = middleSetStart + (scrollFromMiddle % (videos.length * totalVideoWidth));
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAutoPlaying, videos.length]);

  // Detecta quando o usuário está fazendo scroll manual
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleUserScroll = () => {
      isUserScrollingRef.current = true;
      
      // Limpa timeout anterior
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
      
      // Após 2 segundos sem scroll, volta a rolar automaticamente
      userScrollTimeoutRef.current = setTimeout(() => {
        isUserScrollingRef.current = false;
      }, 2000);
    };

    container.addEventListener('scroll', handleUserScroll, { passive: true });
    container.addEventListener('mousedown', () => { isUserScrollingRef.current = true; }, { passive: true });
    container.addEventListener('wheel', handleUserScroll, { passive: true });
    container.addEventListener('touchstart', () => { isUserScrollingRef.current = true; }, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleUserScroll);
      container.removeEventListener('mousedown', () => {});
      container.removeEventListener('wheel', handleUserScroll);
      container.removeEventListener('touchstart', () => {});
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
    };
  }, []);

  // Inicializa o scroll no primeiro vídeo (centro)
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Aguarda o próximo frame para garantir que os elementos estão renderizados
      requestAnimationFrame(() => {
        const containerWidth = container.offsetWidth;
        const videoWidth = container.children[0]?.clientWidth || 0;
        const gap = 24; // gap-6 = 24px
        const totalVideoWidth = videoWidth + gap;
        // Posiciona no terceiro conjunto (meio), começando com o primeiro vídeo
        const middleSetStart = videos.length * totalVideoWidth * 2;
        const initialPosition = middleSetStart + (containerWidth / 2) - (videoWidth / 2);
        
        container.scrollTo({
          left: initialPosition,
          behavior: 'auto',
        });
      });
    }
  }, [videos.length]);

  // Detecta qual vídeo está no centro para atualizar os dots
  const getCurrentVideoIndex = () => {
    if (!scrollContainerRef.current || scrollContainerRef.current.children.length === 0) return 0;
    const container = scrollContainerRef.current;
    const containerWidth = container.offsetWidth;
    const scrollLeft = container.scrollLeft;
    const videoWidth = container.children[0]?.clientWidth || 0;
    const gap = 24;
    const totalVideoWidth = videoWidth + gap;
    
    // Calcula qual vídeo está no centro
    const centerPosition = scrollLeft + (containerWidth / 2);
    // Encontra o vídeo mais próximo do centro
    let closestIndex = 0;
    let minDistance = Infinity;
    
    for (let i = 0; i < container.children.length; i++) {
      const videoElement = container.children[i] as HTMLElement;
      const videoPosition = videoElement.offsetLeft + (videoWidth / 2);
      const distance = Math.abs(videoPosition - centerPosition);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    
    // Retorna o índice real (modulo)
    return closestIndex % videos.length;
  };

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [centerVideoIndex, setCenterVideoIndex] = useState<number | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState<number | null>(null); // IntersectionObserver para carregar apenas quando visível

  // Cache de dimensões para evitar reflows
  const dimensionsCacheRef = useRef<{ containerWidth: number; videoWidth: number; totalVideoWidth: number } | null>(null);

  // Atualiza o índice do vídeo atual baseado na posição do scroll (otimizado com cache)
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    let ticking = false;
    let lastScrollLeft = container.scrollLeft;

    const updateCurrentIndex = () => {
      if (!scrollContainerRef.current) return;
      
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      
      // Só atualiza se o scroll mudou significativamente
      if (Math.abs(scrollLeft - lastScrollLeft) < 10) {
        ticking = false;
        return;
      }
      
      lastScrollLeft = scrollLeft;
      
      // Usa cache ou calcula uma vez
      if (!dimensionsCacheRef.current) {
        const containerWidth = container.offsetWidth;
        const videoWidth = container.children[0]?.clientWidth || 0;
        const gap = 24;
        dimensionsCacheRef.current = {
          containerWidth,
          videoWidth,
          totalVideoWidth: videoWidth + gap
        };
      }
      
      const { containerWidth, videoWidth, totalVideoWidth } = dimensionsCacheRef.current;
      const centerPosition = scrollLeft + (containerWidth / 2);
      
      // Encontra o vídeo mais próximo do centro de forma otimizada
      let closestIndex = 0;
      let minDistance = Infinity;
      
      // Limita a busca apenas aos vídeos visíveis (melhora performance)
      const startIndex = Math.max(0, Math.floor(scrollLeft / totalVideoWidth) - 2);
      const endIndex = Math.min(container.children.length, startIndex + 5);
      
      for (let i = startIndex; i < endIndex; i++) {
        const videoElement = container.children[i] as HTMLElement;
        if (!videoElement) continue;
        
        const videoPosition = videoElement.offsetLeft + (videoWidth / 2);
        const distance = Math.abs(videoPosition - centerPosition);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }
      
      const realIndex = closestIndex % videos.length;
      setCurrentVideoIndex(realIndex);
      setCenterVideoIndex(closestIndex);
      setShouldLoadVideo(closestIndex); // Ativa carregamento do vídeo no centro
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateCurrentIndex);
        ticking = true;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    
    // Invalida cache em resize
    const handleResize = () => {
      dimensionsCacheRef.current = null;
    };
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [videos.length]);

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`;
  };

  const getYouTubeThumbnail = (videoId: string) => {
    // Usa hqdefault (480x360) em vez de maxresdefault (1280x720) para reduzir tamanho
    // Economia: ~52 KiB por imagem
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  // VideoObject Schema (JSON-LD) para cada vídeo - Deferido para não bloquear renderização
  useEffect(() => {
    // Defer schema generation para após renderização inicial
    const timeoutId = setTimeout(() => {
      const videoSchemas = videos.map((video, index) => ({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": video.title,
        "description": `Depoimento de cliente OrbitSender: ${video.title}`,
        "thumbnailUrl": getYouTubeThumbnail(video.id),
        "uploadDate": new Date().toISOString(),
        "contentUrl": `https://www.youtube.com/watch?v=${video.id}`,
        "embedUrl": getYouTubeEmbedUrl(video.id),
        "publisher": {
          "@type": "Organization",
          "name": "OrbitSender",
          "logo": {
            "@type": "ImageObject",
            "url": "https://orbitsender.com/logo.png"
          }
        }
      }));

      // Remove schemas antigos
      const existingScripts = document.querySelectorAll('script[id^="video-schema-"]');
      existingScripts.forEach(script => script.remove());

      // Adiciona novos schemas
      videoSchemas.forEach((schema, index) => {
        const script = document.createElement('script');
        script.id = `video-schema-${index}`;
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }, 100); // Defer 100ms após renderização

    return () => clearTimeout(timeoutId);
  }, [videos]);

  // Funções de navegação manual
  const scrollToNext = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const containerWidth = container.offsetWidth;
    const videoWidth = container.children[0]?.clientWidth || 0;
    const gap = 24;
    const totalVideoWidth = videoWidth + gap;
    
    isUserScrollingRef.current = true;
    container.scrollBy({
      left: totalVideoWidth,
      behavior: 'smooth',
    });
    
    setTimeout(() => {
      isUserScrollingRef.current = false;
    }, 1000);
  };

  const scrollToPrev = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const containerWidth = container.offsetWidth;
    const videoWidth = container.children[0]?.clientWidth || 0;
    const gap = 24;
    const totalVideoWidth = videoWidth + gap;
    
    isUserScrollingRef.current = true;
    container.scrollBy({
      left: -totalVideoWidth,
      behavior: 'smooth',
    });
    
    setTimeout(() => {
      isUserScrollingRef.current = false;
    }, 1000);
  };

  return (
    <section id="depoimentos" className="py-20 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-900/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-900/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            O Que Nossos <span className="gradient-text-static">Clientes</span> Dizem
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Veja depoimentos reais de afiliados que estão escalando seus negócios com o OrbitSender
          </p>
        </div>

        {/* Carrossel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {videos.length > 1 && (
            <>
              <button
                onClick={scrollToPrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-slate-800/95 hover:bg-slate-700 text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/20 hover:border-indigo-500/50"
                aria-label="Vídeo anterior"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={scrollToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-slate-800/95 hover:bg-slate-700 text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/20 hover:border-indigo-500/50"
                aria-label="Próximo vídeo"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Container com fade nas bordas */}
          <div className="relative px-4 md:px-12 lg:px-20">
            {/* Fade gradient esquerdo - efeito burn */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 lg:w-48 z-30 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
            </div>
            
            {/* Fade gradient direito - efeito burn */}
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 lg:w-48 z-30 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-l from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
            </div>

            {/* Videos Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 scroll-smooth cursor-grab active:cursor-grabbing"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              onMouseDown={() => { isUserScrollingRef.current = true; }}
              onMouseUp={() => {
                setTimeout(() => {
                  isUserScrollingRef.current = false;
                }, 2000);
              }}
            >
              {infiniteVideos.map((video, index) => {
                // Usa o índice do centro calculado (otimizado)
                const isCenter = centerVideoIndex === index;
                const realIndex = index % videos.length;
                
                // Calcula se está visível baseado na distância do centro
                let isVisible = false;
                if (centerVideoIndex !== null) {
                  const distance = Math.abs(index - centerVideoIndex);
                  isVisible = distance <= 1; // Mostra 3 vídeos (centro + 1 de cada lado)
                }
                
                return (
                  <div
                    key={`${realIndex}-${index}`}
                    data-index={index}
                    className={`flex-shrink-0 transition-all duration-700 ease-out snap-center ${
                      // Mobile: 1 vídeo por vez, Desktop: 3 vídeos visíveis
                      'w-[90%] sm:w-[80%] md:w-[32%] lg:w-[31%]'
                    } ${
                      isCenter 
                        ? 'scale-100 opacity-100 z-10' 
                        : isVisible
                        ? 'scale-90 opacity-50 z-0'
                        : 'scale-75 opacity-10 z-0'
                    }`}
                  >
                    <div className={`relative bg-slate-800/50 rounded-2xl overflow-hidden border transition-all duration-500 shadow-xl group ${
                      isCenter 
                        ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/30' 
                        : 'border-slate-700/30 hover:border-slate-600/50'
                    }`}>
                      {/* Video Container - Lazy Loading Otimizado com IntersectionObserver */}
                      <div className="relative aspect-video bg-slate-900 rounded-t-2xl overflow-hidden">
                        {/* Só carrega iframe se estiver no centro E visível (IntersectionObserver) */}
                        {isCenter && shouldLoadVideo === index ? (
                          <iframe
                            src={getYouTubeEmbedUrl(video.id)}
                            title={video.title}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          ></iframe>
                        ) : (
                          /* Thumbnail com play button para vídeos não carregados */
                          <div className="relative w-full h-full bg-slate-800">
                            <img
                              src={getYouTubeThumbnail(video.id)}
                              alt={video.title}
                              className="w-full h-full object-cover opacity-60"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black/50 rounded-full p-4 backdrop-blur-sm">
                                <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-white" />
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Overlay de fade para vídeos laterais - efeito burn mais forte */}
                        {!isCenter && isVisible && centerVideoIndex !== null && (
                          <div className={`absolute inset-0 pointer-events-none ${
                            index < centerVideoIndex
                              ? 'bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/40 to-transparent'
                              : 'bg-gradient-to-l from-[#0F172A]/90 via-[#0F172A]/40 to-transparent'
                          }`}></div>
                        )}
                        {!isCenter && !isVisible && (
                          <div className="absolute inset-0 bg-[#0F172A]/95 pointer-events-none"></div>
                        )}
                      </div>

                      {/* Video Title */}
                      <div className={`p-3 md:p-4 bg-slate-800/80 backdrop-blur-sm transition-all duration-300 ${
                        isCenter ? 'opacity-100' : 'opacity-60'
                      }`}>
                        <h3 className={`font-semibold text-sm md:text-base lg:text-lg transition-colors duration-300 ${
                          isCenter 
                            ? 'text-white group-hover:text-indigo-300' 
                            : 'text-slate-500'
                        }`}>
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          {videos.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {videos.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentVideoIndex
                      ? 'w-8 h-2 bg-indigo-500'
                      : 'w-2 h-2 bg-slate-600'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Auto-play indicator */}
          {videos.length > 1 && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-slate-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-800/50"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pausar rolagem</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Reproduzir rolagem</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth scroll behavior */
        .scrollbar-hide {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        /* Snap scroll para melhor experiência */
        @supports (scroll-snap-type: x mandatory) {
          .scrollbar-hide {
            scroll-snap-type: x mandatory;
          }
        }
      `}</style>
    </section>
  );
}

