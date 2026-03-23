import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export default function SEO({
  title = 'OrbitSender - Automação Grupos de WhatsApp para Afiliados | Entrega Garantida',
  description = 'Plataforma de automação WhatsApp para afiliados. API própria, múltiplos números, IA que aumenta cliques em até 40%. Entrega garantida de mensagens e uptime de 99,9%.',
  keywords = 'automação whatsapp, envio em massa whatsapp, afiliados, grupos whatsapp, api whatsapp, automação marketing, campanhas whatsapp, orbit sender',
  image = 'https://orbitsender.com/imagemsocial.png',
  url = 'https://orbitsender.com',
  type = 'website',
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    // Atualizar título
    document.title = title;

    // Meta tags básicas
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');
    updateMetaTag('author', 'OrbitSender');
    updateMetaTag('publisher', 'OrbitSender');

    // Canonical URL
    updateLinkTag('canonical', url);

    // Open Graph / WhatsApp - ORDEM É IMPORTANTE!
    // Primeiro as propriedades básicas
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    // Depois a imagem (DEVE vir depois das propriedades básicas)
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:image:secure_url', image, 'property');
    updateMetaTag('og:image:type', 'image/png', 'property');
    updateMetaTag('og:image:width', '2554', 'property');
    updateMetaTag('og:image:height', '1358', 'property');
    updateMetaTag('og:image:alt', title, 'property');
    // Por último as outras propriedades
    updateMetaTag('og:site_name', 'OrbitSender', 'property');
    updateMetaTag('og:locale', 'pt_BR', 'property');

    // Twitter Cards
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@orbitsender');
    updateMetaTag('twitter:creator', '@orbitsender');

    // Preconnect e DNS Prefetch
    addPreconnect('https://fonts.googleapis.com');
    addPreconnect('https://fonts.gstatic.com', 'crossorigin');
    addDNSPrefetch('https://www.google-analytics.com');
  }, [title, description, keywords, image, url, type, noindex]);

  function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
    let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  }

  function updateLinkTag(rel: string, href: string) {
    let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      document.head.appendChild(element);
    }

    element.setAttribute('href', href);
  }

  function addPreconnect(url: string, crossorigin?: string) {
    let element = document.querySelector(`link[rel="preconnect"][href="${url}"]`) as HTMLLinkElement;

    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'preconnect');
      element.setAttribute('href', url);
      if (crossorigin) {
        element.setAttribute('crossorigin', crossorigin);
      }
      document.head.appendChild(element);
    }
  }

  function addDNSPrefetch(url: string) {
    let element = document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`) as HTMLLinkElement;

    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', 'dns-prefetch');
      element.setAttribute('href', url);
      document.head.appendChild(element);
    }
  }

  return null;
}

