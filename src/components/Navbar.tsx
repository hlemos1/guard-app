import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Origem", href: "#origem" },
  { label: "Produtos 3D", href: "#3d" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "B2B", href: "#b2b" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <Shield className="h-7 w-7 text-gold" />
          <span className="text-xl font-extrabold tracking-[0.2em] text-white group-hover:text-gold-light transition-colors">
            GUARD
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-gold-light transition-colors font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#b2b"
            className="ml-2 px-5 py-2 rounded-lg bg-gold/10 border border-gold/30 text-gold-light text-sm font-semibold hover:bg-gold/20 hover:border-gold/50 transition-all"
          >
            Seja Parceiro
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/70 hover:text-white transition-colors"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-white/70 hover:text-gold-light transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#b2b"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-5 py-2.5 rounded-lg bg-gold/10 border border-gold/30 text-gold-light text-sm font-semibold"
          >
            Seja Parceiro
          </a>
        </div>
      )}
    </nav>
  );
}
