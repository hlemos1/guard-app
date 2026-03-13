import { Globe, Award, Microscope } from "lucide-react";

const PILLARS = [
  {
    icon: Globe,
    title: "Origem Global",
    description:
      "Viajamos ate as fontes globais de producao para buscar o trancado perfeito e a lycra que nao laceia. Cada material e rastreado da fabrica ate o tatame.",
  },
  {
    icon: Award,
    title: "Crivo dos Mestres",
    description:
      "Nossa curadoria nao e feita por algoritmos, mas por Mestres Faixas-Pretas. Cada costura e gramatura de kimono passou pelo teste de quem entende o que e uma pegada de verdade.",
  },
  {
    icon: Microscope,
    title: "Ciencia do Combate",
    description:
      "Cuidamos do atleta dos males invisiveis — higiene e bacterias — ate o suporte articular tecnico, garantindo longevidade no esporte.",
  },
];

export default function StorytellingSection() {
  return (
    <section id="origem" className="py-24 lg:py-32 relative kimono-texture">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in">
          <span className="text-xs text-gold font-semibold tracking-[0.25em] uppercase">
            A Origem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-4">
            A Ciencia por tras da Armadura
          </h2>
          <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
            Nao aceitamos o basico. Cada produto GUARD e o resultado de uma busca obsessiva
            por qualidade, testada por quem tem o corpo calejado de anos de treino.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="fade-in glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gold/10 mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center fade-in">
          <blockquote className="text-xl sm:text-2xl text-white/30 font-light italic max-w-3xl mx-auto leading-relaxed">
            "Onde outros vendem kimono, nos entregamos uma armadura.
            <br />
            Cada fio passou pelo crivo de quem ja sangrou no tatame."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
