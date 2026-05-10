"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Valentina García",
    role: "Ortodoncia",
    text: "La Dra. Camila transformó mi sonrisa completamente. Su paciencia y profesionalismo son únicos. En 18 meses mis dientes quedaron perfectos.",
    stars: 5,
    initial: "V",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Andrés Martínez",
    role: "Implantes",
    text: "Después de perder un diente pensé que nunca volvería a sonreír con confianza. El implante es indistinguible del resto. Increíble trabajo.",
    stars: 5,
    initial: "A",
    color: "from-indigo-500 to-blue-700",
  },
  {
    name: "María Fernanda López",
    role: "Blanqueamiento",
    text: "El blanqueamiento superó mis expectativas. Proceso rápido, sin dolor y los resultados son espectaculares. Muy recomendada.",
    stars: 5,
    initial: "M",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Carlos Restrepo",
    role: "Odontología general",
    text: "Llevo 3 años siendo paciente de la Dra. Camila. El ambiente de su consultorio es agradable y siempre explica cada procedimiento con claridad.",
    stars: 5,
    initial: "C",
    color: "from-blue-700 to-indigo-800",
  },
  {
    name: "Laura Ospina",
    role: "Diseño de sonrisa",
    text: "Las carillas cambiaron mi vida. Me siento más segura y sonrío con confianza por primera vez en años. ¡Gracias, Dra. Camila!",
    stars: 5,
    initial: "L",
    color: "from-violet-500 to-blue-700",
  },
  {
    name: "Santiago Morales",
    role: "Alineadores invisibles",
    text: "Elegí los alineadores por discreción. El seguimiento fue constante y los resultados superaron mis expectativas. Totalmente recomendado.",
    stars: 5,
    initial: "S",
    color: "from-teal-500 to-blue-600",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".testimonials-header",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".t-card",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".t-grid", start: "top 75%" },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="testimonios" ref={containerRef} className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="testimonials-header text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Lo que dicen nuestros{" "}
            <span className="gradient-text-blue">pacientes</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Más de 2,000 pacientes confían en nosotros. Sus sonrisas son nuestra mayor recompensa.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-lg">★</span>)}
            </div>
            <span className="font-bold text-slate-900 text-lg">4.9</span>
            <span className="text-slate-400 text-sm">/ 5.0</span>
          </div>
        </div>

        <div className="t-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="t-card group relative bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/80 transition-all duration-300 overflow-hidden flex flex-col gap-4"
            >
              {/* Subtle gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-3xl`} />

              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} text-white flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm`}>
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
