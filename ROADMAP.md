# GUARD — Roadmap Estrategico 2026-2027

> Curadoria Tecnica para Guerreiros
> Foco: E-commerce proprio + Ferramentas autorais + Esteira de producao

---

## Visao Geral da Esteira

```
FASE 1 (Q2 2026) — Fundacao
FASE 2 (Q3 2026) — Lancamento E-commerce + Primeiros Produtos
FASE 3 (Q4 2026) — Ferramentas Autorais + Escala B2B
FASE 4 (Q1 2027) — Expansao + Ecossistema Completo
FASE 5 (Q2-Q3 2027) — Inteligencia + Comunidade + Internacionalizacao
```

---

## PRODUTOS PRIORITARIOS — Esteira de Producao

### Tier 1 — Lancamento Imediato (MVP de receita)

| # | Produto | Tipo | Margem Est. | Complexidade | Canal |
|---|---------|------|------------|--------------|-------|
| 1 | **Finger Tape Pro** | Consumivel recorrente | 65-75% | Baixa | E-com + B2B |
| 2 | **Kit Higiene Tatame** (spray + toalha) | Consumivel recorrente | 60-70% | Baixa | E-com + B2B |
| 3 | **Chaveiros Mini-Kimono 3D** | Brinde customizado | 80%+ | Media (impressao) | B2B |
| 4 | **Rash Guard Manga Longa IBJJF** | Vestuario tecnico | 50-60% | Media (confeccao) | E-com |
| 5 | **Rash Guard Manga Curta No-Gi** | Vestuario tecnico | 50-60% | Media (confeccao) | E-com |

**Logica:** Consumiveis geram recorrencia. Finger tape e higiene sao compra mensal. Rash guards sao ticket medio alto. Chaveiros abrem porta B2B.

### Tier 2 — Consolidacao (Meses 3-6)

| # | Produto | Tipo | Margem Est. | Complexidade | Canal |
|---|---------|------|------------|--------------|-------|
| 6 | **Joelheira Grappling** | Suporte articular | 55-65% | Media | E-com |
| 7 | **Porta-Copos Custom 3D** | Brinde customizado | 80%+ | Media (impressao) | B2B |
| 8 | **Pins de Graduacao** | Brinde customizado | 85%+ | Baixa (impressao) | B2B |
| 9 | **Kimono A1-A4 Gramatura Certificada** | Vestuario tecnico | 45-55% | Alta (confeccao) | E-com |
| 10 | **Cotoveleira Grappling** | Suporte articular | 55-65% | Media | E-com |

### Tier 3 — Expansao (Meses 6-12)

| # | Produto | Tipo | Margem Est. | Complexidade | Canal |
|---|---------|------|------------|--------------|-------|
| 11 | **Trofeus Internos 3D** | Brinde premium | 75%+ | Alta (design) | B2B |
| 12 | **Kit Welcome Aluno Novo** | Bundle B2B | 70%+ | Media | B2B |
| 13 | **Tornozeleira Grappling** | Suporte articular | 55-65% | Media | E-com |
| 14 | **Faixa GUARD (todas graduacoes)** | Vestuario | 60-70% | Media | E-com |
| 15 | **Bolsa de Kimono Anti-Bacterial** | Acessorio | 55-65% | Media | E-com |
| 16 | **Mini-Trofeu Faixa 3D** (cada graduacao) | Brinde premium | 80%+ | Media (impressao) | B2B + E-com |

---

## FASE 1 — Fundacao (Abr-Jun 2026)

### E-commerce

- [ ] **Stack e-commerce:** Next.js 14 + Stripe + Supabase (ou Shopify Headless)
  - Decisao arquitetural: headless proprio vs Shopify Hydrogen
  - Se proprio: controle total, ferramentas autorais integradas, margem maior
  - Se Shopify: velocidade de lancamento, gateway pronto, mas vendor lock-in
- [ ] **Catalogo de produtos:** paginas de produto com specs tecnicos detalhados
  - Gramatura certificada (com selo/badge)
  - Compliance IBJJF/CBJJ (com selo)
  - Protocolo anti-bacteriano (com infografico)
- [ ] **Sistema de assinaturas B2B:** formulario de lead > pipeline CRM
- [ ] **Checkout otimizado:** PIX (desconto 5%), cartao, boleto
- [ ] **Dominio e branding:** guard.com.br ou guardbjj.com.br

### Ferramentas Autorais

- [ ] **GUARD Seal System** — sistema de selos/certificacoes proprio
  - Selo "Gramatura Verificada" (com QR code no produto)
  - Selo "IBJJF Compliant"
  - Selo "Tatame Hygiene Approved"
  - Cada produto recebe combinacao de selos
  - QR code leva a pagina de verificacao no site
- [ ] **Configurador 3D de Brindes** (ferramenta autoral principal)
  - Upload de logo da academia
  - Preview 3D do chaveiro/pin/trofeu customizado
  - Pedido direto pelo configurador
  - Stack: Three.js ou React Three Fiber

### Producao

- [ ] Validar fornecedores de finger tape (China via THALAMUS)
- [ ] Amostras de rash guard com 3 fabricas
- [ ] Setup impressora 3D para chaveiros (Bambu P1S ja disponivel)
- [ ] Desenvolver arquivo STL base para chaveiro mini-kimono
- [ ] Testar 5 materiais de impressao 3D (PLA, PETG, TPU, resina, nylon)
- [ ] Protocolo de teste de 48h de durabilidade documentado

### Infraestrutura

- [ ] Repositorio `guard-store` (e-commerce)
- [ ] Repositorio `guard-tools` (ferramentas autorais)
- [ ] CI/CD: GitHub Actions > Vercel
- [ ] Analytics: Plausible ou PostHog (privacy-first)
- [ ] Email transacional: Resend

---

## FASE 2 — Lancamento E-commerce + Primeiros Produtos (Jul-Set 2026)

### E-commerce

- [ ] **Lancamento loja** com Tier 1 completo (5 SKUs)
- [ ] **Sistema de reviews** com verificacao de compra
- [ ] **Blog tecnico GUARD** — conteudo autoral SEO
  - "Como escolher gramatura de kimono"
  - "Finger tape: farmacia vs performance"
  - "Dermatofitose no BJJ: guia completo de prevencao"
  - "Manga longa vs curta: quando usar cada uma"
- [ ] **Programa de afiliados** para atletas/influencers de BJJ
- [ ] **Integracao com marketplaces:** Mercado Livre, Amazon BR
- [ ] **Sistema de cupons** por academia parceira (B2B > E-com bridge)

### Ferramentas Autorais

- [ ] **GUARD Lab** — pagina interativa de specs tecnicos
  - Comparador de gramaturas (arraste slider, veja diferenca)
  - Mapa de zonas de protecao do corpo (clicavel)
  - Calculadora de tamanho (altura + peso > recomendacao)
- [ ] **Dashboard Parceiro B2B** v1
  - Login da academia
  - Historico de pedidos
  - Tracking de entregas
  - Catalogo de brindes disponiveis no mes
  - Metricas: qtd brindes entregues, estimativa de retencao
- [ ] **Gerador de Certificado de Graduacao** (ferramenta gratuita)
  - Academia gera certificado digital bonito para o aluno
  - Com branding sutil GUARD
  - Compartilhavel em redes sociais
  - Gera awareness + leads B2B

### Producao

- [ ] Primeiro lote de finger tape (1000 unidades)
- [ ] Primeiro lote de rash guards (200 unidades, 5 tamanhos x 2 modelos)
- [ ] Primeiros 50 chaveiros 3D para 3 academias piloto
- [ ] Embalagem GUARD com QR code dos selos
- [ ] Documentacao fotografica profissional de todos SKUs

---

## FASE 3 — Ferramentas Autorais + Escala B2B (Out-Dez 2026)

### E-commerce

- [ ] **Tier 2 completo** no catalogo (+5 SKUs, total 10)
- [ ] **Bundles inteligentes:**
  - "Kit Iniciante" (rash guard + tape + spray higiene)
  - "Kit Competidor" (rash guard IBJJF + joelheira + tape)
  - "Kit Mestre" (todos os itens + desconto)
- [ ] **Assinatura de consumiveis** — caixa mensal
  - Finger tape + spray higiene + toalha
  - Desconto 15% vs compra avulsa
  - Churn baixo (produto consumivel)
- [ ] **Wishlist + notificacao de restock**
- [ ] **Programa de pontos GUARD** (cada compra acumula)

### Ferramentas Autorais

- [ ] **GUARD Score** — sistema de rating autoral
  - Cada produto tem score em: Durabilidade, Conforto, Compliance, Protecao
  - Radar chart visual
  - Baseado nos testes de 48h + feedback dos mestres
  - Diferenciador vs concorrencia (ninguem faz isso)
- [ ] **Simulador de ROI B2B** (ferramenta de vendas)
  - Academia inputa: numero de alunos, churn atual, ticket medio
  - Ferramenta calcula: impacto estimado na retencao, ROI do programa de brindes
  - Gera PDF com proposta automatica
  - Lead capture integrado ao CRM
- [ ] **GUARD Academy** — plataforma de conteudo
  - Video-aulas curtas sobre cuidados com equipamento
  - Guias de higiene pos-treino
  - Conteudo para academias usarem com alunos
  - Branding GUARD sutil em todo material

### Producao

- [ ] Escalar impressao 3D: segunda impressora ou parceiro de producao
- [ ] Primeiro lote de kimonos (100 unidades, 4 tamanhos)
- [ ] Linha de suporte articular completa (joelheira + cotoveleira + tornozeleira)
- [ ] 10 academias parceiras ativas no programa B2B
- [ ] Sistema de controle de qualidade documentado

---

## FASE 4 — Expansao + Ecossistema Completo (Jan-Mar 2027)

### E-commerce

- [ ] **Tier 3 completo** no catalogo (16+ SKUs)
- [ ] **App mobile GUARD** (React Native / Expo)
  - Catalogo + compra
  - Scanner QR dos selos de autenticidade
  - Push notifications de restock e promocoes
  - Area do atleta (historico, pontos, graduacao)
- [ ] **GUARD Pro** — tier premium para atletas competidores
  - Acesso antecipado a novos produtos
  - Desconto permanente 10%
  - Produtos exclusivos de edicao limitada
- [ ] **Logistica otimizada:** fulfillment center ou parceiro 3PL
- [ ] **Internacionalizacao:** Portugal (via Grupo +351)

### Ferramentas Autorais

- [ ] **Configurador 3D v2** — kimono customizado
  - Escolha de gramatura, cor, patches, bordados
  - Preview 3D em tempo real
  - Pedido sob medida (premium)
- [ ] **GUARD Connect** — rede de academias parceiras
  - Mapa interativo de academias GUARD
  - Aluno de uma academia parceira ganha desconto em outra
  - Cross-promotion entre academias
  - Dados de network effect para pitch B2B
- [ ] **Dashboard B2B v2**
  - Analytics avancado: correlacao brindes vs retencao
  - Sugestoes automaticas de mix de brindes por perfil da academia
  - Gestao de estoque de brindes na academia
  - API para integracao com sistemas de gestao de academias

### Producao

- [ ] 30+ academias parceiras
- [ ] Linha completa de vestuario (gi + no-gi + casual)
- [ ] Parcerias com eventos IBJJF/CBJJ para patrocinio de brindes
- [ ] Segunda linha de impressao 3D (resina para detalhes finos)

---

## FASE 5 — Inteligencia + Comunidade + Internacional (Abr-Set 2027)

### E-commerce

- [ ] **AI Shopping Assistant** — chatbot tecnico
  - Recomenda produtos baseado no estilo de jogo (guard player vs passer)
  - Sugere tamanho baseado em medidas
  - Responde duvidas tecnicas sobre materiais
- [ ] **Marketplace B2B** — academias revendem na propria regiao
- [ ] **GUARD Exchange** — mercado de usados (economia circular)
  - Aluno vende kimono usado com selo GUARD de qualidade
  - Comissao de 10% para GUARD
  - Sustentabilidade como valor de marca
- [ ] **Expansao LATAM:** Paraguai (via Conexao LATAM), Argentina

### Ferramentas Autorais

- [ ] **GUARD Intelligence** — painel de dados do mercado BJJ
  - Tendencias de crescimento de academias por regiao
  - Dados anonimizados de consumo dos parceiros
  - Insights para academias planejarem expansao
  - Posiciona GUARD como autoridade no mercado
- [ ] **Gerador de Marca para Academias** (ferramenta gratuita premium)
  - Input: nome da academia, cores, estilo
  - Output: logo gerado por IA, paleta, mockups de brindes
  - Funil de conversao para B2B
- [ ] **GUARD API** — para integracao com apps de academias
  - Catalogo de produtos via API
  - Pedidos programaticos
  - Webhooks de status
  - Permite que sistemas de gestao de academias integrem GUARD nativamente

---

## Matriz de Prioridade — Ferramentas Autorais

```
IMPACTO
  ^
  |  GUARD Score    Configurador 3D    GUARD Intelligence
  |  Seal System    Dashboard B2B v2   GUARD API
  |
  |  Lab Specs      Simulador ROI      Gerador de Marca
  |  Cert Graduacao GUARD Academy      GUARD Connect
  |
  +-----------------------------------------> ESFORCO
       Baixo           Medio              Alto
```

### Sequencia recomendada:
1. **Seal System** (baixo esforco, alto impacto, diferenciador imediato)
2. **Configurador 3D de Brindes** (medio esforco, alto impacto, core do B2B)
3. **GUARD Lab** (baixo esforco, medio impacto, conteudo que vende)
4. **Certificado de Graduacao** (baixo esforco, medio impacto, lead gen)
5. **Dashboard B2B v1** (medio esforco, alto impacto, retencao de parceiros)
6. **GUARD Score** (medio esforco, alto impacto, ninguem tem)
7. **Simulador ROI** (medio esforco, medio impacto, ferramenta de vendas)
8. **GUARD Academy** (medio esforco, medio impacto, autoridade)

---

## Stack Tecnico Recomendado

### E-commerce (`guard-store`)
- **Framework:** Next.js 15 (App Router)
- **Pagamentos:** Stripe (internacional) + Mercado Pago (BR)
- **Database:** Supabase (Postgres + Auth + Storage)
- **CMS de produtos:** Payload CMS headless ou Sanity
- **Search:** Algolia ou Meilisearch
- **Email:** Resend + React Email
- **Analytics:** PostHog
- **Deploy:** Vercel

### Ferramentas Autorais (`guard-tools`)
- **Configurador 3D:** React Three Fiber + drei
- **Dashboard B2B:** Next.js + Recharts + Supabase RLS
- **Gerador de certificados:** Canvas API ou Puppeteer (server-side PDF)
- **GUARD Score:** D3.js (radar charts)
- **Blog/Academy:** MDX + Next.js

### Impressao 3D
- **Modelagem:** Blender + FreeCAD (parametrico)
- **Slicer:** Bambu Studio (P1S)
- **Materiais prioritarios:** PLA (prototipos), PETG (producao), resina (detalhes)
- **Automacao:** Scripts de fila de impressao

---

## KPIs por Fase

| Fase | Receita Mensal | SKUs Ativos | Academias B2B | NPS |
|------|---------------|-------------|---------------|-----|
| F1 | - | 0 (preparacao) | 0 (piloto) | - |
| F2 | R$ 15-30k | 5 | 3-5 | > 60 |
| F3 | R$ 50-80k | 10 | 10-15 | > 70 |
| F4 | R$ 120-200k | 16+ | 30+ | > 75 |
| F5 | R$ 300k+ | 25+ | 50+ | > 80 |

---

## Riscos e Mitigacoes

| Risco | Probabilidade | Impacto | Mitigacao |
|-------|--------------|---------|-----------|
| Fornecedor de tape falha na qualidade | Media | Alto | 2 fornecedores qualificados via THALAMUS |
| Impressao 3D nao escala | Media | Medio | Parceiro de producao como backup (fazenda de impressoras) |
| Kimono demora para certificar IBJJF | Alta | Medio | Lancar primeiro sem selo, certificar depois |
| B2B tem ciclo de venda longo | Alta | Alto | Ferramenta gratuita (certificado) como porta de entrada |
| Concorrencia copia Seal System | Baixa | Baixo | First mover + rede de academias como moat |

---

*Documento vivo. Ultima atualizacao: 2026-03-14*
*Autor: Henrique Lemos + Claude*
