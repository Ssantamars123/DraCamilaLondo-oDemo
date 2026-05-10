"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: "🎓",
    title: "Formación de excelencia",
    desc: "Universidad de Antioquia — Especialización en Ortodoncia y Estética Dental.",
  },
  {
    icon: "❤️",
    title: "Atención personalizada",
    desc: "Cada paciente es único. Escucho, evalúo y creo planes adaptados a ti.",
  },
  {
    icon: "🔬",
    title: "Tecnología moderna",
    desc: "Equipos de última generación para diagnósticos precisos y tratamientos eficaces.",
  },
];

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-tag",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".about-headline",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".about-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".about-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-cards",
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="sobre-mi"
      ref={containerRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-blue-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: decorative image block */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-6xl shadow-lg shadow-blue-200">
                🦷
              </div>
              <div className="h-32 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-700">8+</p>
                  <p className="text-xs text-slate-500">años de práctica</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="h-32 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-700">2K+</p>
                  <p className="text-xs text-slate-500">pacientes atendidos</p>
                </div>
              </div>
              <div className="h-48 rounded-2xl bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center text-5xl">
                😊
              </div>
            </div>
          </div>

          {/* Floating quote */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-4 border border-slate-100">
            <p className="text-sm text-slate-600 italic leading-snug">
              "Mi pasión es devolverte la confianza de sonreír."
            </p>
            <p className="text-xs text-blue-700 font-semibold mt-2">
              — Dra. Camila Londoño
            </p>
          </div>
        </div>

        {/* Right: text */}
        <div className="flex flex-col gap-6 pt-8">
          <div className="about-tag inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 w-fit">
            <span className="text-blue-700 text-xs font-semibold tracking-wide uppercase">
              Sobre mí
            </span>
          </div>

          <h2 className="about-headline text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Cuidando sonrisas{" "}
            <span className="text-blue-700">desde el corazón</span>
          </h2>

          <p className="about-text text-slate-500 leading-relaxed text-lg">
            Soy la Dra. Camila Londoño, odontóloga con más de 8 años de
            experiencia transformando sonrisas en Medellín. Me especializo en
            ortodoncia, estética dental y odontología general, con un enfoque
            integral que combina la ciencia con el cuidado humano.
          </p>
          <p className="about-text text-slate-500 leading-relaxed">
            Cada tratamiento comienza con escucharte. Porque entender tu historia
            es la base para darte los mejores resultados.
          </p>

          <div className="about-cards grid grid-cols-1 gap-4 pt-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="about-card flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-200"
              >
                <span className="text-2xl">{h.icon}</span>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">
                    {h.title}
                  </p>
                  <p className="text-slate-500 text-sm mt-0.5">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
