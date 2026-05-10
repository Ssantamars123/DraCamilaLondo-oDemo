"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Blob float animation
      gsap.to(blobRef1.current, {
        y: -30,
        x: 15,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(blobRef2.current, {
        y: 25,
        x: -20,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });

      // Image entrance
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.2 }
      );

      // Badge pulse
      gsap.to(".hero-badge", {
        boxShadow: "0 0 20px rgba(43,126,255,0.5), 0 0 40px rgba(43,126,255,0.2)",
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Text reveals
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(
        ".hero-tag",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
        .fromTo(
          ".hero-word",
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.9, stagger: 0.07, ease: "power4.out" },
          "-=0.2"
        )
        .fromTo(
          subRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          statsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #060C1A 0%, #0D1B35 60%, #0A1628 100%)" }}
    >
      {/* Animated blobs */}
      <div
        ref={blobRef1}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(43,126,255,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        ref={blobRef2}
        className="absolute bottom-1/3 left-1/6 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20 z-10">
        {/* LEFT */}
        <div className="flex flex-col gap-7">
          <div className="hero-tag inline-flex items-center gap-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full px-5 py-2 w-fit hero-badge">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">
              Consultorio disponible
            </span>
          </div>

          <h1 ref={h1Ref} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.0] tracking-tight">
            {["Tu", "sonrisa,"].map((w) => (
              <span key={w} className="overflow-clip inline-block mr-3">
                <span className="hero-word inline-block text-white">{w}</span>
              </span>
            ))}
            <br />
            {["nuestro"].map((w) => (
              <span key={w} className="overflow-clip inline-block mr-3">
                <span className="hero-word inline-block gradient-text">{w}</span>
              </span>
            ))}
            {["arte."].map((w) => (
              <span key={w} className="overflow-clip inline-block">
                <span className="hero-word inline-block text-white">{w}</span>
              </span>
            ))}
          </h1>

          <p
            ref={subRef}
            className="text-blue-100/70 text-lg leading-relaxed max-w-md"
          >
            Odontología de calidad con un toque humano. Tecnología moderna,
            resultados que transforman vidas.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#contacto")}
              className="group relative overflow-hidden bg-blue-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(43,126,255,0.5)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Agendar cita
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button
              onClick={() => scrollTo("#resultados")}
              className="group flex items-center gap-2 text-white/80 font-semibold px-8 py-4 rounded-full border border-white/10 hover:border-blue-400/50 hover:text-white transition-all duration-300"
            >
              Ver resultados
              <span className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center text-xs transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-500/20">
                ↓
              </span>
            </button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="flex gap-10 pt-2">
            {[
              { value: "8+", label: "Años de exp." },
              { value: "2K+", label: "Pacientes" },
              { value: "4.9★", label: "Calificación" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold gradient-text">{s.value}</span>
                <span className="text-blue-300/60 text-xs uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div ref={imageRef} className="relative flex justify-center">
          {/* Glow ring behind image */}
          <div
            className="absolute inset-0 rounded-[2.5rem]"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(43,126,255,0.25) 0%, transparent 70%)",
            }}
          />

          <div className="relative w-full max-w-[380px]">
            {/* Frame */}
            <div className="absolute -inset-3 rounded-[3rem] border border-blue-500/20" />
            <div className="absolute -inset-6 rounded-[3.5rem] border border-blue-500/10" />

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-blue-900/50">
              <Image
                src="/DraCamila.png"
                alt="Dra. Camila Londoño"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#060C1A]/60 to-transparent" />
            </div>

            {/* Badge bottom-left */}
            <div className="absolute -bottom-5 -left-6 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-lg">
                🦷
              </div>
              <div>
                <p className="text-xs text-blue-200/60">Especialista en</p>
                <p className="text-sm font-bold text-white">Ortodoncia & Estética</p>
              </div>
            </div>

            {/* Badge top-right */}
            <div
              className="absolute -top-5 -right-4 rounded-2xl px-4 py-3 shadow-lg"
              style={{ background: "linear-gradient(135deg, #2B7EFF, #1A5CB8)" }}
            >
              <p className="text-xs text-blue-100/70">Calificación</p>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-white">4.9</span>
                <span className="text-yellow-300">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-blue-400/40 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-blue-400/40 to-transparent" />
      </div>
    </section>
  );
}
