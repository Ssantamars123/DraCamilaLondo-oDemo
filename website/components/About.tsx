"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: "🎓", title: "Fundación Universitaria Autónoma de las Américas", desc: "Formación de excelencia en Odontología con enfoque clínico integral." },
  { icon: "🌍", title: "Español e Inglés", desc: "Atención bilingüe para pacientes locales e internacionales." },
  { icon: "💳", title: "Múltiples formas de pago", desc: "Efectivo, tarjetas débito/crédito y transferencias bancarias." },
  { icon: "🔬", title: "Tecnología de punta", desc: "Equipos modernos para diagnósticos precisos y tratamientos sin dolor." },
];

export function About() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".ab-left",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" } }
    );
    gsap.fromTo(".ab-right",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" } }
    );
    gsap.fromTo(".ab-card",
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-cards", start: "top 80%" } }
    );
  }, { scope: ref });

  return (
    <section id="sobre-mi" ref={ref} className="py-28 bg-white relative overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — image mosaic */}
        <div className="ab-left relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl shadow-blue-100">
                <Image src="/DraCamila.png" alt="Dra. Camila Londoño" fill className="object-cover object-top" />
              </div>
              <div className="h-28 rounded-3xl bg-blue-600 flex flex-col items-center justify-center shadow-lg shadow-blue-200 gap-1">
                <span className="text-4xl font-black text-white leading-none">2016</span>
                <span className="text-blue-200 text-xs tracking-widest uppercase">Desde</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <div className="h-28 rounded-3xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center gap-1">
                <span className="text-4xl font-black text-blue-600 leading-none">7K+</span>
                <span className="text-slate-400 text-xs tracking-widest uppercase">Pacientes</span>
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl shadow-blue-100 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-7xl">
                😊
              </div>
            </div>
          </div>

          {/* Quote card */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-xl shadow-blue-100/80 p-4 border border-blue-50 z-10">
            <p className="text-sm text-slate-600 italic leading-snug">
              "Mi pasión es devolverte la confianza de sonreír."
            </p>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">C</div>
              <p className="text-xs font-bold text-blue-700">Dra. Camila Londoño Galeano</p>
            </div>
          </div>
        </div>

        {/* RIGHT — text */}
        <div className="ab-right flex flex-col gap-6 pt-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 w-fit">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Sobre mí</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Cuidando sonrisas{" "}
            <span className="text-gradient">desde 2016</span>
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed">
            Soy la <strong className="text-slate-800">Dra. Camila Londoño Galeano</strong>, odontóloga
            con 10 años de experiencia y más de 7,000 pacientes atendidos en Medellín.
            Mi consultorio abrió en mayo de 2022 en el barrio Belén La Palma, donde ya
            hemos atendido a más de 2,000 pacientes.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Me especializo en ortodoncia, estética dental, implantes, periodoncia, endodoncia
            y cirugía oral. Atiendo en español e inglés y ofrezco tanto consultas presenciales
            como por videollamada.
          </p>

          <div className="ab-cards grid grid-cols-2 gap-3 pt-2">
            {cards.map(c => (
              <div key={c.title} className="ab-card group p-4 rounded-2xl bg-blue-50/60 border border-blue-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                <span className="text-2xl block mb-2">{c.icon}</span>
                <p className="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug">{c.title}</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 active:scale-95 transition-all duration-200"
            >
              Agendar cita <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
            <a
              href="https://www.instagram.com/dracamilalondono/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-blue-100 text-slate-600 font-semibold px-7 py-3.5 rounded-full hover:border-pink-300 hover:text-pink-600 transition-all duration-200"
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
