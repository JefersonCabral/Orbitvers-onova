# 🚀 OrbitSender — Site Institucional

Site institucional da [OrbitSender](https://orbitsender.com) — plataforma de automação de WhatsApp para afiliados com API própria e IA integrada.

---

## 🛠️ Stack Técnica

- **React 19** + **TypeScript**
- **Vite 6** (build)
- **TailwindCSS v4**
- **Lucide React** (ícones)
- **OpenAI SDK** (IA para otimização de ofertas)
- **PostgreSQL** (banco de dados — apenas o `stats-server`)
- **Nginx** + **Docker** (produção)

---

## 📁 Estrutura do Projeto

```
orbitsender-site/
├── components/          # Componentes React da página
│   ├── Hero.tsx         # Seção principal / cabeçalho da página
│   ├── WhyOrbit.tsx     # Seção "Por que OrbitSender"
│   ├── Differentiators  # 13 diferenciais da plataforma
│   ├── Features.tsx     # Como funciona (4 passos)
│   ├── Testimonials.tsx # Depoimentos de clientes
│   ├── Pricing.tsx      # Preços e planos
│   ├── FAQ.tsx          # Perguntas frequentes
│   ├── CTA.tsx          # Call-to-action final
│   ├── Contact.tsx      # Página de contato
│   ├── About.tsx        # Página "Sobre nós"
│   ├── Roadmap.tsx      # Página de roadmap
│   ├── SEO.tsx          # Componente de meta tags SEO
│   ├── Stats.tsx        # Contador de stats em tempo real
│   ├── Privacy.tsx      # Política de privacidade
│   ├── Terms.tsx        # Termos de uso
│   ├── LGPD.tsx         # Página de conformidade LGPD
│   └── NotFound.tsx     # Página 404
├── src/
│   └── services/
│       └── statsService.ts  # Serviço que busca estatísticas públicas
├── public/              # Assets estáticos (imagens, favicon, sitemap, robots.txt)
├── App.tsx              # Componente raiz + roteamento + navbar + footer
├── index.css            # Estilos globais e utilitários
├── index.html           # HTML base (meta tags, fontes)
├── stats-server.js      # Servidor Node.js auxiliar que lê stats do banco
├── nginx.conf           # Configuração Nginx para produção
├── Dockerfile           # Docker do site + nginx
├── Dockerfile.stats     # Docker do servidor de stats
└── vite.config.ts       # Configuração do Vite
```

---

## ⚙️ Configuração do Ambiente

Copie o arquivo de exemplo e preencha com os valores reais:

```bash
cp .env.local.example .env.local
```

Variáveis disponíveis (ver `.env.local.example`):

| Variável | Descrição |
|---|---|
| `VITE_STATS_WEBHOOK_URL` | URL do webhook que retorna as estatísticas públicas (campanhas/mensagens enviadas) |
| `VITE_STATS_SERVER_URL` | URL alternativa do servidor de stats (opcional, sobrescreve o webhook) |
| `GEMINI_API_KEY` | Chave da API Gemini (se utilizada) |

> ⚠️ **Nunca suba o `.env.local` no GitHub.** Ele já está no `.gitignore`.

---

## 🚀 Rodando Localmente

**Pré-requisitos:** Node.js 18+

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.local.example .env.local
# Edite o .env.local com os valores corretos

# 3. Rodar o site
npm run dev

# (Opcional) Rodar também o servidor de stats
npm run dev:all
```

O site estará disponível em: `http://localhost:5173`

---

## 🏗️ Build de Produção

```bash
npm run build
```

Os arquivos ficam na pasta `dist/`.

---

## 🐳 Deploy com Docker

```bash
# Build da imagem do site
docker build -t orbitsender-site .

# Rodar o container
docker run -p 80:80 orbitsender-site
```

---

## 🔗 URLs do Sistema

| Ambiente | URL |
|---|---|
| Site institucional | `https://orbitsender.com` |
| App (login/registro) | `https://app.orbitsender.com` |

---

## 📌 Páginas e Rotas

| Rota | Descrição |
|---|---|
| `/` | Home (Hero, Diferenciais, Funcionalidades, Preços, FAQ, CTA) |
| `/#sobre` ou `/sobre` | Página Sobre Nós |
| `/#contato` ou `/contato` | Página de Contato |
| `/#roadmap` ou `/roadmap` | Roadmap de funcionalidades |
| `/#privacidade` ou `/privacidade` | Política de Privacidade |
| `/#termos` ou `/termos` | Termos de Uso |
| `/#lgpd` ou `/lgpd` | Conformidade LGPD |
| `/docs/` | Documentação (servida pelo Nginx via pasta `public/docs/`) |
