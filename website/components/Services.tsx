"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "🦷",
    title: "Ortodoncia",
    desc: "Brackets metálicos, cerámicos y alineadores invisibles para corregir tu mordida y alinear tu sonrisa.",
    gradient: "from-blue-600 to-blue-800",
    accent: "bg-blue-50 border-blue-100",
    tag: "Más solicitado",
  },
  {
    icon: "✨",
    title: "Blanqueamiento",
    desc: "Tratamiento profesional que elimina manchas y devuelve el brillo natural de tus dientes en una sola sesión.",
    gradient: "from-sky-500 to-blue-600",
    accent: "bg-sky-50 border-sky-100",
    tag: null,
  },
  {
    icon: "🔩",
    title: "Implantes",
    desc: "Reemplaza dientes perdidos con implantes de titanio. Función y estética naturales de por vida.",
    gradient: "from-blue-700 to-indigo-700",
    accent: "bg-indigo-50 border-indigo-100",
    tag: null,
  },
  {
    icon: "🩺",
    title: "Odontología General",
    desc: "Consultas de rutina, limpiezas, calzas y cuidado preventivo. La base de una boca sana.",
    gradient: "from-blue-500 to-cyan-600",
    accent: "bg-cyan-50 border-cyan-100",
    tag: null,
  },
  {
    icon: "💎",
    title: "Estética Dental",
    desc: "Carillas de porcelana, remodelado y diseño de sonrisa. El look dental que siempre soñaste.",
    gradient: "from-violet-600 to-blue-700",
    accent: "bg-violet-50 border-violet-100",
    tag: "Nuevo",
  },
  {
    icon: "🏥",
    title: "Cirugía Oral",
    desc: "Extracciones, muelas del juicio y procedimientos quirúrgicos con anestesia local para tu comodidad.",
    gradient: "from-blue-600 to-teal-600",
    accent: "bg-teal-50 border-teal-100",
    tag: null,
  },
];

export function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".services-header",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".services-grid", start: "top 75%" },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section id="servicios" ref={containerRef} className="py-28 bg-[#F8FAFF] relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(43,126,255,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="services-header text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Todo lo que tu boca{" "}
            <span className="gradient-text-blue">necesita</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Desde consultas preventivas hasta tratamientos especializados. Un solo lugar para toda tu salud bucal.
          </p>
        </div>

        <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card group relative bg-white rounded-3xl border border-slate-100 p-7 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-400 overflow-hidden"
            >
              {/* Hover gradient reveal */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-3xl`}
              />

              {s.tag && (
                <span className="absolute top-5 right-5 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wide">
                  {s.tag}
                </span>
              )}

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-2xl mb-5 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                {s.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>

              <div className="mt-5 flex items-center gap-1.5 text-blue-600 text-sm font-bold translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                Consultar <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
