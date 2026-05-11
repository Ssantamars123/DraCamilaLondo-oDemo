"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { Star, Building2, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: "Valentina García",     role: "Ortodoncia",          text: "La Dra. Camila transformó mi sonrisa completamente. Su paciencia es única. En 18 meses mis dientes quedaron perfectos.", stars: 5, ini: "V", color: "bg-blue-600" },
  { name: "Andrés Martínez",      role: "Implantes",           text: "El implante es indistinguible. Jamás pensé que volvería a sonreír con confianza. Increíble trabajo.", stars: 5, ini: "A", color: "bg-indigo-600" },
  { name: "María Fernanda López", role: "Blanqueamiento",      text: "Rápido, sin dolor y resultados espectaculares. La mejor inversión que he hecho en mi sonrisa.", stars: 5, ini: "M", color: "bg-sky-600" },
  { name: "Carlos Restrepo",      role: "Odontología general", text: "Llevo 3 años siendo paciente. Ambiente agradable y siempre explica cada procedimiento con claridad.", stars: 5, ini: "C", color: "bg-blue-700" },
  { name: "Laura Ospina",         role: "Diseño de sonrisa",   text: "Las carillas cambiaron mi vida. Me siento más segura y sonrío con confianza por primera vez en años.", stars: 5, ini: "L", color: "bg-violet-600" },
  { name: "Santiago Morales",     role: "Alineadores",         text: "Elegí los alineadores por discreción. Seguimiento constante y resultados que superaron mis expectativas.", stars: 5, ini: "S", color: "bg-teal-600" },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".tes-header",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 82%" } }
    );
  }, { scope: ref });

  return (
    <section id="testimonios" ref={ref} className="py-28 bg-blue-50/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: "radial-gradient(#BFDBFE 1px, transparent 1px)", backgroundSize: "34px 34px" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="tes-header text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            56 reseñas verificadas <span className="text-gradient">en Doctoralia</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[1,2,3,4,5].map(s => <Star key={s} size={18} className="text-yellow-400 fill-yellow-400" />)}
            <span className="font-black text-slate-900 text-xl ml-2">5.0</span>
            <span className="text-slate-400 text-sm ml-1">· 56 reseñas</span>
          </div>
        </div>

        {/* Draggable carousel on mobile, grid on desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(37,99,235,0.12)" }}
              className="bg-white border border-blue-100 rounded-3xl p-6 flex flex-col gap-4 hover:border-blue-200 transition-colors duration-200"
            >
              <div className="flex gap-0.5">
                {Array.from({length: t.stars}).map((_,k) => <Star key={k} size={13} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-blue-50">
                <div className={`w-9 h-9 rounded-full ${t.color} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {t.ini}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{t.name}</p>
                  <p className="text-xs text-blue-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Framer drag scroll */}
        <div className="md:hidden overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -(testimonials.length - 1) * 300 }}
            dragElastic={0.1}
            className="flex gap-4 cursor-grab active:cursor-grabbing"
            style={{ width: `${testimonials.length * 290}px` }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="w-[270px] flex-shrink-0 bg-white border border-blue-100 rounded-3xl p-5 flex flex-col gap-3"
              >
                <div className="flex gap-0.5">
                  {Array.from({length: t.stars}).map((_,k) => <span key={k} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-blue-50">
                  <div className={`w-8 h-8 rounded-full ${t.color} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>{t.ini}</div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{t.name}</p>
                    <p className="text-[10px] text-blue-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-xs text-slate-400 mt-4">← Arrastra para ver más →</p>
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="https://www.doctoralia.co/camila-londono-galeano/odontologo/medellin"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 6px 20px rgba(37,99,235,0.15)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-white border border-blue-200 text-slate-700 font-semibold px-6 py-3 rounded-full text-sm"
          >
            <Building2 size={16} className="text-blue-500" />
            Ver todas las reseñas en Doctoralia
            <ArrowRight size={14} className="text-blue-500" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
