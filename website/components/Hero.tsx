"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Calendar, MessageCircle, ArrowRight, ChevronDown,
  BadgeCheck, Star, Smile, GraduationCap,
} from "lucide-react";

/* ── Framer variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const wordReveal = {
  hidden: { y: "110%", opacity: 0 },
  show:   { y: "0%",   opacity: 1, transition: { duration: 0.75, ease: "easeOut" as const } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const blob1Ref   = useRef<HTMLDivElement>(null);
  const blob2Ref   = useRef<HTMLDivElement>(null);

  /* GSAP — blob float & badge pulse */
  useGSAP(() => {
    gsap.to(blob1Ref.current, { y: -28, x: 14,  duration: 7, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.to(blob2Ref.current, { y: 22,  x: -18, duration: 9, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.5 });
    gsap.to(".badge-pulse", {
      boxShadow: "0 0 0 8px rgba(37,99,235,0)",
      scale: 1,
      duration: 1.8,
      ease: "power2.out",
      repeat: -1,
    });
  }, { scope: sectionRef });

  /* Framer Motion — tilt on mouse */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-200, 200], [8, -8]),  { stiffness: 120, damping: 20 });
  const ry = useSpring(useTransform(mx, [-200, 200], [-8, 8]),  { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width  / 2);
    my.set(e.clientY - rect.top  - rect.height / 2);
  };
  const handleMouseLeave = () => { mx.set(0); my.set(0); };

  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white"
    >
      {/* Blobs (GSAP) */}
      <div ref={blob1Ref} className="absolute top-10 right-[8%] w-[540px] h-[540px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #DBEAFE 0%, #EFF6FF 40%, transparent 72%)" }} />
      <div ref={blob2Ref} className="absolute bottom-0 left-[4%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #BFDBFE 0%, #EFF6FF 50%, transparent 74%)" }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "radial-gradient(#93C5FD 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center py-20 z-10">

        {/* ── LEFT: motion stagger ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {/* Pill */}
          <motion.div variants={fadeUp}
            className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 w-fit"
          >
            <span className="badge-pulse relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
            </span>
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">
              Consultorio disponible · Medellín
            </span>
          </motion.div>

          {/* Headline — word-by-word (Framer) */}
          <h1 className="text-[clamp(2.8rem,6vw,4.8rem)] font-black text-slate-900 leading-[1.0] tracking-tight">
            {["Dra. Camila", "Londoño"].map(line => (
              <span key={line} className="clip block overflow-hidden">
                <motion.span variants={wordReveal} className="block">{line}</motion.span>
              </span>
            ))}
            <span className="clip block overflow-hidden">
              <motion.span variants={wordReveal} className="block text-gradient">Galeano</motion.span>
            </span>
          </h1>

          {/* Sub */}
          <motion.p variants={fadeUp} className="text-slate-500 text-lg leading-relaxed max-w-sm">
            Odontóloga con <strong className="text-slate-800">10 años de experiencia</strong> y más de{" "}
            <strong className="text-slate-800">7,000 pacientes</strong> transformados.
            Ortodoncia, estética e implantes.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(37,99,235,0.35)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => go("#contacto")}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-full"
            >
              <Calendar size={16} /> Agendar cita <ArrowRight size={15} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://api.whatsapp.com/send?phone=573102481468&text=Hola,%20quiero%20agendar%20una%20cita"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-blue-200 text-blue-700 font-bold px-8 py-4 rounded-full hover:border-blue-400 hover:bg-blue-50 transition-colors duration-200"
            >
              <MessageCircle size={17} /> WhatsApp
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="flex gap-8 pt-2 border-t border-blue-50">
            {[
              { val: "10+", lbl: "Años de exp." },
              { val: "7K+", lbl: "Pacientes" },
              { val: "5.0★", lbl: "56 reseñas" },
            ].map((s, i) => (
              <motion.div
                key={s.lbl}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                className="flex flex-col gap-0.5"
              >
                <span className="text-2xl font-black text-blue-600">{s.val}</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">{s.lbl}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Framer tilt card ── */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0,  scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[360px]">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-blue-100 to-blue-200 rotate-3 pointer-events-none" />
            <div className="absolute -inset-1 rounded-[2.8rem] border-2 border-blue-100 pointer-events-none" />

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-blue-200/70">
              <Image src="/DraCamila.png" alt="Dra. Camila Londoño Galeano" fill className="object-cover object-top" priority />
            </div>

            {/* Badge BL */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0,   y: 0  }}
              transition={{ delay: 1.1, duration: 0.6, ease: "backOut" }}
              className="absolute -bottom-5 -left-5 glass-white rounded-2xl shadow-lg shadow-blue-100 px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <BadgeCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide">Matrícula</p>
                <p className="text-sm font-black text-slate-800">1033652489</p>
              </div>
            </motion.div>

            {/* Badge TR */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0,  y: 0   }}
              transition={{ delay: 1.2, duration: 0.6, ease: "backOut" }}
              className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-2xl shadow-lg px-4 py-3"
            >
              <p className="text-[10px] text-blue-200 uppercase tracking-wide">Reseñas</p>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black">5.0</span>
                <Star size={14} className="text-yellow-300 fill-yellow-300" />
              </div>
            </motion.div>

            {/* Badge MR */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0  }}
              transition={{ delay: 1.3, duration: 0.6, ease: "backOut" }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 glass-blue rounded-2xl px-3 py-2 shadow-sm border border-blue-200"
            >
              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Desde</p>
              <p className="text-lg font-black text-slate-800">2016</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <ChevronDown size={16} className="text-slate-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}
