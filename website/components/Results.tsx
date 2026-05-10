"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    before: "/antes1.png",
    after: "/despues1.png",
    label: "Blanqueamiento dental",
    desc: "Transformación completa en 1 sesión. Dientes hasta 8 tonos más blancos.",
  },
  {
    before: "/antes2.png",
    after: "/despues2.png",
    label: "Ortodoncia + Carillas",
    desc: "Corrección de alineación y diseño de sonrisa con carillas de porcelana.",
  },
  {
    before: "/antes3.png",
    after: "/despues3.png",
    label: "Diseño de sonrisa",
    desc: "Remodelado estético con alineación y pulido profesional.",
  },
];

export function Results() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".results-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".result-item",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".results-grid", start: "top 75%" },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="resultados"
      ref={containerRef}
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060C1A 0%, #0A1628 100%)" }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(43,126,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="results-header text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-5 py-2 mb-5">
            <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
              Resultados reales
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Arrastra para ver{" "}
            <span className="gradient-text">la transformación</span>
          </h2>
          <p className="text-blue-200/60 text-lg max-w-xl mx-auto">
            Casos reales de pacientes. Arrastra el slider para comparar antes y después.
          </p>
        </div>

        {/* Grid */}
        <div className="results-grid grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="result-item flex flex-col gap-4">
              <BeforeAfterSlider
                before={c.before}
                after={c.after}
                label={c.label}
              />
              <div className="glass rounded-2xl px-4 py-3">
                <p className="text-white font-semibold text-sm">{c.label}</p>
                <p className="text-blue-200/60 text-xs mt-1 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={() =>
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-white text-blue-800 font-bold px-10 py-4 rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-95"
          >
            <span>Quiero mi transformación</span>
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
