"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  { before: "/paciente1antes.png", after: "/paciente1despues.png", label: "Implantes completos",   desc: "Rehabilitación oral total. De cero dientes a una sonrisa perfecta y funcional.", featured: true  },
  { before: "/antes1.png",         after: "/despues1.png",         label: "Blanqueamiento dental", desc: "Dientes hasta 8 tonos más blancos en una sola sesión.", featured: false },
  { before: "/antes2.png",         after: "/despues2.png",         label: "Ortodoncia + Carillas", desc: "Alineación completa y carillas de porcelana.", featured: false },
  { before: "/antes3.png",         after: "/despues3.png",         label: "Diseño de Sonrisa",     desc: "Remodelado estético con alineación y pulido profesional.", featured: false },
];

export function Results() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".res-line",
      { y: "110%", opacity: 0 },
      {
        y: "0%", opacity: 1, duration: 0.9, stagger: 0.12, ease: "power4.out",
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
      }
    );

    gsap.fromTo(".res-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".res-grid", start: "top 82%" },
      }
    );

    gsap.fromTo(".res-highlight",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, scale: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ".res-highlight", start: "top 82%" },
      }
    );
  }, { scope: ref });

  const [featured, ...rest] = cases;

  return (
    <section id="resultados" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6 shadow-sm"
          >
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Resultados reales</span>
          </motion.div>
          <div className="overflow-hidden">
            <div className="res-line text-4xl md:text-5xl font-black text-slate-900 mb-1">Arrastra y ve la</div>
          </div>
          <div className="overflow-hidden">
            <div className="res-line text-4xl md:text-5xl font-black text-gradient mb-4">transformación</div>
          </div>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Casos reales de pacientes de la Dra. Camila. Arrastra el slider para comparar.
          </p>
        </div>

        {/* ── FEATURED CASE — paciente1 ── */}
        <motion.div
          className="res-highlight mb-16 rounded-3xl overflow-hidden border border-blue-100 shadow-2xl shadow-blue-50"
        >
          {/* Badge */}
          <div className="bg-blue-600 px-8 py-3 flex items-center gap-3">
            <Sparkles size={16} className="text-blue-200" />
            <span className="text-white text-xs font-bold tracking-widest uppercase">Caso destacado — Transformación completa</span>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Slider */}
            <div className="relative">
              <BeforeAfterSlider
                before={featured.before}
                after={featured.after}
                label={featured.label}
              />
            </div>

            {/* Detail photo + text */}
            <div className="flex flex-col">
              {/* Close-up detail */}
              <div className="relative h-64 md:h-auto md:flex-1 overflow-hidden">
                <Image
                  src="/paciente1despues2.png"
                  alt="Detalle implantes — resultado final"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-blue-300 mb-1">Detalle del resultado</p>
                  <p className="text-sm font-semibold leading-snug max-w-[220px]">Implantes de titanio — sonrisa natural y funcional de por vida</p>
                </div>
              </div>

              {/* Text block */}
              <div className="bg-slate-900 p-7 flex flex-col gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2">Implantes completos</p>
                  <h3 className="text-white font-black text-2xl leading-tight mb-3">
                    De una boca sin dientes<br />
                    <span className="text-gradient">a una sonrisa perfecta.</span>
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Rehabilitación oral total con implantes de titanio. El paciente recuperó
                    su sonrisa, su confianza y su calidad de vida. Resultado duradero y completamente natural.
                  </p>
                </div>
                <motion.a
                  href="https://api.whatsapp.com/send?phone=573102481468&text=Hola,%20quiero%20saber%20m%C3%A1s%20sobre%20implantes"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3.5 rounded-full text-sm w-fit"
                  whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(37,99,235,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle size={15} />
                  Quiero este resultado
                  <ArrowRight size={14} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── REST OF CASES grid ── */}
        <div className="res-grid grid md:grid-cols-3 gap-7">
          {rest.map((c, i) => (
            <div key={i} className="res-card flex flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <BeforeAfterSlider before={c.before} after={c.after} label={c.label} />
              </motion.div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3">
                <p className="text-slate-800 font-bold text-sm">{c.label}</p>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="text-center mt-14">
          <motion.a
            href="https://api.whatsapp.com/send?phone=573102481468&text=Hola,%20quiero%20saber%20m%C3%A1s%20sobre%20los%20tratamientos"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(37,99,235,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold px-10 py-4 rounded-full"
          >
            <MessageCircle size={18} />
            Quiero mi transformación
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowRight size={16} />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
