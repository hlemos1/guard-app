# GUARD App

> Landing page da Guard -- marca de equipamentos e acessorios para artes marciais

[![CI](https://github.com/institutoveigacabral-maker/guard-app/actions/workflows/ci.yml/badge.svg)](https://github.com/institutoveigacabral-maker/guard-app/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Estilizacao | Tailwind CSS 3 |
| Icones | Lucide React |
| Lint | ESLint 9 + typescript-eslint |

## Quick Start

```bash
git clone https://github.com/institutoveigacabral-maker/guard-app.git
cd guard-app
npm install
npm run dev
```

## Arquitetura

```
src/
  components/
    HeroSection.tsx             Banner principal
    StorytellingSection.tsx     Historia da marca
    Products3DSection.tsx       Catalogo de produtos
    DifferentialsSection.tsx    Diferenciais competitivos
    B2BSection.tsx              Secao para academias e parceiros
    FadeIn.tsx                  Componente de animacao de entrada
    Navbar.tsx                  Barra de navegacao
    Footer.tsx                  Rodape
  hooks/                        Custom hooks
  App.tsx                       Composicao das secoes
  main.tsx                      Entry point
  index.css                     Estilos globais + Tailwind
```

## Scripts

| Comando | Acao |
|---------|------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | TypeScript + Vite build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview do build |

## Status

| Item | Valor |
|------|-------|
| Fase | PROD-lite |
| Testes | Nenhum |
| CI | GitHub Actions |
| Deploy | Vercel (estatico) |

## Contribuindo

Consulte [CONTRIBUTING.md](CONTRIBUTING.md) para diretrizes de contribuicao.
