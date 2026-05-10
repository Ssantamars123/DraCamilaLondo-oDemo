"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import {
  AlignCenter, Sparkles, Anchor, ClipboardList,
  Gem, Heart, Microscope, Scissors, Moon, ArrowRight,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services: {
  Icon: LucideIcon; title: string; desc: string;
  price: string | null; tag: string | null;
  color: string; light: string;
}[] = [
  { Icon: AlignCenter,   title: "Ortodoncia",              desc: "Convencional, invisible y autoligado. Alineamos tu sonrisa de forma progresiva.",           price: null,             tag: "Más solicitado", color: "from-blue-500 to-blue-700",   light: "bg-blue-50 text-blue-600"    },
  { Icon: Sparkles,      title: "Blanqueamiento & Diseño", desc: "Blanqueamiento profesional y diseño personalizado. Resultados visibles desde la 1ª sesión.", price: null,             tag: null,             color: "from-sky-400 to-blue-600",    light: "bg-sky-50 text-sky-600"      },
  { Icon: Anchor,        title: "Implantes Dentales",      desc: "Reemplaza dientes perdidos con implantes de titanio para una mordida natural de por vida.",  price: null,             tag: null,             color: "from-indigo-500 to-blue-700", light: "bg-indigo-50 text-indigo-600" },
  { Icon: ClipboardList, title: "Consulta Inicial",        desc: "Evaluación completa de tu salud oral con diagnóstico y plan de tratamiento personalizado.",  price: "$80.000 COP",    tag: "Precio fijo",    color: "from-cyan-500 to-blue-600",   light: "bg-cyan-50 text-cyan-700"    },
  { Icon: Gem,           title: "Estética Dental",         desc: "Carillas de porcelana, coronas y remodelado. El look dental que siempre soñaste.",           price: null,             tag: "Nuevo",          color: "from-violet-500 to-blue-700", light: "bg-violet-50 text-violet-600" },
  { Icon: Heart,         title: "Periodoncia",             desc: "Tratamiento de encías, injertos gingivales y regeneración ósea para una base dental sana.",  price: null,             tag: null,             color: "from-rose-400 to-pink-600",   light: "bg-rose-50 text-rose-600"    },
  { Icon: Microscope,    title: "Endodoncia",              desc: "Tratamientos de conductos sin dolor para salvar tu diente y eliminar la infección.",          price: null,             tag: null,             color: "from-teal-500 to-blue-600",   light: "bg-teal-50 text-teal-600"    },
  { Icon: Scissors,      title: "Cirugía Oral",            desc: "Extracciones, muelas del juicio y procedimientos quirúrgicos con máxima comodidad.",         price: null,             tag: null,             color: "from-blue-600 to-blue-800",   light: "bg-blue-50 text-blue-700"    },
  { Icon: Moon,          title: "Férula para Bruxismo",    desc: "Protector dental personalizado para evitar el desgaste por rechinamiento nocturno.",         price: null,             tag: null,             color: "from-amber-400 to-orange-500",light: "bg-amber-50 text-amber-600"  },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo(".svc-header",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 82%" } }
    );
  }, { scope: ref });

  return (
    <section id="servicios" ref={ref} className="py-28 bg-blue-50/40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: "radial-gradient(#DBEAFE 1.5px, transparent 1.5px)", backgroundSize: "38px 38px" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="svc-header text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Todo lo que tu boca <span className="text-gradient">necesita</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Desde consultas preventivas hasta cirugía oral. Un solo lugar, atención completa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(37,99,235,0.12)" }}
              className="group relative bg-white rounded-3xl border border-blue-50 p-7 overflow-hidden transition-colors duration-300 hover:border-blue-200"
            >
              {/* Gradient sweep */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${s.color} rounded-3xl`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Tag */}
              {s.tag && (
                <span className="absolute top-5 right-5 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              )}

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`w-14 h-14 rounded-2xl ${s.light} flex items-center justify-center mb-5 border border-current/10`}
              >
                <s.Icon size={24} />
              </motion.div>

              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-200 leading-snug">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>

              {s.price && (
                <div className="mt-3 inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
                  <span className="text-blue-700 font-black text-sm">{s.price}</span>
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-center gap-1.5 text-blue-600 text-xs font-bold"
              >
                Consultar <ArrowRight size={13} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
