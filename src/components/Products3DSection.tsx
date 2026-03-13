import { Printer, Key, Trophy, Gift, Coffee } from "lucide-react";

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
    <section id="3d" className="py-24 lg:py-32 relative">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 mb-6">
            <Printer className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs text-gold-light font-medium tracking-wider uppercase">
              Impressao 3D
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Identidade em 3D: Fortaleca sua Academia
          </h2>
          <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
            Onde o aluno ve um brinde, o mestre ve um simbolo de lealdade.
            Produtos personalizados que criam pertencimento e reduzem churn.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={i}
                className="fade-in glass rounded-2xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              >
                {product.tag && (
                  <span className="absolute top-4 right-4 rounded-full bg-gold/15 border border-gold/30 px-2.5 py-0.5 text-[10px] text-gold-light font-semibold tracking-wide">
                    {product.tag}
                  </span>
                )}

                {/* Placeholder visual */}
                <div className="h-32 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-5 group-hover:border-gold/10 transition-colors">
                  <Icon className="h-10 w-10 text-white/10 group-hover:text-gold/30 transition-colors" />
                </div>

                <h3 className="text-sm font-bold text-white mb-2">{product.title}</h3>
                <p className="text-xs text-white/35 leading-relaxed">{product.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in">
          <a
            href="#b2b"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:border-gold/30 hover:text-gold-light transition-all"
          >
            <Printer className="h-4 w-4" />
            Solicitar catalogo completo
          </a>
        </div>
      </div>
    </section>
  );
}
