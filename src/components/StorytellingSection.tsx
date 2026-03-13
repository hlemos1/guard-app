import { Globe, Award, Microscope } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const PILLARS = [
  {
    icon: Globe,
    number: "01",
    title: "Origem Global",
    description:
      "Viajamos ate as fontes globais de producao para buscar o trancado perfeito e a lycra que nao laceia. Cada material e rastreado da fabrica ate o tatame.",
  },
  {
    icon: Award,
    number: "02",
    title: "Crivo dos Mestres",
    description:
      "Nossa curadoria nao e feita por algoritmos, mas por Mestres Faixas-Pretas. Cada costura e gramatura de kimono passou pelo teste de quem entende o que e uma pegada de verdade.",
  },
  {
    icon: Microscope,
    number: "03",
    title: "Ciencia do Combate",
    description:
      "Cuidamos do atleta dos males invisiveis — higiene e bacterias — ate o suporte articular tecnico, garantindo longevidade no esporte.",
  },
];

export default function StorytellingSection() {
  return (
    <section id="origem" className="py-28 lg:py-36 relative">
      <div className="absolute left-1/2 top-0 w-px h-20 bg-gradient-to-b from-transparent to-gold/20" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-20">
          <span className="text-[11px] text-gold font-semibold tracking-[0.3em] uppercase">
            A Origem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-5">
            A Ciencia por tras da Armadura
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-5" />
          <p className="text-white/35 max-w-lg mx-auto leading-relaxed text-sm">
            Nao aceitamos o basico. Cada produto GUARD e o resultado de uma busca obsessiva
            por qualidade, testada por quem tem o corpo calejado de anos de treino.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="glass rounded-2xl p-7 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 h-full">
                  <span className="absolute -top-2 -right-2 text-[100px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
                    {pillar.number}
                  </span>
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/40 transition-all" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <span className="text-[11px] text-gold/40 font-mono font-bold">{pillar.number}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-3">{pillar.title}</h3>
                    <p className="text-[13px] text-white/35 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-20 text-center relative">
          <svg className="absolute left-1/2 -translate-x-1/2 -top-4 w-8 h-8 text-gold/10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <blockquote className="text-lg sm:text-xl text-white/25 font-light italic max-w-2xl mx-auto leading-relaxed pt-6">
            Onde outros vendem kimono, nos entregamos uma armadura.
            Cada fio passou pelo crivo de quem ja sangrou no tatame.
          </blockquote>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
