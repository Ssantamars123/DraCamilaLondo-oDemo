"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  { before: "/antes1.png", after: "/despues1.png", label: "Blanqueamiento dental",   desc: "Dientes hasta 8 tonos más blancos en una sola sesión." },
  { before: "/antes2.png", after: "/despues2.png", label: "Ortodoncia + Carillas",   desc: "Alineación completa y carillas de porcelana." },
  { before: "/antes3.png", after: "/despues3.png", label: "Diseño de Sonrisa",       desc: "Remodelado estético con alineación y pulido profesional." },
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
    gsap.fromTo(".res-card-0", { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".res-grid", start: "top 80%" } });
    gsap.fromTo(".res-card-1", { y:  60, opacity: 0 }, { y: 0,  opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".res-grid", start: "top 80%" }, delay: 0.12 });
    gsap.fromTo(".res-card-2", { x:  60, opacity: 0 }, { x: 0,  opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".res-grid", start: "top 80%" }, delay: 0.24 });
  }, { scope: ref });

  return (
    <section id="resultados" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, #DBEAFE 0%, transparent 70%)", filter: "blur(50px)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-5 shadow-sm"
          >
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Resultados reales</span>
          </motion.div>
          <div className="overflow-hidden">
            <div className="res-line text-4xl md:text-5xl font-display font-bold text-slate-900 mb-1">Arrastra y ve la</div>
          </div>
          <div className="overflow-hidden">
            <div className="res-line text-4xl md:text-5xl font-display font-bold text-gradient mb-4">transformación</div>
          </div>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Casos reales de pacientes de la Dra. Camila. Arrastra el slider para comparar.
          </p>
        </div>

        <div className="res-grid grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className={`res-card-${i} flex flex-col gap-4`}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                <BeforeAfterSlider before={c.before} after={c.after} label={c.label} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3"
              >
                <p className="text-slate-800 font-bold text-sm">{c.label}</p>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{c.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>

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
