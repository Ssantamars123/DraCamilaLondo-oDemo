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
    desc: "Convencional, invisible y autoligado. Corregimos tu mordida y alineamos tu sonrisa progresivamente.",
    price: null,
    tag: "Más solicitado",
    color: "blue",
  },
  {
    icon: "✨",
    title: "Blanqueamiento & Diseño de Sonrisa",
    desc: "Blanqueamiento profesional y diseño personalizado para una sonrisa natural y radiante.",
    price: null,
    tag: null,
    color: "sky",
  },
  {
    icon: "🔩",
    title: "Implantes Dentales",
    desc: "Reemplaza dientes perdidos con implantes de titanio para una mordida natural de por vida.",
    price: null,
    tag: null,
    color: "indigo",
  },
  {
    icon: "🩺",
    title: "Consulta Inicial",
    desc: "Evaluación completa de tu salud oral con diagnóstico y plan de tratamiento personalizado.",
    price: "$80.000 COP",
    tag: "Precio fijo",
    color: "cyan",
  },
  {
    icon: "💎",
    title: "Estética Dental",
    desc: "Carillas de porcelana, coronas, prótesis y remodelado. El look dental que siempre soñaste.",
    price: null,
    tag: "Nuevo",
    color: "violet",
  },
  {
    icon: "❤️",
    title: "Periodoncia",
    desc: "Tratamiento de encías, injertos gingivales y regeneración ósea para una base dental sana.",
    price: null,
    tag: null,
    color: "rose",
  },
  {
    icon: "🔬",
    title: "Endodoncia",
    desc: "Tratamientos de conductos sin dolor para salvar tu diente y eliminar la infección de raíz.",
    price: null,
    tag: null,
    color: "teal",
  },
  {
    icon: "🏥",
    title: "Cirugía Oral",
    desc: "Extracciones, muelas del juicio y procedimientos quirúrgicos con máxima comodidad.",
    price: null,
    tag: null,
    color: "blue",
  },
  {
    icon: "😁",
    title: "Férula para Bruxismo",
    desc: "Protector dental personalizado para evitar el desgaste por rechinamiento nocturno.",
    price: null,
    tag: null,
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; icon: string; tag: string }> = {
  blue:   { bg: "from-blue-500 to-blue-700",     icon: "bg-blue-50 text-blue-600",   tag: "bg-blue-600" },
  sky:    { bg: "from-sky-400 to-blue-600",       icon: "bg-sky-50 text-sky-600",     tag: "bg-sky-600" },
  indigo: { bg: "from-indigo-500 to-blue-700",    icon: "bg-indigo-50 text-indigo-600", tag: "bg-indigo-600" },
  cyan:   { bg: "from-cyan-500 to-blue-600",      icon: "bg-cyan-50 text-cyan-700",   tag: "bg-cyan-600" },
  violet: { bg: "from-violet-500 to-blue-700",    icon: "bg-violet-50 text-violet-600", tag: "bg-violet-600" },
  rose:   { bg: "from-rose-400 to-pink-600",      icon: "bg-rose-50 text-rose-600",   tag: "bg-rose-500" },
  teal:   { bg: "from-teal-500 to-blue-600",      icon: "bg-teal-50 text-teal-600",   tag: "bg-teal-600" },
  amber:  { bg: "from-amber-400 to-orange-500",   icon: "bg-amber-50 text-amber-600", tag: "bg-amber-500" },
};

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useGSAP(() => {
    gsap.fromTo(".svc-header",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" } }
    );
    gsap.fromTo(".svc-card",
      { y: 50, opacity: 0, scale: 0.97 },
      { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.07, ease: "power3.out",
        scrollTrigger: { trigger: ".svc-grid", start: "top 75%" } }
    );
  }, { scope: ref });

  return (
    <section id="servicios" ref={ref} className="py-28 bg-blue-50/40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#DBEAFE 1.5px, transparent 1.5px)", backgroundSize: "40px 40px", opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="svc-header text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Todo lo que tu boca <span className="text-gradient">necesita</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Desde consultas preventivas hasta cirugía oral. Un solo lugar, atención completa.
          </p>
        </div>

        <div className="svc-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const c = colorMap[s.color] ?? colorMap.blue;
            return (
              <div
                key={s.title}
                className="svc-card group relative bg-white rounded-3xl border border-blue-50 p-7 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/70 transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Gradient sweep on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${c.bg} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 rounded-3xl pointer-events-none`} />

                {/* Tag */}
                {s.tag && (
                  <span className={`absolute top-5 right-5 ${c.tag} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>
                    {s.tag}
                  </span>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${c.icon} flex items-center justify-center text-2xl mb-5 border border-current/10 transition-all duration-300 ${hovered === i ? "scale-110 shadow-lg" : ""}`}>
                  {s.icon}
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-200 leading-snug">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>

                {s.price && (
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
                    <span className="text-blue-700 font-black text-sm">{s.price}</span>
                  </div>
                )}

                <div className="mt-5 flex items-center gap-1 text-blue-600 text-xs font-bold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                  Consultar <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
