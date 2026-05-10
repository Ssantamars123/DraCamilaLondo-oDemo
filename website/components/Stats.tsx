"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10,    suffix: "+", label: "Años de experiencia",   icon: "🏆" },
  { value: 7000,  suffix: "+", label: "Pacientes atendidos",   icon: "😊" },
  { value: 56,    suffix: "",  label: "Reseñas verificadas",   icon: "⭐" },
  { value: 5,     suffix: ".0★",label: "Calificación promedio", icon: "💎" },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".stat-block",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      }
    );

    document.querySelectorAll(".stat-num").forEach(el => {
      const target = parseInt(el.getAttribute("data-target") || "0");
      gsap.fromTo(el,
        { innerText: 0 },
        {
          innerText: target, duration: 2, ease: "power2.out",
          snap: { innerText: target > 100 ? 10 : 1 },
          scrollTrigger: { trigger: el, start: "top 90%" },
        }
      );
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="py-16 bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="stat-block flex flex-col items-center gap-2 text-center p-6 bg-white rounded-3xl shadow-sm shadow-blue-100 border border-blue-50">
              <span className="text-3xl">{s.icon}</span>
              <div className="flex items-end gap-0.5">
                <span className="stat-num text-4xl font-black text-blue-600 leading-none" data-target={s.value}>
                  {s.value}
                </span>
                <span className="text-2xl font-black text-blue-400 leading-none pb-0.5">{s.suffix}</span>
              </div>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-widest leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
