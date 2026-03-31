import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "O OrbitSender é ideal para afiliados que trabalham com grupos?",
    a: "Sim! Foi feito especialmente para afiliados que trabalham com grupos. Com múltiplos números, distribuição automática, entrega garantida de mensagens, uptime de 99,9% e IA que pode aumentar cliques em até 40%, você escala sua operação sem perder vendas."
  },
  {
    q: "O que acontece se um número cair durante o envio de ofertas?",
    a: "O fallback automático detecta e redireciona imediatamente para outro número. Suas ofertas continuam sendo enviadas sem interrupção. Zero perda de vendas."
  },
  {
    q: "Preciso ter vários celulares físicos para gerenciar muitos grupos?",
    a: "Não! Você pode usar nosso Celular Virtual, onde hospedamos o WhatsApp na nuvem. Ou conecte seus próprios números. Tudo em uma única conta."
  },
  {
    q: "Como organizo meus grupos?",
    a: "Você sincroniza seus grupos e organiza por segmentos (ex: 'Achadinhos Shopee', 'Ofertas Amazon'). Depois é só criar a oferta e enviar para os segmentos escolhidos."
  },
  {
    q: "A IA realmente aumenta cliques nas ofertas?",
    a: "Sim! A IA reescreve suas ofertas em 9 estilos diferentes (Persuasivo, Urgente, Humor, etc) e pode aumentar cliques nos links de afiliados em até 40%. Uma oferta simples vira uma mensagem que converte muito mais."
  },
  {
    q: "Posso usar no celular para enviar ofertas rapidamente?",
    a: "Sim! A interface funciona perfeitamente no celular, tablet e computador. Envie ofertas de qualquer lugar, a qualquer hora."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQPage Schema (JSON-LD)
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a }
      }))
    };

    const scriptId = 'faq-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);
  }, []);

  return (
    <section id="faq" className="py-14 sm:py-18 lg:py-24 bg-neutral-950" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — centered */}
        <div className="text-center mb-8 md:mb-12 scroll-reveal">
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            <span className="gradient-text-static">Perguntas</span> Frequentes
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-md mx-auto">
            Tire suas dúvidas sobre automação WhatsApp e como o OrbitSender pode ajudar você a escalar seus grupos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="border-gradient bg-white/[0.03] ring-1 ring-white/[0.06] rounded-2xl overflow-hidden scroll-reveal"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-white/[0.03] transition-colors duration-200 cursor-pointer"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-white text-sm pr-4 leading-snug">{faq.q}</span>
                <ChevronDown
                  className={`text-neutral-500 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-indigo-400' : ''}`}
                  size={16}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed border-t border-white/[0.05] pt-4">
                  {faq.a}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
