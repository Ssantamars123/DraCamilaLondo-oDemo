"use client";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Resultados", href: "#resultados" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="text-white pt-16 pb-8"
      style={{ background: "#060C1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div>
              <p className="text-lg font-bold text-white">Dra. Camila Londoño</p>
              <p className="text-[10px] text-blue-400/60 tracking-[0.25em] uppercase mt-0.5">Odontóloga</p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Cuidando sonrisas con pasión, ciencia y el calor que cada paciente merece. Medellín, Colombia.
            </p>
            <div className="flex gap-3 mt-1">
              <a
                href="https://www.instagram.com/dracamilalondono/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm hover:border-pink-400/50 hover:text-pink-400 transition-all duration-200"
                aria-label="Instagram"
              >
                📸
              </a>
              {["📘", "🎵"].map((icon, i) => (
                <button key={i} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-200">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">Secciones</p>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">Contacto</p>
            <ul className="flex flex-col gap-3">
              {[
                { icon: "📍", text: "Medellín, Antioquia" },
                { icon: "📞", text: "+57 300 000 0000" },
                { icon: "📧", text: "dra.camila@odontologia.com" },
                { icon: "🕐", text: "Lun – Sáb: 8am – 6pm" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-white/40 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Dra. Camila Londoño · Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">Hecho con ❤️ en Medellín</p>
        </div>
      </div>
    </footer>
  );
}
