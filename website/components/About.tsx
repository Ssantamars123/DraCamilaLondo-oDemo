"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { icon: "🎓", title: "Universidad de Antioquia", desc: "Odontóloga con especialización en Ortodoncia y Estética Dental." },
  { icon: "🔬", title: "Tecnología de punta", desc: "Equipos modernos para diagnósticos precisos y tratamientos eficaces." },
  { icon: "❤️", title: "Enfoque humano", desc: "Cada paciente recibe atención personalizada y un plan adaptado." },
];

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-left",
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        ".about-right",
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        ".about-card",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".about-cards", start: "top 80%" },
        }
      );

      // Counter animation
      const counters = document.querySelectorAll(".counter-num");
      counters.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0");
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="sobre-mi" ref={containerRef} className="py-28 bg-white relative overflow-hidden">
      {/* Subtle top gradient from dark */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#060C1A]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT: image mosaic */}
        <div className="about-left relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl shadow-blue-100">
                <Image src="/DraCamila.png" alt="Dra. Camila Londoño" fill className="object-cover object-top" />
              </div>
              <div className="h-32 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col items-center justify-center shadow-lg shadow-blue-200">
                <span className="counter-num text-4xl font-black text-white" data-target="8">0</span>
                <span className="text-blue-200 text-xs tracking-widest uppercase">años</span>
              </div>
            </div>
            <div className="space-y-4 mt-10">
              <div className="h-32 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center">
                <span className="counter-num text-4xl font-black gradient-text-blue" data-target="2000">0</span>
                <span className="text-slate-400 text-xs tracking-widest uppercase">pacientes</span>
              </div>
              <div className="h-64 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-7xl shadow-inner">
                😊
              </div>
            </div>
          </div>

          {/* Floating quote */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-xl shadow-slate-200/80 p-4 border border-slate-100 z-10">
            <p className="text-sm text-slate-600 italic leading-snug">
              "Mi pasión es devolverte la confianza de sonreír."
            </p>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-6 h-6 rounded-full bg-blue-600" />
              <p className="text-xs text-blue-700 font-bold">Dra. Camila Londoño</p>
            </div>
          </div>
        </div>

        {/* RIGHT: text */}
        <div className="about-right flex flex-col gap-6 pt-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 w-fit">
            <span className="text-blue-700 text-xs font-semibold tracking-widest uppercase">Sobre mí</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Cuidando sonrisas{" "}
            <span className="gradient-text-blue">desde el corazón</span>
          </h2>

          <p className="text-slate-500 leading-relaxed text-lg">
            Soy la Dra. Camila Londoño, odontóloga con más de 8 años transformando
            sonrisas en Medellín. Me especializo en ortodoncia, estética dental y
            odontología general, combinando ciencia con cuidado humano.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Cada tratamiento empieza por escucharte. Entender tu historia es la
            base para darte los mejores resultados.
          </p>

          <div className="about-cards flex flex-col gap-3 pt-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="about-card group flex items-start gap-4 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
              >
                <span className="text-2xl">{h.icon}</span>
                <div>
                  <p className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors">{h.title}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative overflow-hidden bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(43,126,255,0.4)] active:scale-95 flex items-center gap-2"
            >
              Agendar cita
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <a
              href="https://www.instagram.com/dracamilalondono/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-200 text-slate-600 font-semibold px-7 py-3.5 rounded-full hover:border-pink-300 hover:text-pink-600 transition-all duration-200"
            >
              <span>📸</span> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
