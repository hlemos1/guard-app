import { useState, type FormEvent } from "react";
import { Shield, Instagram, Send, Check, Loader2 } from "lucide-react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — replace with real endpoint later
    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  }

  return (
    <footer id="contato" className="border-t border-white/5 bg-black/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Brand + Links */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Shield className="h-6 w-6 text-gold" />
              <span className="text-lg font-extrabold tracking-[0.2em] text-white">GUARD</span>
            </div>

            <p className="text-sm text-white/30 max-w-sm leading-relaxed mb-8">
              Curadoria tecnica de equipamentos de artes marciais.
              Validado por Black Belts, da fabrica ate o seu tatame.
            </p>

            <div className="space-y-2 mb-8">
              <a href="#origem" className="block text-sm text-white/40 hover:text-gold-light transition-colors">
                A Origem
              </a>
              <a href="#3d" className="block text-sm text-white/40 hover:text-gold-light transition-colors">
                Produtos 3D
              </a>
              <a href="#diferenciais" className="block text-sm text-white/40 hover:text-gold-light transition-colors">
                Diferenciais
              </a>
              <a href="#b2b" className="block text-sm text-white/40 hover:text-gold-light transition-colors">
                Programa B2B
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/20 transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: Contact form */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Fale com a GUARD</h3>
            <p className="text-sm text-white/30 mb-6">
              Quer ser parceiro B2B ou tem alguma pergunta? Manda pra gente.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                required
                className="w-full h-10 rounded-lg bg-white/[0.03] border border-white/10 px-4 text-sm text-white placeholder:text-white/20 outline-none focus:border-gold/30 transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu email"
                required
                className="w-full h-10 rounded-lg bg-white/[0.03] border border-white/10 px-4 text-sm text-white placeholder:text-white/20 outline-none focus:border-gold/30 transition-colors"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mensagem"
                rows={3}
                required
                className="w-full rounded-lg bg-white/[0.03] border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-gold/30 transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full h-10 rounded-lg bg-gold text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-gold-light transition-all disabled:opacity-60"
              >
                {status === "idle" && (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    Enviar
                  </>
                )}
                {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "sent" && (
                  <>
                    <Check className="h-4 w-4" />
                    Enviado!
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} GUARD. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              Politica de Privacidade
            </a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
