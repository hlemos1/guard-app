import { Package, Repeat, Users, TrendingUp, Check } from "lucide-react";

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
    <section id="b2b" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.015] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 mb-6">
            <Package className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs text-gold-light font-medium tracking-wider uppercase">
              Programa B2B
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Assinatura Mensal para Academias
          </h2>
          <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
            Lotes recorrentes de brindes customizados. Seu aluno veste a identidade da academia.
            Seu mestre constroi lealdade sem esforco.
          </p>
        </div>

        {/* Main card */}
        <div className="max-w-2xl mx-auto fade-in">
          <div className="glass rounded-2xl overflow-hidden">
            {/* Card header */}
            <div className="bg-gradient-to-r from-gold/10 to-gold/5 border-b border-gold/10 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Parceiro GUARD</h3>
                  <p className="text-sm text-white/40 mt-1">Lotes mensais para sua academia</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gold-light font-medium">A partir de</span>
                  <p className="text-2xl font-extrabold text-gold">Sob consulta</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="px-8 py-6 space-y-3">
              {PLAN_FEATURES.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-white/60">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-8 pb-8">
              <a
                href="#contato"
                className="block w-full py-3.5 rounded-xl bg-gold text-black text-center font-bold text-sm tracking-wide hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                Quero ser Parceiro
              </a>
              <p className="text-center text-xs text-white/25 mt-3">
                Sem fidelidade. Cancele quando quiser.
              </p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid gap-5 sm:grid-cols-3 mt-12">
          {METRICS.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div key={i} className="fade-in glass rounded-xl p-6 text-center">
                <Icon className="h-6 w-6 text-gold mx-auto mb-3" />
                <p className="text-2xl font-extrabold text-white">{metric.value}</p>
                <p className="text-xs text-white/35 mt-1 leading-relaxed">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
