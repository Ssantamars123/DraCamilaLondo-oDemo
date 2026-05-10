"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: "Valentina García",     role: "Ortodoncia",          text: "La Dra. Camila transformó mi sonrisa completamente. Su paciencia es única. En 18 meses mis dientes quedaron perfectos.", stars: 5, ini: "V", color: "bg-blue-600" },
  { name: "Andrés Martínez",      role: "Implantes",           text: "El implante es indistinguible del resto. Jamás pensé que volvería a sonreír con confianza. Increíble trabajo.", stars: 5, ini: "A", color: "bg-indigo-600" },
  { name: "María Fernanda López", role: "Blanqueamiento",      text: "Proceso rápido, sin dolor y los resultados son espectaculares. La mejor inversión que he hecho en mi sonrisa.", stars: 5, ini: "M", color: "bg-sky-600" },
  { name: "Carlos Restrepo",      role: "Odontología general", text: "Llevo 3 años siendo paciente. El ambiente es agradable y siempre explica cada procedimiento con claridad.", stars: 5, ini: "C", color: "bg-blue-700" },
  { name: "Laura Ospina",         role: "Diseño de sonrisa",   text: "Las carillas cambiaron mi vida. Me siento más segura y sonrío con confianza por primera vez en años.", stars: 5, ini: "L", color: "bg-violet-600" },
  { name: "Santiago Morales",     role: "Alineadores",         text: "Elegí los alineadores por discreción. Seguimiento constante y resultados que superaron mis expectativas.", stars: 5, ini: "S", color: "bg-teal-600" },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".tes-header",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" } }
    );
    gsap.fromTo(".tes-card",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".tes-grid", start: "top 75%" } }
    );
  }, { scope: ref });

  return (
    <section id="testimonios" ref={ref} className="py-28 bg-blue-50/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#BFDBFE 1px, transparent 1px)", backgroundSize: "36px 36px", opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="tes-header text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            56 reseñas verificadas <span className="text-gradient">en Doctoralia</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Pacientes reales, experiencias reales. Promedio 5.0 estrellas.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-xl">★</span>)}
            <span className="font-black text-slate-900 text-xl ml-1">5.0</span>
            <span className="text-slate-400 text-sm">· 56 reseñas</span>
          </div>
        </div>

        <div className="tes-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="tes-card group bg-white border border-blue-100 rounded-3xl p-6 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/60 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_,i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-blue-50">
                <div className={`w-9 h-9 rounded-full ${t.color} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {t.ini}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{t.name}</p>
                  <p className="text-xs text-blue-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Doctoralia badge */}
        <div className="text-center mt-12">
          <a
            href="https://www.doctoralia.co/camila-londono-galeano/odontologo/medellin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-blue-200 text-slate-700 font-semibold px-6 py-3 rounded-full hover:border-blue-400 hover:shadow-md transition-all duration-200 text-sm"
          >
            <span className="text-lg">🏥</span>
            Ver todas las reseñas en Doctoralia
            <span className="text-blue-500">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
