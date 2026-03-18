# Guard

![CI](https://github.com/institutoveigacabral-maker/guard-app/actions/workflows/ci.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Landing page da **Guard**, marca de equipamentos e acessorios para artes marciais com curadoria de faixas-pretas. Foco em B2B (academias), produtos com impressao 3D, higiene e suporte articular.

## Stack Tecnica

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 18 |
| Linguagem | TypeScript |
| Build | Vite 5 |
| Estilizacao | Tailwind CSS 3 |
| Icones | Lucide React |
| Utilitarios | clsx |
| Linting | ESLint 9 + typescript-eslint |

## Funcionalidades

- **Hero Section** -- apresentacao principal da marca com identidade visual escura e premium
- **Storytelling** -- narrativa da origem e filosofia da Guard
- **Catalogo de Produtos 3D** -- exibicao de produtos com visual imersivo
- **Diferenciais** -- destaque dos pilares competitivos (curadoria, impressao 3D, higiene, suporte articular)
- **Secao B2B** -- proposta de valor direcionada a academias e operadores
- **Animacoes de entrada** -- componente FadeIn para transicoes suaves entre secoes
- **Design responsivo** -- otimizado para mobile e desktop

## Pre-requisitos

- Node.js 18+
- npm, yarn ou pnpm

## Setup Local

```bash
git clone https://github.com/institutoveigacabral-maker/guard-app.git
cd guard-app
npm install
npm run dev
```

A aplicacao estara disponivel em `http://localhost:5173`.

## Scripts Disponiveis

| Comando | Descricao |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila TypeScript e gera build de producao |
| `npm run lint` | Executa o ESLint no projeto |
| `npm run preview` | Serve o build de producao localmente |

## Arquitetura

```
src/
├── components/
│   ├── B2BSection.tsx           # Secao para academias e parceiros
│   ├── DifferentialsSection.tsx # Diferenciais competitivos
│   ├── FadeIn.tsx               # Componente de animacao de entrada
│   ├── Footer.tsx               # Rodape com links e contato
│   ├── HeroSection.tsx          # Banner principal
│   ├── Navbar.tsx               # Barra de navegacao
│   ├── Products3DSection.tsx    # Catalogo de produtos
│   └── StorytellingSection.tsx  # Historia da marca
├── hooks/                       # Custom hooks
├── App.tsx                      # Composicao das secoes
├── main.tsx                     # Entry point
└── index.css                    # Estilos globais + Tailwind
```

A aplicacao segue o padrao de Single Page Application (SPA) com secoes compostas no `App.tsx`. Cada secao e um componente isolado e independente.

## Deploy

Build de producao:

```bash
npm run build
```

O diretorio `dist/` gerado contem arquivos estaticos prontos para deploy em qualquer servico de hospedagem (Vercel, Netlify, AWS S3 + CloudFront, etc.).

Para preview local do build:

```bash
npm run preview
```

## Licenca

MIT -- ver [LICENSE](LICENSE).
