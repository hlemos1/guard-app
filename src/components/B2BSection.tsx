import { Package, Repeat, Users, TrendingUp, Check, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const PLAN_FEATURES = [
  "Lote mensal de brindes customizados com a logo da academia",
  "Mix rotativo: chaveiros, porta-copos, pins, mini-trofeus",
  "Brindes especiais para graduacoes e eventos internos",
  "Kit welcome para alunos novos (primeiros 30 dias)",
  "Design exclusivo — nenhuma outra academia tera igual",
  "Dashboard de acompanhamento de entregas",
];

const METRICS = [
  { icon: Users, value: "+35%", label: "Retencao de alunos com programa de brindes" },
  { icon: TrendingUp, value: "3x", label: "ROI medio em fidelizacao vs custo do lote" },
  { icon: Repeat, value: "-22%", label: "Reducao no churn em academias parceiras" },
];

export default function B2BSection() {
  return (
    <section id="b2b" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.025] rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-5 py-2 mb-6">
            <Package className="h-3.5 w-3.5 text-gold" />
            <span className="text-[11px] text-gold-light font-semibold tracking-[0.2em] uppercase">
              Programa B2B
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Assinatura para Academias
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-5" />
          <p className="text-white/35 max-w-lg mx-auto leading-relaxed text-sm">
            Lotes recorrentes de brindes customizados. Seu aluno veste a identidade da academia.
            Seu mestre constroi lealdade sem esforco.
          </p>
        </FadeIn>

        <FadeIn className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-gold/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden relative">
            <svg className="absolute -right-10 -top-10 w-40 h-40 text-gold/[0.03]" viewBox="0 0 80 96" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 4L8 20v28c0 22 13.5 42.5 32 48 18.5-5.5 32-26 32-48V20L40 4z" />
            </svg>

            <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border-b border-gold/10 px-8 py-7">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Parceiro GUARD</h3>
                  <p className="text-sm text-white/35 mt-1">Lotes mensais para sua academia</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gold/60 font-medium tracking-wider uppercase">A partir de</span>
                  <p className="text-2xl font-extrabold text-gold mt-0.5">Sob consulta</p>
                </div>
              </div>
            </div>

            <div className="px-8 py-7 space-y-3.5">
              {PLAN_FEATURES.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 h-5 w-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-gold" />
                  </div>
                  <span className="text-sm text-white/50 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="px-8 pb-8">
              <a
                href="#contato"
                className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gold text-black font-bold text-sm tracking-wide hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                Quero ser Parceiro
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-center text-[11px] text-white/20 mt-3">
                Sem fidelidade. Cancele quando quiser.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-3 mt-14">
          {METRICS.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="glass rounded-xl p-6 text-center relative overflow-hidden h-full">
                  <span className="absolute top-1 right-3 text-[48px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
                    {metric.value}
                  </span>
                  <Icon className="h-5 w-5 text-gold mx-auto mb-3" />
                  <p className="text-2xl font-extrabold text-white">{metric.value}</p>
                  <p className="text-[11px] text-white/30 mt-1.5 leading-relaxed">{metric.label}</p>
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
