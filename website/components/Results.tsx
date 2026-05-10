"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  { before: "/antes1.png", after: "/despues1.png", label: "Blanqueamiento dental",         desc: "Dientes hasta 8 tonos más blancos en una sola sesión." },
  { before: "/antes2.png", after: "/despues2.png", label: "Ortodoncia + Carillas",          desc: "Alineación completa y diseño de sonrisa con carillas de porcelana." },
  { before: "/antes3.png", after: "/despues3.png", label: "Diseño de Sonrisa",              desc: "Remodelado estético con alineación y pulido profesional." },
];

export function Results() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".res-header",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%" } }
    );
    gsap.fromTo(".res-item",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.18, ease: "power3.out",
        scrollTrigger: { trigger: ".res-grid", start: "top 75%" } }
    );
  }, { scope: ref });

  return (
    <section id="resultados" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="res-header text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Resultados reales</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Arrastra y ve la <span className="text-gradient">transformación</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Casos reales de pacientes de la Dra. Camila. Arrastra el slider para comparar antes y después.
          </p>
        </div>

        <div className="res-grid grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="res-item flex flex-col gap-4">
              <BeforeAfterSlider before={c.before} after={c.after} label={c.label} />
              <div className="bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3">
                <p className="text-slate-800 font-bold text-sm">{c.label}</p>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://api.whatsapp.com/send?phone=573102481468&text=Hola,%20quiero%20saber%20más%20sobre%20los%20tratamientos"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-blue-600 text-white font-bold px-10 py-4 rounded-full hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 active:scale-95 transition-all duration-200"
          >
            <span className="text-xl">💬</span>
            Quiero mi transformación
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
