"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin();

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6 }
      )
        .fromTo(
          subRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          imageRef.current,
          { x: 60, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 1.2 },
          "-=1"
        )
        .fromTo(
          badgeRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/60 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full bg-blue-50/40 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-16">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-blue-700 text-xs font-semibold tracking-wide uppercase">
              Consultorio disponible
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight"
          >
            Tu sonrisa,{" "}
            <span className="text-blue-700">nuestro</span>
            <br />
            arte.
          </h1>

          <p
            ref={subRef}
            className="text-lg text-slate-500 leading-relaxed max-w-md"
          >
            Odontología de calidad con un toque humano. Cuidamos tu salud bucal
            con tecnología moderna y el calor que mereces.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => {
                document
                  .querySelector("#contacto")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-blue-700 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-800 transition-all duration-200 hover:shadow-xl hover:shadow-blue-200 active:scale-95 text-center"
            >
              Agendar cita
            </button>
            <button
              onClick={() => {
                document
                  .querySelector("#servicios")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-full hover:border-blue-300 hover:text-blue-700 transition-all duration-200 text-center"
            >
              Ver servicios
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4">
            {[
              { value: "8+", label: "Años de experiencia" },
              { value: "2K+", label: "Pacientes felices" },
              { value: "100%", label: "Compromiso" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-blue-700">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div ref={imageRef} className="relative flex justify-center">
          <div className="relative w-full max-w-sm md:max-w-md">
            {/* Blue blob background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-[2.5rem] transform rotate-3 scale-105" />

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-blue-100">
              <Image
                src="/DraCamila.png"
                alt="Dra. Camila Londoño — Odontóloga"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating badge */}
            <div
              ref={badgeRef}
              className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-lg shadow-slate-200/80 px-5 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg">
                🦷
              </div>
              <div>
                <p className="text-xs text-slate-500">Especializada en</p>
                <p className="text-sm font-bold text-slate-800">
                  Ortodoncia & Estética
                </p>
              </div>
            </div>

            {/* Second floating badge */}
            <div className="absolute -top-4 -right-4 bg-blue-700 text-white rounded-2xl shadow-lg px-4 py-2.5">
              <p className="text-xs opacity-80">Calificación</p>
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold">4.9</span>
                <span className="text-yellow-300 text-sm">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-slate-400 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-300 to-transparent" />
      </div>
    </section>
  );
}
