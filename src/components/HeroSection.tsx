import { ArrowDown, Shield } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 tatame-grid opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.02] rounded-full blur-[80px]" />

      {/* Decorative lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#d4b94e" strokeWidth="1" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#d4b94e" strokeWidth="1" />
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#d4b94e" strokeWidth="1" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#d4b94e" strokeWidth="1" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Shield SVG — custom detailed version */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_30px_rgba(184,150,12,0.15)]">
              <path d="M40 4L8 20v28c0 22 13.5 42.5 32 48 18.5-5.5 32-26 32-48V20L40 4z" fill="none" stroke="#b8960c" strokeWidth="1.5" opacity="0.6" />
              <path d="M40 14L16 26v22c0 17.5 10.5 34 24 38.5 13.5-4.5 24-21 24-38.5V26L40 14z" fill="none" stroke="#d4b94e" strokeWidth="0.8" opacity="0.3" />
              <path d="M40 14L16 26v22c0 17.5 10.5 34 24 38.5 13.5-4.5 24-21 24-38.5V26L40 14z" fill="url(#shieldGrad)" opacity="0.08" />
              {/* Inner G */}
              <text x="40" y="58" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="28" fill="#d4b94e" opacity="0.9">G</text>
              <defs>
                <linearGradient id="shieldGrad" x1="40" y1="14" x2="40" y2="86">
                  <stop stopColor="#d4b94e" />
                  <stop offset="1" stopColor="#b8960c" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-5 py-2 mb-8">
          <div className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[11px] text-gold-light font-semibold tracking-[0.2em] uppercase">
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
        <p className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Equipamentos validados por Black Belts, da fabrica ate o seu tatame.
          <br className="hidden sm:block" />
          O escudo do atleta contra o basico.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#b2b"
            className="group px-8 py-3.5 rounded-xl bg-gold text-black font-bold text-sm tracking-wide hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/20 flex items-center gap-2"
          >
            Seja um Parceiro B2B
            <Shield className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#origem"
            className="px-8 py-3.5 rounded-xl border border-white/10 text-white/60 font-medium text-sm hover:border-white/25 hover:text-white transition-all"
          >
            Conheca a Curadoria
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12">
          {[
            { value: "12+", label: "Mestres na curadoria" },
            { value: "48h", label: "Teste de durabilidade" },
            { value: "100%", label: "Compliance IBJJF" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xl sm:text-2xl font-extrabold text-gold/80">{stat.value}</p>
              <p className="text-[10px] sm:text-[11px] text-white/25 mt-0.5 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] text-white/15 tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 text-white/15 animate-bounce" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
