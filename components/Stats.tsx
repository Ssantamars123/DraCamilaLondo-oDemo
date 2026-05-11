"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { Award, Users, Star, HeartHandshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10,   suffix: "+",   label: "Años de experiencia",   Icon: Award          },
  { value: 7000, suffix: "+",   label: "Pacientes atendidos",   Icon: Users          },
  { value: 56,   suffix: "",    label: "Reseñas verificadas",   Icon: Star           },
  { value: 5,    suffix: ".0",  label: "Calificación promedio", Icon: HeartHandshake },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".stats-section",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" } }
    );

    document.querySelectorAll(".stat-num").forEach(el => {
      const target = parseInt(el.getAttribute("data-target") || "0");
      gsap.fromTo(el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2.4,
          ease: "power2.out",
          snap: { innerText: target > 100 ? 50 : 1 },
          scrollTrigger: { trigger: el, start: "top 88%" },
        }
      );
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="py-0 overflow-hidden">
      <div className="stats-section bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.25em]">Resultados que hablan solos</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-slate-900 p-8 md:p-10 flex flex-col gap-3 group hover:bg-slate-800 transition-colors duration-300"
              >
                <s.Icon size={22} className="text-blue-400 mb-1 group-hover:text-blue-300 transition-colors duration-300" />

                <div className="flex items-end gap-0.5 leading-none">
                  <span className="stat-num text-5xl md:text-6xl font-black text-white leading-none" data-target={s.value}>
                    {s.value}
                  </span>
                  <span className="text-2xl font-black text-blue-400 pb-1 group-hover:text-blue-300 transition-colors duration-300">{s.suffix}</span>
                </div>

                <span className="text-white/40 text-xs font-medium uppercase tracking-widest">
                  {s.label}
                </span>

                <div className="w-8 h-0.5 bg-blue-600 mt-1 group-hover:w-14 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
