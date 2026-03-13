import { Printer, Key, Trophy, Gift, Coffee } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const PRODUCTS = [
  {
    icon: Key,
    title: "Chaveiros Mini-Kimono",
    description: "Replicas em miniatura do kimono da academia. Cada aluno carrega a identidade do time.",
    tag: "Mais vendido",
  },
  {
    icon: Coffee,
    title: "Porta-Copos Custom",
    description: "Logo da academia em relevo 3D. Presente funcional que fica na mesa do aluno todo dia.",
    tag: null,
  },
  {
    icon: Gift,
    title: "Brindes de Graduacao",
    description: "Miniaturas de faixa, escudos personalizados e pins exclusivos para cada graduacao.",
    tag: "Fidelizacao",
  },
  {
    icon: Trophy,
    title: "Trofeus Internos",
    description: "Trofeus customizados para campeonatos internos. Fortalece a cultura competitiva da academia.",
    tag: null,
  },
];

export default function Products3DSection() {
  return (
    <section id="3d" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 kimono-texture opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-5 py-2 mb-6">
            <Printer className="h-3.5 w-3.5 text-gold" />
            <span className="text-[11px] text-gold-light font-semibold tracking-[0.2em] uppercase">
              Impressao 3D
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Identidade em 3D
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-5" />
          <p className="text-white/35 max-w-lg mx-auto leading-relaxed text-sm">
            Onde o aluno ve um brinde, o mestre ve um simbolo de lealdade.
            Produtos personalizados que criam pertencimento e reduzem churn.
          </p>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 h-full">
                  {product.tag && (
                    <span className="absolute top-4 right-4 rounded-full bg-gold/15 border border-gold/30 px-2.5 py-0.5 text-[10px] text-gold-light font-semibold tracking-wide">
                      {product.tag}
                    </span>
                  )}
                  <div className="h-36 rounded-xl bg-white/[0.015] border border-white/[0.04] flex items-center justify-center mb-5 relative group-hover:border-gold/10 transition-colors overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full opacity-[0.04] group-hover:opacity-[0.08] transition-opacity" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="100,30 170,70 170,140 100,180 30,140 30,70" fill="none" stroke="#d4b94e" strokeWidth="0.8" />
                      <line x1="100" y1="30" x2="100" y2="180" stroke="#d4b94e" strokeWidth="0.4" opacity="0.5" />
                      <line x1="30" y1="70" x2="170" y2="140" stroke="#d4b94e" strokeWidth="0.4" opacity="0.5" />
                      <line x1="170" y1="70" x2="30" y2="140" stroke="#d4b94e" strokeWidth="0.4" opacity="0.5" />
                    </svg>
                    <Icon className="h-10 w-10 text-white/[0.07] group-hover:text-gold/20 transition-colors relative z-10" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-xs text-white/30 leading-relaxed">{product.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="text-center mt-12">
          <a
            href="#b2b"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white/60 text-sm font-medium hover:border-gold/30 hover:text-gold-light transition-all"
          >
            <Printer className="h-4 w-4" />
            Solicitar catalogo completo
          </a>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
