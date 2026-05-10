"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Valentina García",
    role: "Paciente de ortodoncia",
    text: "La Dra. Camila transformó mi sonrisa completamente. Su paciencia y profesionalismo son únicos. En 18 meses mis dientes quedaron perfectos.",
    stars: 5,
    initial: "V",
    color: "bg-blue-600",
  },
  {
    name: "Andrés Martínez",
    role: "Tratamiento de implantes",
    text: "Después de perder un diente, pensé que nunca volvería a sonreír con confianza. El implante que me colocó la Dra. Londoño es indistinguible del resto.",
    stars: 5,
    initial: "A",
    color: "bg-indigo-600",
  },
  {
    name: "María Fernanda López",
    role: "Blanqueamiento dental",
    text: "El blanqueamiento superó mis expectativas. El proceso fue rápido, sin dolor y los resultados son increíbles. Muy recomendada.",
    stars: 5,
    initial: "M",
    color: "bg-sky-600",
  },
  {
    name: "Carlos Restrepo",
    role: "Paciente general",
    text: "Llevo 3 años siendo paciente de la Dra. Camila. El ambiente de su consultorio es muy agradable y siempre me explica cada procedimiento con claridad.",
    stars: 5,
    initial: "C",
    color: "bg-blue-800",
  },
  {
    name: "Laura Ospina",
    role: "Diseño de sonrisa",
    text: "Las carillas que me puso cambiaron mi vida. Me siento más segura y sonrío con confianza por primera vez en años. Gracias, Dra. Camila.",
    stars: 5,
    initial: "L",
    color: "bg-violet-600",
  },
  {
    name: "Santiago Morales",
    role: "Ortodoncia invisible",
    text: "Elegí los alineadores invisibles por discreción. El seguimiento de la Dra. Londoño fue constante y los resultados superaron mis expectativas.",
    stars: 5,
    initial: "S",
    color: "bg-teal-600",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      gsap.fromTo(
        ".testimonials-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".testimonial-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="testimonios"
      ref={containerRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="testimonials-header text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-700 text-xs font-semibold tracking-wide uppercase">
              Testimonios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-blue-700">pacientes</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Más de 2,000 pacientes confían en nosotros. Sus sonrisas son
            nuestra mayor recompensa.
          </p>

          {/* Average rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>
            <span className="font-bold text-slate-900 text-lg">4.9</span>
            <span className="text-slate-400 text-sm">/ 5.0 promedio</span>
          </div>
        </div>

        {/* Cards grid */}
        <div
          ref={trackRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card bg-slate-50/60 border border-slate-100 rounded-3xl p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50/50 transition-all duration-300 flex flex-col gap-4"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(-1)}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div
                  className={`w-9 h-9 rounded-full ${t.color} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {t.name}
                  </p>
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
