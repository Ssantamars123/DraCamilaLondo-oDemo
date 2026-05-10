"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "🦷",
    title: "Ortodoncia",
    desc: "Brackets metálicos, cerámicos y alineadores invisibles. Corregimos tu mordida y alineamos tu sonrisa de forma progresiva.",
    color: "from-blue-600 to-blue-800",
    tag: "Más solicitado",
  },
  {
    icon: "✨",
    title: "Blanqueamiento Dental",
    desc: "Tratamientos de blanqueamiento profesional que eliminan manchas y devuelven el brillo natural de tus dientes.",
    color: "from-sky-500 to-blue-600",
    tag: null,
  },
  {
    icon: "🔩",
    title: "Implantes Dentales",
    desc: "Reemplaza dientes perdidos con implantes de titanio que se integran al hueso, devolviéndote una mordida natural.",
    color: "from-blue-700 to-indigo-700",
    tag: null,
  },
  {
    icon: "🩺",
    title: "Odontología General",
    desc: "Consultas de rutina, limpiezas, calzas y cuidado preventivo. La base de una boca sana está en el control regular.",
    color: "from-blue-500 to-cyan-600",
    tag: null,
  },
  {
    icon: "💎",
    title: "Estética Dental",
    desc: "Carillas de porcelana, remodelado y diseño de sonrisa. Creamos el look dental que siempre soñaste.",
    color: "from-violet-600 to-blue-700",
    tag: "Nuevo",
  },
  {
    icon: "🏥",
    title: "Cirugía Oral",
    desc: "Extracciones simples y complejas, muelas del juicio y procedimientos quirúrgicos con anestesia local para tu comodidad.",
    color: "from-blue-600 to-teal-600",
    tag: null,
  },
];

export function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".services-header",
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
        ".service-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 75%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="servicios"
      ref={containerRef}
      className="py-24 bg-slate-50/50 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="services-header text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-700 text-xs font-semibold tracking-wide uppercase">
              Servicios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Todo lo que tu boca{" "}
            <span className="text-blue-700">necesita</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Desde consultas preventivas hasta tratamientos especializados,
            cubrimos todas las necesidades de tu salud bucal.
          </p>
        </div>

        {/* Cards grid */}
        <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card group relative bg-white rounded-3xl border border-slate-100 p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 cursor-default overflow-hidden"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Hover background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              />

              {service.tag && (
                <span className="absolute top-4 right-4 bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              )}

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-5 shadow-lg transition-transform duration-300 ${hovered === i ? "scale-110" : ""}`}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-5 flex items-center gap-1 text-blue-700 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Consultar</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
