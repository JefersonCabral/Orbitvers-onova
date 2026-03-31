import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';
import SEO from './components/SEO';
import Hero from './components/Hero';
// import VideoTestimonials from './components/VideoTestimonials';
import WhyOrbit from './components/WhyOrbit';
import Differentiators from './components/Differentiators';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
// Lazy load apenas páginas secundárias (não acessadas frequentemente)
const Contact = lazy(() => import('./components/Contact'));
const Roadmap = lazy(() => import('./components/Roadmap'));
const About = lazy(() => import('./components/About'));
const Privacy = lazy(() => import('./components/Privacy'));
const Terms = lazy(() => import('./components/Terms'));
const LGPD = lazy(() => import('./components/LGPD'));
const NotFound = lazy(() => import('./components/NotFound'));

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isNotFound, setIsNotFound] = useState(false);
  const lastHashRef = useRef<string>('');
  const isScrollingRef = useRef<boolean>(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Ignora eventos de scroll durante scroll programático
      if (isScrollingRef.current) return;

      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Reveal Observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
      observerRef.current?.disconnect();
    };
  }, [currentPage]);

  useEffect(() => {
    const pageRoutes = ['sobre', 'contato', 'roadmap', 'privacidade', 'termos', 'lgpd'];
    const validSections = ['hero', 'depoimentos', 'diferenciais', 'precos', 'funcionalidades', 'faq', 'por-que-orbit'];
    const validPaths = ['', 'docs', ...pageRoutes];

    const handleHashChange = () => {
      // Verifica primeiro se há uma rota no pathname (sem hash)
      const pathname = window.location.pathname.replace('/', '').split('/')[0]; // Pega apenas a primeira parte do path

      // Se o pathname não é válido e não está vazio, mostra 404
      // Permite docs e suas subrotas, e outras rotas válidas
      if (pathname && !validPaths.includes(pathname) && pathname !== 'docs' && !pathname.startsWith('docs/')) {
        setIsNotFound(true);
        setCurrentPage('notfound');
        return;
      }

      // Se é uma rota docs, deixa o nginx lidar (não é 404)
      if (pathname === 'docs' || pathname.startsWith('docs/')) {
        setIsNotFound(false);
        return;
      }

      // Se há uma rota no pathname, redireciona para hash e processa
      if (pathname && pageRoutes.includes(pathname)) {
        setIsNotFound(false);
        window.history.replaceState(null, '', `/#${pathname}`);
        setCurrentPage(pathname);
        lastHashRef.current = pathname;
        isScrollingRef.current = true;
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 500);
        }, 100);
        return;
      }

      setIsNotFound(false);

      const hash = window.location.hash.replace('#', '');

      // Se o hash não mudou, não faz nada
      if (hash === lastHashRef.current) return;

      lastHashRef.current = hash;

      if (pageRoutes.includes(hash)) {
        setCurrentPage(hash);
        // Scroll to top when changing pages
        isScrollingRef.current = true;
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 500);
        }, 100);
      } else {
        setCurrentPage('home');
        // If it's a section anchor, scroll to it only if hash changed
        if (hash) {
          isScrollingRef.current = true;
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              // Calcula o offset dinamicamente baseado no scroll atual
              const scrollY = window.scrollY;
              const headerOffset = scrollY < 50 ? 120 : 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              setTimeout(() => {
                isScrollingRef.current = false;
              }, 500);
            } else if (!validSections.includes(hash)) {
              // Se o hash não é uma seção válida, mostra 404
              setIsNotFound(true);
              setCurrentPage('notfound');
              isScrollingRef.current = false;
            } else {
              isScrollingRef.current = false;
            }
          }, 100);
        } else {
          // Se não há hash, está na home
          lastHashRef.current = '';
        }
      }
    };

    // Processa rota inicial (pathname ou hash)
    const initialPathname = window.location.pathname.replace('/', '').split('/')[0];
    const initialHash = window.location.hash.replace('#', '');

    // Verifica se o pathname inicial é inválido
    // Permite docs e suas subrotas
    if (initialPathname && !validPaths.includes(initialPathname) && initialPathname !== 'docs' && !initialPathname.startsWith('docs/')) {
      setIsNotFound(true);
      setCurrentPage('notfound');
    } else if (initialPathname === 'docs' || initialPathname.startsWith('docs/')) {
      // Se é uma rota docs, deixa o nginx lidar (não é 404)
      setIsNotFound(false);
      setCurrentPage('home');
    } else if (initialPathname && pageRoutes.includes(initialPathname)) {
      // Se há rota no pathname, redireciona para hash
      setIsNotFound(false);
      window.history.replaceState(null, '', `/#${initialPathname}`);
      lastHashRef.current = initialPathname;
      setCurrentPage(initialPathname);
    } else if (initialHash) {
      setIsNotFound(false);
      lastHashRef.current = initialHash;
      if (pageRoutes.includes(initialHash)) {
        setCurrentPage(initialHash);
      } else if (!validSections.includes(initialHash) && initialHash) {
        // Hash inválido, mostra 404
        setIsNotFound(true);
        setCurrentPage('notfound');
      } else {
        setCurrentPage('home');
      }
    } else {
      setIsNotFound(false);
      setCurrentPage('home');
    }

    // Também escuta mudanças no pathname (popstate)
    const handlePopState = () => {
      handleHashChange();
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const APP_URL = 'https://app.orbitsender.com';
  const WHATSAPP_URL = 'https://wa.me/554499763965';

  const navLinks = [
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Preços', href: '#precos' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.replace('#', '');
    const pageRoutes = ['sobre', 'contato', 'roadmap', 'privacidade', 'termos', 'lgpd'];

    if (pageRoutes.includes(hash)) {
      // É uma página, não uma âncora
      e.preventDefault();
      setCurrentPage(hash);
      lastHashRef.current = hash;
      isScrollingRef.current = true;
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', href);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }, 100);
    } else if (hash && currentPage === 'home') {
      // É uma âncora na página home
      e.preventDefault();
      isScrollingRef.current = true;
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const scrollY = window.scrollY;
          const headerOffset = scrollY < 50 ? 120 : 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          window.history.pushState(null, '', href);
          lastHashRef.current = hash;
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 500);
        } else {
          isScrollingRef.current = false;
        }
      }, 100);
    } else if (hash) {
      // Tentando acessar âncora mas está em outra página
      e.preventDefault();
      setCurrentPage('home');
      lastHashRef.current = '';
      isScrollingRef.current = true;
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const scrollY = window.scrollY;
            const headerOffset = scrollY < 50 ? 120 : 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            lastHashRef.current = hash;
          }
          window.history.pushState(null, '', href);
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 500);
        }, 300);
      }, 100);
    }
  };

  // SEO dinâmico baseado na página
  const getSEOProps = () => {
    const baseUrl = 'https://orbitsender.com';
    const socialImage = `${baseUrl}/imagemsocial.png`; // Imagem social padrão para todas as páginas

    switch (currentPage) {
      case 'sobre':
        return {
          title: 'Sobre Nós - OrbitSender | Plataforma de Automação WhatsApp',
          description: 'Conheça a OrbitSender, plataforma de automação WhatsApp desenvolvida especialmente para afiliados. API própria, múltiplos números e IA integrada.',
          url: `${baseUrl}/#sobre`,
          image: socialImage,
        };
      case 'contato':
        return {
          title: 'Contato - OrbitSender | Fale Conosco',
          description: 'Entre em contato com a OrbitSender. Tire suas dúvidas sobre automação WhatsApp, API própria e como aumentar suas vendas com grupos.',
          url: `${baseUrl}/#contato`,
          image: socialImage,
        };
      case 'roadmap':
        return {
          title: 'Roadmap - OrbitSender | Próximas Funcionalidades',
          description: 'Veja o roadmap da OrbitSender e conheça as próximas funcionalidades que estamos desenvolvendo para melhorar sua experiência.',
          url: `${baseUrl}/#roadmap`,
          image: socialImage,
        };
      case 'privacidade':
        return {
          title: 'Política de Privacidade - OrbitSender',
          description: 'Política de privacidade da OrbitSender. Saiba como protegemos seus dados e informações pessoais.',
          url: `${baseUrl}/#privacidade`,
          image: socialImage,
        };
      case 'termos':
        return {
          title: 'Termos de Uso - OrbitSender',
          description: 'Termos de uso da plataforma OrbitSender. Leia nossos termos e condições de serviço.',
          url: `${baseUrl}/#termos`,
          image: socialImage,
        };
      case 'lgpd':
        return {
          title: 'LGPD - OrbitSender | Conformidade com Lei Geral de Proteção de Dados',
          description: 'Informações sobre conformidade LGPD da OrbitSender. Como protegemos seus dados pessoais conforme a legislação brasileira.',
          url: `${baseUrl}/#lgpd`,
          image: socialImage,
        };
      default:
        return {
          title: 'OrbitSender - Automação Grupos de WhatsApp para Afiliados | Entrega Garantida',
          description: 'Plataforma de automação WhatsApp para afiliados. API própria, múltiplos números, IA que aumenta cliques em até 40%. Entrega garantida de mensagens e uptime de 99,9%.',
          url: baseUrl,
          image: socialImage,
        };
    }
  };

  // Organization Schema (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OrbitSender",
    "url": "https://orbitsender.com",
    "logo": "https://orbitsender.com/logo.png",
    "description": "Plataforma de automação WhatsApp para afiliados com API própria, múltiplos números e IA integrada que aumenta cliques em até 40%.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-44-99763-965",
      "contactType": "customer service",
      "email": "contato@orbitsender.com",
      "availableLanguage": ["Portuguese"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/orbitsender",
      "https://twitter.com/orbitsender",
      "https://www.instagram.com/orbitsender",
      "https://www.facebook.com/orbitsender"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Adicionar Organization Schema ao head
  useEffect(() => {
    const scriptId = 'organization-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(organizationSchema);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 -z-10 bg-[#0A0E1A]">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M64 0H0v64" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>
      </div>

      <SEO {...getSEOProps()} />

      {/* Navbar — Static header */}
      {!isNotFound && (
        <header className="fixed z-50 top-0 left-0 right-0 flex justify-center pointer-events-none backdrop-blur-md bg-[#0A0E1A]/40">
          {/* Inner wrapper — always visible, no scroll effects */}
          <div className="pointer-events-auto w-full">
            {/* Inner content row */}
            <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl w-full">
              {/* Logo — always visible */}
              <div
                className="flex items-center gap-2 cursor-pointer group shrink-0"
                onClick={() => {
                  setCurrentPage('home');
                  lastHashRef.current = '';
                  isScrollingRef.current = true;
                  window.history.pushState(null, '', '#');
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(() => { isScrollingRef.current = false; }, 500);
                  }, 100);
                }}
              >
                <div className="border-gradient bg-white/10 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/15 transition-colors duration-200">
                  <Rocket className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-base font-semibold tracking-tight text-white">
                  Orbit<span className="text-indigo-400">Sender</span>
                </span>
              </div>

              {/* Desktop Nav links */}
              <nav className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Auth buttons — always visible */}
              <div className="hidden md:flex items-center gap-3 shrink-0">
                <a
                  href={`${APP_URL}/login`}
                  className="text-neutral-400 hover:text-white text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                >
                  Entrar
                </a>
                <a
                  href={`${APP_URL}/register`}
                  className="inline-flex items-center gap-1.5 border-gradient bg-white/5 backdrop-blur-xl rounded-full px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  Começar Agora
                  <ArrowRight size={13} />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-slate-300 hover:text-white p-2"
                  aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu — fixed below header */}
          {isMobileMenuOpen && (
            <div className="pointer-events-auto md:hidden fixed z-40 left-4 right-4 top-20 bg-[#0A0E1A]/80 backdrop-blur-lg border border-white/[0.08] rounded-2xl pb-4 shadow-2xl animate-fade-in-down">
              <div className="px-4 pt-3 pb-1 space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      handleAnchorClick(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-3 py-3 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/[0.04] rounded-xl transition-colors duration-200"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-3 border-t border-white/[0.06] mt-2 flex flex-col gap-2.5 px-1">
                  <a href={`${APP_URL}/login`} className="w-full text-center text-neutral-400 hover:text-white py-2 text-sm font-medium transition-colors duration-200">
                    Entrar
                  </a>
                  <a href={`${APP_URL}/register`} className="w-full inline-flex justify-center rounded-full bg-white text-neutral-900 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-all duration-200">
                    Começar Agora
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>
      )}

      {/* Main Content */}
      <main id="main-content" className={`${isNotFound ? '' : 'pt-20'}`} role="main">
        {isNotFound ? (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-white text-xl">Carregando...</div></div>}>
            <NotFound />
          </Suspense>
        ) : (
          <>
            {currentPage === 'home' && (
              <>
                <Hero />
                {/* <VideoTestimonials /> */}
                <WhyOrbit />
                <Differentiators />
                <Features />
                <Testimonials />
                <Pricing />
                <FAQ />
                <CTA />
              </>
            )}
            <Suspense fallback={<div className="min-h-screen" />}>
              {currentPage === 'sobre' && <About />}
              {currentPage === 'contato' && <Contact />}
              {currentPage === 'roadmap' && <Roadmap />}
              {currentPage === 'privacidade' && <Privacy />}
              {currentPage === 'termos' && <Terms />}
              {currentPage === 'lgpd' && <LGPD />}
            </Suspense>
          </>
        )}
      </main>

      {/* Footer - não mostra na página 404 */}
      {!isNotFound && (
        <footer className="bg-[#0A0E1A] pt-12 pb-8 border-t border-white/[0.06]" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="border-gradient bg-white/10 w-8 h-8 rounded-full flex items-center justify-center">
                    <Rocket className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-base font-semibold text-white tracking-tight">Orbit<span className="text-indigo-400">Sender</span></span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  A única plataforma de envio em massa que combina API própria, múltiplos números por conta e inteligência artificial.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border-gradient bg-white/5 text-emerald-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                    LGPD Compliant
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border-gradient bg-white/5 text-indigo-400 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block"></span>
                    99.9% Uptime
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-6">Produto</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="#funcionalidades" onClick={(e) => handleAnchorClick(e, '#funcionalidades')} className="hover:text-indigo-400 transition-colors">Funcionalidades</a></li>
                  <li><a href="#diferenciais" onClick={(e) => handleAnchorClick(e, '#diferenciais')} className="hover:text-indigo-400 transition-colors">Diferenciais</a></li>
                  <li><a href="#precos" onClick={(e) => handleAnchorClick(e, '#precos')} className="hover:text-indigo-400 transition-colors">Preços</a></li>
                  <li><a href="#roadmap" onClick={(e) => handleAnchorClick(e, '#roadmap')} className="hover:text-indigo-400 transition-colors">Roadmap</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-6">Empresa</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="#sobre" onClick={(e) => handleAnchorClick(e, '#sobre')} className="hover:text-indigo-400 transition-colors">Sobre Nós</a></li>
                  <li><a href="#contato" onClick={(e) => handleAnchorClick(e, '#contato')} className="hover:text-indigo-400 transition-colors">Contato</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-6">Suporte</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li><a href="/docs" className="hover:text-indigo-400 transition-colors">Documentação</a></li>
                  <li><a href={`${APP_URL}/help`} className="hover:text-indigo-400 transition-colors">Central de Ajuda</a></li>
                  <li><a href={`${APP_URL}/status`} className="hover:text-indigo-400 transition-colors">Status do Sistema</a></li>
                  <li><a href="#termos" onClick={(e) => handleAnchorClick(e, '#termos')} className="hover:text-indigo-400 transition-colors">Termos de Uso</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
              <p>© 2025 OrbitSender. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#privacidade" onClick={(e) => handleAnchorClick(e, '#privacidade')} className="text-slate-400 hover:text-white transition-colors">Privacidade</a>
                <a href="#termos" onClick={(e) => handleAnchorClick(e, '#termos')} className="text-slate-400 hover:text-white transition-colors">Termos</a>
                <a href="#lgpd" onClick={(e) => handleAnchorClick(e, '#lgpd')} className="text-slate-400 hover:text-white transition-colors">LGPD</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}