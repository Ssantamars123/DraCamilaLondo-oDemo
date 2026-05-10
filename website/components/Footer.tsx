"use client";

const WA = "https://api.whatsapp.com/send?phone=573102481468&text=Hola,%20quiero%20agendar%20una%20cita%20con%20la%20Dra.%20Camila";

const links = [
  { label: "Inicio",      href: "#inicio" },
  { label: "Sobre mí",   href: "#sobre-mi" },
  { label: "Servicios",  href: "#servicios" },
  { label: "Resultados", href: "#resultados" },
  { label: "Testimonios",href: "#testimonios" },
  { label: "Contacto",   href: "#contacto" },
];

export function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div>
              <p className="text-lg font-extrabold tracking-tight">Dra. Camila Londoño Galeano</p>
              <p className="text-[9px] text-blue-400/70 tracking-[0.22em] uppercase mt-0.5">Odontóloga · Matrícula 1033652489</p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Av. 80 #28-90, Barrio Belén La Palma, Medellín 050025.
              Cuidando sonrisas desde 2016 con pasión y tecnología.
            </p>
            <div className="flex gap-3 mt-1">
              <a href="https://www.instagram.com/dracamilalondono/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm hover:border-pink-400/50 hover:text-pink-400 transition-all duration-200" aria-label="Instagram">
                📸
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm hover:border-green-400/50 hover:text-green-400 transition-all duration-200" aria-label="WhatsApp">
                💬
              </a>
              <a href="https://www.doctoralia.co/camila-londono-galeano/odontologo/medellin" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm hover:border-blue-400/50 hover:text-blue-400 transition-all duration-200" aria-label="Doctoralia">
                🏥
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-5">Secciones</p>
            <ul className="flex flex-col gap-2.5">
              {links.map(l => (
                <li key={l.href}>
                  <button onClick={() => go(l.href)} className="text-white/50 hover:text-white text-sm transition-colors duration-150">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-5">Contacto</p>
            <ul className="flex flex-col gap-3">
              {[
                { icon: "📍", text: "Av. 80 #28-90, Belén La Palma" },
                { icon: "📞", text: "310 2481468" },
                { icon: "🌐", text: "odontologiacamilalondono.com" },
                { icon: "🕐", text: "Lun–Vie 8am–6pm | Sáb 8am–1pm" },
              ].map(item => (
                <li key={item.text} className="flex items-start gap-2">
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-white/40 text-xs leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} Dra. Camila Londoño Galeano · Todos los derechos reservados.</p>
          <p className="text-white/20 text-xs">Hecho con ❤️ en Medellín, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
