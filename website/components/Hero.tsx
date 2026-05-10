"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const blob1Ref   = useRef<HTMLDivElement>(null);
  const blob2Ref   = useRef<HTMLDivElement>(null);
  const imgRef     = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Floating blobs
    gsap.to(blob1Ref.current, { y: -24, x: 12, duration: 7, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.to(blob2Ref.current, { y: 20, x: -16, duration: 9, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.5 });

    // Image entrance
    gsap.fromTo(imgRef.current,
      { x: 60, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, duration: 1.3, ease: "power3.out", delay: 0.3 }
    );

    // Text stagger
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(".hero-pill",   { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" })
      .fromTo(".hero-line",   { y: "105%" },          { y: "0%", duration: 0.8, stagger: 0.12, ease: "power4.out" }, "-=0.2")
      .fromTo(".hero-sub",    { y: 16, opacity: 0 },  { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .fromTo(".hero-btns",   { y: 16, opacity: 0 },  { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .fromTo(".hero-stats",  { y: 16, opacity: 0 },  { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.3");

    // Badge pulse ring
    gsap.to(".badge-ring", {
      scale: 1.15, opacity: 0, duration: 1.6, ease: "power2.out", repeat: -1, transformOrigin: "center center"
    });
  }, { scope: sectionRef });

  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white"
    >
      {/* Background blobs */}
      <div ref={blob1Ref} className="absolute top-16 right-[10%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #DBEAFE 0%, #EFF6FF 40%, transparent 75%)" }} />
      <div ref={blob2Ref} className="absolute bottom-10 left-[5%] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #BFDBFE 0%, #EFF6FF 50%, transparent 75%)" }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#BFDBFE 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center py-20 z-10">

        {/* ── LEFT TEXT ── */}
        <div className="flex flex-col gap-6">

          {/* Pill */}
          <div className="hero-pill inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="badge-ring absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Consultorio disponible · Medellín</span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.6rem,6vw,4.5rem)] font-black text-slate-900 leading-[1.0] tracking-tight">
            <span className="clip block"><span className="hero-line block">Dra. Camila</span></span>
            <span className="clip block"><span className="hero-line block">Londoño</span></span>
            <span className="clip block">
              <span className="hero-line block text-gradient">Galeano</span>
            </span>
          </h1>

          {/* Sub */}
          <p className="hero-sub text-slate-500 text-lg leading-relaxed max-w-sm">
            Odontóloga con <strong className="text-slate-800 font-semibold">10 años de experiencia</strong> y más de
            {" "}<strong className="text-slate-800 font-semibold">7,000 pacientes</strong> transformados.
            Ortodoncia, estética dental e implantes en Medellín.
          </p>

          {/* Buttons */}
          <div className="hero-btns flex flex-col sm:flex-row gap-3 pt-1">
            <button
              onClick={() => go("#contacto")}
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-200 hover:shadow-xl hover:shadow-blue-200 active:scale-[0.97]"
            >
              Agendar cita
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=573102481468&text=Hola,%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 border-2 border-blue-200 text-blue-700 font-bold px-8 py-4 rounded-full hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 active:scale-[0.97]"
            >
              <span className="text-lg">💬</span> WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats flex gap-8 pt-2 border-t border-blue-50">
            {[
              { val: "10+", lbl: "Años de exp." },
              { val: "7K+", lbl: "Pacientes" },
              { val: "5.0★", lbl: "56 reseñas" },
            ].map(s => (
              <div key={s.lbl} className="flex flex-col gap-0.5">
                <span className="text-2xl font-black text-blue-600">{s.val}</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT IMAGE ── */}
        <div ref={imgRef} className="relative flex justify-center">
          {/* Decorative ring */}
          <div className="absolute inset-[10%] rounded-full border-2 border-blue-100 pointer-events-none" />
          <div className="absolute inset-[5%] rounded-full border border-blue-50 pointer-events-none" />

          <div className="relative w-full max-w-[360px]">
            {/* Blue shape behind */}
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-blue-100 to-blue-200 rotate-3 pointer-events-none" />

            {/* Photo */}
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-blue-200/60">
              <Image
                src="/DraCamila.png"
                alt="Dra. Camila Londoño Galeano"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Badge — bottom left */}
            <div className="absolute -bottom-5 -left-5 glass-white rounded-2xl shadow-lg shadow-blue-100 px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-xl">🦷</div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide">Matrícula</p>
                <p className="text-sm font-black text-slate-800">1033652489</p>
              </div>
            </div>

            {/* Badge — top right */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-2xl shadow-lg px-4 py-3">
              <p className="text-[10px] text-blue-200 uppercase tracking-wide">Reseñas</p>
              <div className="flex items-center gap-1">
                <span className="text-xl font-black">5.0</span>
                <span className="text-yellow-300 text-sm">★</span>
              </div>
            </div>

            {/* Badge — right middle */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 glass-blue rounded-2xl px-3 py-2 shadow-sm border border-blue-200">
              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Fundación</p>
              <p className="text-xs font-bold text-slate-800 leading-tight max-w-[90px]">Uni. Autónoma<br/>Américas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[9px] text-slate-300 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-200 to-transparent" />
      </div>
    </section>
  );
}
