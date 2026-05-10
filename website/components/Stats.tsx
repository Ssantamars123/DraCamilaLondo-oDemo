"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { Award, Users, Star, HeartHandshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10,   suffix: "+",   label: "Años de experiencia",   Icon: Award,          color: "from-blue-500 to-blue-700" },
  { value: 7000, suffix: "+",   label: "Pacientes atendidos",   Icon: Users,          color: "from-sky-400  to-blue-600" },
  { value: 56,   suffix: "",    label: "Reseñas verificadas",   Icon: Star,           color: "from-indigo-500 to-blue-700" },
  { value: 5,    suffix: ".0★", label: "Calificación promedio", Icon: HeartHandshake, color: "from-blue-400 to-cyan-500" },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Counter roll-up with GSAP
    document.querySelectorAll(".stat-num").forEach(el => {
      const target = parseInt(el.getAttribute("data-target") || "0");
      gsap.fromTo(el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2.2,
          ease: "power2.out",
          snap: { innerText: target > 100 ? 50 : 1 },
          scrollTrigger: { trigger: el, start: "top 88%" },
        }
      );
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="py-16 bg-blue-50 border-y border-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(37,99,235,0.15)" }}
              className="flex flex-col items-center gap-3 text-center p-6 bg-white rounded-3xl shadow-sm shadow-blue-100 border border-blue-50"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md text-white`}>
                <s.Icon size={22} />
              </div>

              <div className="flex items-end gap-0.5 leading-none">
                <span className="stat-num text-4xl font-black text-blue-600" data-target={s.value}>
                  {s.value}
                </span>
                <span className="text-xl font-black text-blue-400 pb-0.5">{s.suffix}</span>
              </div>

              <span className="text-xs text-slate-500 font-medium uppercase tracking-widest leading-tight">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
