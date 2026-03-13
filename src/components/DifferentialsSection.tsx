import { ShieldCheck, Hand, Shirt, Beaker, Layers, Zap } from "lucide-react";

const DIFFERENTIALS = [
  {
    icon: Beaker,
    title: "Tatame Hygiene Protocol",
    description:
      "Protocolo anti-bacteriano desenvolvido com profissionais de saude. Combate dermatofitose, impetigo e micoses — os inimigos invisiveis do tatame.",
    accent: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-500/10 hover:border-emerald-500/20",
    iconColor: "text-emerald-400",
    span: "sm:col-span-2",
  },
  {
    icon: Hand,
    title: "Finger Tape Pro",
    description:
      "Tapes articulares de alta performance que nao descolam com suor. Aderencia 3x superior a tapes de farmacia. Testado em sessoes de 2h+ de sparring.",
    accent: "from-blue-500/10 to-blue-500/5",
    border: "border-blue-500/10 hover:border-blue-500/20",
    iconColor: "text-blue-400",
    span: "",
  },
  {
    icon: Shirt,
    title: "Rash Guards IBJJF/CBJJ",
    description:
      "Rash guards que seguem 100% as regras da IBJJF e CBJJ. Sem risco de desclassificacao. Costuras planas que nao irritam a pele.",
    accent: "from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/10 hover:border-purple-500/20",
    iconColor: "text-purple-400",
    span: "",
  },
  {
    icon: Layers,
    title: "Gramatura Certificada",
    description:
      "Cada kimono tem gramatura testada e documentada. Voce sabe exatamente o que esta vestindo — sem surpresas no peso ou na durabilidade.",
    accent: "from-orange-500/10 to-orange-500/5",
    border: "border-orange-500/10 hover:border-orange-500/20",
    iconColor: "text-orange-400",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Suporte Articular Tecnico",
    description:
      "Linha completa de protecao articular — joelheiras, cotoveleiras e tornozeleiras desenvolvidas para o range de movimento do grappling.",
    accent: "from-gold/10 to-gold/5",
    border: "border-gold/10 hover:border-gold/20",
    iconColor: "text-gold",
    span: "",
  },
  {
    icon: Zap,
    title: "Manga Longa vs Curta",
    description:
      "Manga longa protege contra queimaduras de tatame, bacterias por contato e grip do oponente. Manga curta libera mobilidade no no-gi. Oferecemos ambas com a mesma tecnologia.",
    accent: "from-rose-500/10 to-rose-500/5",
    border: "border-rose-500/10 hover:border-rose-500/20",
    iconColor: "text-rose-400",
    span: "sm:col-span-2",
  },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 tatame-grid relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <span className="text-xs text-gold font-semibold tracking-[0.25em] uppercase">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
            Vantagem Tecnica no Tatame
          </h2>
          <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
            Cada produto resolve um problema real. Nao vendemos marketing — vendemos protecao, performance e longevidade.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <div
                key={i}
                className={`fade-in rounded-2xl border bg-gradient-to-br ${diff.accent} ${diff.border} p-6 transition-all duration-300 hover:scale-[1.01] ${diff.span}`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-xl bg-black/30 flex items-center justify-center">
                    <Icon className={`h-5 w-5 ${diff.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2">{diff.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{diff.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
