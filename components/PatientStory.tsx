"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WA = "https://api.whatsapp.com/send?phone=573102481468&text=Hola,%20quiero%20saber%20m%C3%A1s%20sobre%20implantes";

export function PatientStory() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Photos reveal — before from left, after from right
    gsap.fromTo(".ps-before",
      { x: -80, opacity: 0, clipPath: "inset(0% 100% 0% 0%)" },
      {
        x: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power4.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
    gsap.fromTo(".ps-after",
      { x: 80, opacity: 0, clipPath: "inset(0% 0% 0% 100%)" },
      {
        x: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power4.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        delay: 0.15,
      }
    );
    gsap.fromTo(".ps-detail",
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 72%" },
        delay: 0.4,
      }
    );
    gsap.fromTo(".ps-text-line",
      { y: "110%", opacity: 0 },
      {
        y: "0%", opacity: 1, duration: 0.9, stagger: 0.12, ease: "power4.out",
        scrollTrigger: { trigger: ".ps-text-wrap", start: "top 78%" },
      }
    );
  }, { scope: ref });

  return (
    <section ref={ref} className="py-0 overflow-hidden bg-slate-950">

      {/* Top label strip */}
      <div className="flex items-center gap-4 px-8 pt-16 pb-10 max-w-7xl mx-auto">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.25em]">Caso de éxito — Transformación real</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">

        {/* ── PHOTO COMPARISON ── */}
        <div className="grid md:grid-cols-2 gap-3 mb-3">

          {/* BEFORE */}
          <div className="ps-before relative rounded-3xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/paciente1antes.png"
              alt="Paciente antes del tratamiento"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-black px-3 py-1.5 rounded-full tracking-[0.2em] uppercase">
                Antes
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Situación inicial</p>
              <p className="text-white text-base font-bold leading-snug">Pérdida severa de piezas dentales</p>
            </div>
          </div>

          {/* AFTER */}
          <div className="ps-after relative rounded-3xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/paciente1despues.png"
              alt="Paciente después del tratamiento con la Dra. Camila"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="inline-block bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-black px-3 py-1.5 rounded-full tracking-[0.2em] uppercase">
                Después
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-blue-300 text-xs uppercase tracking-widest font-bold mb-1">Resultado final</p>
              <p className="text-white text-base font-bold leading-snug">Rehabilitación oral total con implantes</p>
            </div>
          </div>
        </div>

        {/* ── BOTTOM ROW: detail + text ── */}
        <div className="grid md:grid-cols-2 gap-3">

          {/* Detail photo */}
          <div className="ps-detail relative rounded-3xl overflow-hidden h-72">
            <Image
              src="/paciente1despues2.png"
              alt="Detalle del resultado — implantes dentales"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-blue-300 text-[10px] font-bold uppercase tracking-widest">Detalle clínico</p>
              <p className="text-white text-sm font-semibold mt-0.5">Implantes de titanio — resultado impecable</p>
            </div>
          </div>

          {/* Text + CTA */}
          <div className="ps-text-wrap flex flex-col justify-center gap-6 bg-white/5 border border-white/10 rounded-3xl p-8">
            <Quote size={28} className="text-blue-400" />

            <div>
              <h2 className="font-display font-bold leading-[1.05] text-white mb-4"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                <span className="block overflow-hidden">
                  <span className="ps-text-line block">Recuperé mi</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="ps-text-line block text-gradient">sonrisa y mi</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="ps-text-line block">confianza.</span>
                </span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Rehabilitación oral completa con implantes de titanio. El paciente pasó de no poder
                masticar normalmente a tener una sonrisa funcional y estética de por vida.
                Tratamiento realizado en el consultorio de la Dra. Camila Londoño en Belén La Palma, Medellín.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2 border-t border-white/10">
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-black text-white leading-none">100%</span>
                <span className="text-[10px] text-white/30 uppercase tracking-widest">Satisfacción</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-black text-white leading-none">Titanio</span>
                <span className="text-[10px] text-white/30 uppercase tracking-widest">Material premium</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-black text-white leading-none">Vital.</span>
                <span className="text-[10px] text-white/30 uppercase tracking-widest">Cambio de vida</span>
              </div>
            </div>

            <motion.a
              href={WA}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-blue-600 text-white font-bold px-7 py-4 rounded-full text-sm w-fit"
              whileHover={{ scale: 1.04, boxShadow: "0 10px 32px rgba(37,99,235,0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={16} />
              Quiero este cambio
              <ArrowRight size={15} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
