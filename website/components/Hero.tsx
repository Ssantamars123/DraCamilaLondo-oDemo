"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";
import { Calendar, MessageCircle, ArrowRight, Star, BadgeCheck } from "lucide-react";

const WA = "https://api.whatsapp.com/send?phone=573102481468&text=Hola,%20quiero%20agendar%20una%20cita";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef     = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Clip-reveal lines one by one
    tl.fromTo(".hero-line",
      { y: "115%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.1, stagger: 0.14 },
      0
    )
    .fromTo(".hero-sub",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      0.55
    )
    .fromTo(".hero-cta",
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
      0.75
    )
    .fromTo(".hero-stat",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.09 },
      0.9
    )
    .fromTo(imgRef.current,
      { scale: 1.08, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.3, ease: "power3.out" },
      0
    )
    .fromTo(".hero-badge",
      { opacity: 0, y: 16, scale: 0.85 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.6)" },
      0.9
    );

    // Subtle parallax on scroll
    gsap.to(imgRef.current, {
      yPercent: -8,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: sectionRef });

  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex overflow-hidden bg-white"
    >
      {/* ── LEFT PANEL ── */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-16 w-full md:w-[58%] lg:w-[55%]">

        {/* Pill badge */}
        <div className="hero-sub mb-8 inline-flex items-center gap-2.5 w-fit">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>
          <span className="text-blue-600 text-xs font-bold tracking-[0.18em] uppercase">
            Consultorios disponibles · Medellín
          </span>
        </div>

        {/* Headline — each line clipped independently */}
        <h1 className="font-black leading-[0.95] tracking-tight text-slate-900 mb-8"
          style={{ fontSize: "clamp(3.2rem, 7.5vw, 6.5rem)" }}>
          <span className="block overflow-hidden">
            <span className="hero-line block">Tu mejor</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block text-gradient">sonrisa</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">comienza aquí.</span>
          </span>
        </h1>

        {/* Sub */}
        <p className="hero-sub text-slate-500 text-lg leading-relaxed max-w-[440px] mb-10">
          Soy la <strong className="text-slate-800">Dra. Camila Londoño Galeano</strong>, odontóloga
          con <strong className="text-slate-800">10 años de experiencia</strong> y más de
          7,000 pacientes. Ortodoncia, estética e implantes en Belén La Palma.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-12">
          <motion.button
            className="hero-cta inline-flex items-center gap-2.5 bg-blue-600 text-white font-bold px-8 py-4 rounded-full text-[15px]"
            whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => go("#contacto")}
          >
            <Calendar size={16} />
            Agendar cita
            <ArrowRight size={15} />
          </motion.button>

          <motion.a
            className="hero-cta inline-flex items-center gap-2.5 border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-full text-[15px] hover:border-blue-300 hover:text-blue-700 transition-colors duration-200"
            href={WA}
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={17} />
            WhatsApp
          </motion.a>
        </div>

        {/* Stats row */}
        <div className="flex gap-10 pt-8 border-t border-slate-100">
          {[
            { val: "10+",  lbl: "Años de experiencia" },
            { val: "7K+",  lbl: "Pacientes atendidos"  },
            { val: "5.0",  lbl: "Calificación Doctoralia" },
          ].map((s) => (
            <div key={s.lbl} className="hero-stat flex flex-col gap-1">
              <span className="text-3xl font-black text-blue-600 leading-none">{s.val}</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-widest leading-tight">{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL — framed photo ── */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-[46%] lg:w-[48%] bg-blue-50">
        {/* Blue accent stripe */}
        <div className="absolute left-0 top-0 h-full w-10 bg-blue-600 z-10" />

        {/* Photo — framed, naturally proportioned */}
        <div
          ref={imgRef}
          className="absolute inset-0 flex items-end justify-center pl-10 pr-6 pb-0 pt-20"
        >
          <div className="relative w-full max-w-sm" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/DraCamila.png"
              alt="Dra. Camila Londoño Galeano — Odontóloga"
              fill
              className="object-cover rounded-t-[2.5rem]"
              style={{ objectPosition: "center top" }}
              priority
              sizes="40vw"
            />
          </div>
        </div>

        {/* Badge — matrícula */}
        <div className="hero-badge absolute bottom-12 left-14 z-20 bg-white rounded-2xl shadow-xl shadow-blue-100 px-5 py-4 flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
            <BadgeCheck size={22} />
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Matrícula profesional</p>
            <p className="text-sm font-black text-slate-800">1033652489</p>
          </div>
        </div>

        {/* Badge — rating */}
        <div className="hero-badge absolute top-28 right-8 z-20 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-300/40 px-5 py-4">
          <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold mb-1">Doctoralia</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black leading-none">5.0</span>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-yellow-300 fill-yellow-300" />)}
              </div>
              <span className="text-[10px] text-blue-200">56 reseñas</span>
            </div>
          </div>
        </div>

        {/* Badge — año */}
        <div className="hero-badge absolute top-1/2 left-14 -translate-y-1/2 z-20 bg-white border border-blue-100 rounded-2xl shadow-lg px-4 py-3 text-center">
          <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest block">Desde</span>
          <span className="text-2xl font-black text-slate-900 leading-none">2016</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-300 to-transparent" />
      </div>
    </section>
  );
}
