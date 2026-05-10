"use client";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-slate-800">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-lg font-bold text-white leading-none">
                Dra. Camila Londoño
              </p>
              <p className="text-xs text-slate-400 tracking-widest uppercase mt-0.5">
                Odontóloga
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Cuidando sonrisas con pasión, ciencia y el calor que cada paciente
              merece.
            </p>
            <div className="flex gap-3 mt-2">
              {["📘", "📸", "🎵"].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center text-sm transition-colors duration-200"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Navegación
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Contacto
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { icon: "📍", text: "Medellín, Antioquia" },
                { icon: "📞", text: "+57 300 000 0000" },
                { icon: "📧", text: "dra.camila@odontologia.com" },
                { icon: "🕐", text: "Lun – Sáb: 8am – 6pm" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-slate-300 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Dra. Camila Londoño. Todos los derechos
            reservados.
          </p>
          <p className="text-slate-500 text-xs">
            Hecho con ❤️ en Medellín, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
