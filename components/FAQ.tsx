import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  // FAQPage Schema (JSON-LD)
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
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
    <section id="faq" className="py-20 bg-[#0F172A]" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 scroll-reveal">
          <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold mb-4"><span className="gradient-text-static">Perguntas</span> Frequentes</h2>
          <p className="text-slate-400 mt-4">
            Tire suas dúvidas sobre automação WhatsApp, envio em massa e como a OrbitSender pode ajudar você a escalar seus grupos.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <article key={index} className="border border-slate-800 rounded-xl bg-slate-900/50 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-800/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                {openIndex === index ? <ChevronUp className="text-indigo-400" aria-hidden="true" /> : <ChevronDown className="text-slate-500" aria-hidden="true" />}
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                aria-hidden={openIndex !== index}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50">
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