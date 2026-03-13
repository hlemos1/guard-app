import { Shield, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden tatame-grid">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Shield icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Shield className="h-20 w-20 text-gold/80" strokeWidth={1.2} />
            <div className="absolute inset-0 h-20 w-20 bg-gold/10 blur-2xl rounded-full" />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 mb-8">
          <div className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs text-gold-light font-medium tracking-wider uppercase">
            Curadoria de Faixas-Pretas
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
          <span className="text-white">Curadoria Tecnica</span>
          <br />
          <span className="text-gold-gradient">para Guerreiros</span>
        </h1>

        {/* Sub */}
        <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Equipamentos validados por Black Belts, da fabrica ate o seu tatame.
          <br className="hidden sm:block" />
          O escudo do atleta contra o basico.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#b2b"
            className="px-8 py-3.5 rounded-xl bg-gold text-black font-bold text-sm tracking-wide hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/20"
          >
            Seja um Parceiro B2B
          </a>
          <a
            href="#origem"
            className="px-8 py-3.5 rounded-xl border border-white/10 text-white/70 font-medium text-sm hover:border-white/25 hover:text-white transition-all"
          >
            Conheca a Curadoria
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-white/20" />
      </div>
    </section>
  );
}
