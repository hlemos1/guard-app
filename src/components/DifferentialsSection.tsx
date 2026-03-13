import { ShieldCheck, Hand, Shirt, Beaker, Layers, Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const DIFFERENTIALS = [
  {
    icon: Beaker,
    title: "Tatame Hygiene Protocol",
    description:
      "Protocolo anti-bacteriano desenvolvido com profissionais de saude. Combate dermatofitose, impetigo e micoses — os inimigos invisiveis do tatame.",
    accent: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-500/10 hover:border-emerald-500/20",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    span: "sm:col-span-2",
  },
  {
    icon: Hand,
    title: "Finger Tape Pro",
    description:
      "Tapes articulares de alta performance que nao descolam com suor. Aderencia 3x superior a tapes de farmacia. Testado em sessoes de 2h+.",
    accent: "from-blue-500/10 to-blue-500/5",
    border: "border-blue-500/10 hover:border-blue-500/20",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    span: "",
  },
  {
    icon: Shirt,
    title: "Rash Guards IBJJF/CBJJ",
    description:
      "100% conforme regras IBJJF e CBJJ. Sem risco de desclassificacao. Costuras planas anti-irritacao.",
    accent: "from-purple-500/10 to-purple-500/5",
    border: "border-purple-500/10 hover:border-purple-500/20",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    span: "",
  },
  {
    icon: Layers,
    title: "Gramatura Certificada",
    description:
      "Cada kimono tem gramatura testada e documentada. Voce sabe exatamente o que esta vestindo — sem surpresas.",
    accent: "from-orange-500/10 to-orange-500/5",
    border: "border-orange-500/10 hover:border-orange-500/20",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "Suporte Articular Tecnico",
    description:
      "Joelheiras, cotoveleiras e tornozeleiras desenvolvidas para o range de movimento do grappling.",
    accent: "from-gold/10 to-gold/5",
    border: "border-gold/10 hover:border-gold/20",
    iconColor: "text-gold",
    iconBg: "bg-gold/10",
    span: "",
  },
  {
    icon: Zap,
    title: "Manga Longa vs Curta",
    description:
      "Manga longa protege contra queimaduras de tatame, bacterias e grip. Manga curta libera mobilidade no no-gi. Ambas com a mesma tecnologia.",
    accent: "from-rose-500/10 to-rose-500/5",
    border: "border-rose-500/10 hover:border-rose-500/20",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    span: "sm:col-span-2",
  },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-28 lg:py-36 relative">
      <div className="absolute inset-0 tatame-grid opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-[11px] text-gold font-semibold tracking-[0.3em] uppercase">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4">
            Vantagem Tecnica no Tatame
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-5" />
          <p className="text-white/35 max-w-lg mx-auto leading-relaxed text-sm">
            Cada produto resolve um problema real. Nao vendemos marketing — vendemos protecao, performance e longevidade.
          </p>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <FadeIn key={i} delay={i * 0.08} className={diff.span}>
                <div className={`rounded-2xl border bg-gradient-to-br ${diff.accent} ${diff.border} p-6 transition-all duration-300 hover:scale-[1.01] relative overflow-hidden h-full`}>
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-[0.03]">
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M80 0L0 80" stroke="currentColor" strokeWidth="0.5" />
                      <path d="M80 20L20 80" stroke="currentColor" strokeWidth="0.5" />
                      <path d="M80 40L40 80" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <div className="flex items-start gap-4 relative">
                    <div className={`shrink-0 h-11 w-11 rounded-xl ${diff.iconBg} flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${diff.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-2">{diff.title}</h3>
                      <p className="text-xs text-white/35 leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
