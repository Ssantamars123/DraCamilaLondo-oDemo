"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";
import { Calendar, MessageCircle, ArrowRight, Star, BadgeCheck } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

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

    // Mobile image — clip-path reveal idéntico a About images
    const mobileImg = sectionRef.current?.querySelector(".hero-mobile-img");
    if (mobileImg) {
      gsap.fromTo(mobileImg,
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 },
        {
          clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.3, ease: "power4.out",
          scrollTrigger: { trigger: mobileImg, start: "top 75%" },
        }
      );
    }
  }, { scope: sectionRef });

  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-white"
    >
      {/* ── LEFT PANEL ── */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-12 md:pb-16 w-full md:w-[58%] lg:w-[55%]">

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

        {/* Headline — editorial serif, italic accent on key word */}
        <h1 className="font-display font-bold leading-[0.92] text-slate-900 mb-8"
          style={{ fontSize: "clamp(3.4rem, 7.8vw, 6.8rem)" }}>
          <span className="block overflow-hidden">
            <span className="hero-line block">Tu mejor</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block italic font-light text-gradient">sonrisa</span>
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

        {/* CTAs — magnetic premium */}
        <div className="flex flex-wrap gap-3 mb-12">
          <Magnetic strength={0.3}>
            <motion.button
              className="hero-cta inline-flex items-center gap-2.5 bg-slate-900 text-white font-semibold px-8 py-4 rounded-full text-[15px] shadow-lg shadow-slate-900/20"
              whileHover={{ boxShadow: "0 18px 50px rgba(15,23,42,0.35)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => go("#contacto")}
            >
              <Calendar size={16} />
              Agendar cita
              <ArrowRight size={15} />
            </motion.button>
          </Magnetic>

          <Magnetic strength={0.25}>
            <motion.a
              className="hero-cta inline-flex items-center gap-2.5 border border-slate-300 text-slate-700 font-medium px-8 py-4 rounded-full text-[15px] hover:border-slate-900 hover:text-slate-900 transition-colors duration-200"
              href={WA}
              target="_blank" rel="noopener noreferrer"
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={17} />
              WhatsApp
            </motion.a>
          </Magnetic>
        </div>

        {/* Stats row */}
        <div className="flex gap-10 pt-8 border-t border-slate-100">
          {[
            { val: "10+",  lbl: "Años de experiencia" },
            { val: "7K+",  lbl: "Pacientes atendidos"  },
            { val: "5.0",  lbl: "Calificación Doctoralia" },
          ].map((s) => (
            <div key={s.lbl} className="hero-stat flex flex-col gap-1">
              <span className="font-display text-4xl font-semibold text-slate-900 leading-none">{s.val}</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-widest leading-tight">{s.lbl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE IMAGE — visible solo < md, debajo del contenido ── */}
      <div className="hero-mobile-img md:hidden relative w-full h-[60vh] min-h-[420px] bg-white overflow-hidden grain will-change-transform">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 50%, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0.04) 50%, rgba(255,255,255,0) 78%)",
          }}
        />
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] w-[70%] opacity-[0.07] pointer-events-none"
          viewBox="0 0 200 220" fill="none" aria-hidden
        >
          <path
            d="M100 10C140 10 175 30 175 75c0 35-12 60-18 95-5 30-15 40-30 40-12 0-15-25-27-25s-15 25-27 25c-15 0-25-10-30-40C37 135 25 110 25 75 25 30 60 10 100 10Z"
            fill="#2563eb"
          />
        </svg>
        <div className="absolute inset-x-4 top-4 bottom-4 rounded-3xl overflow-hidden bg-slate-50">
          <Image
            src="/DraCamila.png"
            alt="Dra. Camila Londoño Galeano — Odontóloga"
            fill
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
            sizes="100vw"
          />
        </div>
      </div>

      {/* ── RIGHT PANEL — full-height image (desktop only) ── */}
      {/* seamless white bg, dental-themed creative composition */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-[46%] lg:w-[48%] bg-white overflow-hidden grain">

        {/* Layered radial glows — depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(55% 50% at 60% 50%, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0.04) 50%, rgba(255,255,255,0) 78%), radial-gradient(40% 35% at 25% 80%, rgba(56,189,248,0.10) 0%, rgba(255,255,255,0) 70%)",
          }}
        />

        {/* Tooth-shape soft blob behind subject */}
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] w-[78%] opacity-[0.07] pointer-events-none"
          viewBox="0 0 200 220" fill="none" aria-hidden
        >
          <path
            d="M100 10C140 10 175 30 175 75c0 35-12 60-18 95-5 30-15 40-30 40-12 0-15-25-27-25s-15 25-27 25c-15 0-25-10-30-40C37 135 25 110 25 75 25 30 60 10 100 10Z"
            fill="#2563eb"
          />
        </svg>

        {/* Dotted ring — orbit accent */}
        <div className="absolute top-24 right-12 w-32 h-32 rounded-full border-2 border-dashed border-blue-200/60 pointer-events-none animate-[spin_40s_linear_infinite]" />

        <div ref={imgRef} className="absolute left-0 right-0 top-28 bottom-28 px-8">
          <Image
            src="/DraCamila.png"
            alt="Dra. Camila Londoño Galeano — Odontóloga"
            fill
            className="object-contain"
            style={{ objectPosition: "center 65%" }}
            priority
            sizes="48vw"
          />
        </div>

{/* Smile-curve SVG arc — subtle accent under subject */}
        <svg
          className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[75%] pointer-events-none opacity-60"
          viewBox="0 0 300 40" fill="none" aria-hidden
        >
          <path d="M5 5 Q150 55 295 5" stroke="url(#smileGrad)" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 6" />
          <defs>
            <linearGradient id="smileGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
              <stop offset="50%" stopColor="#2563eb" stopOpacity="1" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Single unified pill — bottom of image, all credentials grouped */}
        <div className="hero-badge absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md rounded-full shadow-xl shadow-blue-200/40 ring-1 ring-slate-100 px-6 py-3 flex items-center gap-5 whitespace-nowrap">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <span className="text-sm font-black text-slate-900">5.0</span>
            <span className="text-[10px] text-slate-400 font-medium">Doctoralia</span>
          </div>

          <span className="h-5 w-px bg-slate-200" />

          {/* Matrícula */}
          <div className="flex items-center gap-1.5">
            <BadgeCheck size={14} className="text-blue-600" />
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">M.P.</span>
            <span className="text-sm font-black text-slate-900">1033652489</span>
          </div>

          <span className="h-5 w-px bg-slate-200" />

          {/* Año */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Desde</span>
            <span className="text-sm font-black text-slate-900">2016</span>
          </div>
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
