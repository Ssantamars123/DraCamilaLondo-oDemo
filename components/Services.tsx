"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import {
  AlignCenter, Sparkles, Anchor, ClipboardList,
  Gem, Heart, Microscope, Scissors, Moon, ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services: {
  Icon: LucideIcon; title: string; desc: string;
  price: string | null; tag: string | null; num: string;
}[] = [
  { num: "01", Icon: AlignCenter,   title: "Ortodoncia",              desc: "Convencional, invisible y autoligado. Alineamos tu sonrisa de forma progresiva y precisa.",          price: null,          tag: "Más solicitado" },
  { num: "02", Icon: Sparkles,      title: "Blanqueamiento & Diseño", desc: "Blanqueamiento profesional y diseño personalizado. Resultados visibles desde la primera sesión.",     price: null,          tag: null             },
  { num: "03", Icon: Anchor,        title: "Implantes Dentales",      desc: "Reemplaza dientes perdidos con implantes de titanio. Mordida natural, solución de por vida.",         price: null,          tag: null             },
  { num: "04", Icon: ClipboardList, title: "Consulta Inicial",        desc: "Evaluación completa de tu salud oral con diagnóstico y plan de tratamiento totalmente personalizado.", price: "$80.000 COP",  tag: "Precio fijo"    },
  { num: "05", Icon: Gem,           title: "Estética Dental",         desc: "Carillas de porcelana, coronas y remodelado. El look dental que siempre soñaste, hecho realidad.",   price: null,          tag: null             },
  { num: "06", Icon: Heart,         title: "Periodoncia",             desc: "Tratamiento de encías, injertos gingivales y regeneración ósea para una base dental sana.",          price: null,          tag: null             },
  { num: "07", Icon: Microscope,    title: "Endodoncia",              desc: "Tratamientos de conductos sin dolor para salvar tu diente y eliminar la infección definitivamente.",  price: null,          tag: null             },
  { num: "08", Icon: Scissors,      title: "Cirugía Oral",            desc: "Extracciones, muelas del juicio y procedimientos quirúrgicos con máxima comodidad y seguridad.",     price: null,          tag: null             },
  { num: "09", Icon: Moon,          title: "Férula para Bruxismo",    desc: "Protector dental personalizado para evitar el desgaste por rechinamiento nocturno.",                 price: null,          tag: null             },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".svc-title-line",
      { y: "110%", opacity: 0 },
      {
        y: "0%", opacity: 1, duration: 1, stagger: 0.13, ease: "power4.out",
        scrollTrigger: { trigger: ".svc-header-wrap", start: "top 80%" },
      }
    );
    gsap.fromTo(".svc-row",
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "power3.out",
        scrollTrigger: { trigger: ".svc-list", start: "top 82%" },
      }
    );
  }, { scope: ref });

  return (
    <section id="servicios" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="svc-header-wrap grid md:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Tratamientos</span>
            </div>
            <h2 className="font-display font-bold leading-[1.0] text-slate-900"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}>
              <span className="block overflow-hidden">
                <span className="svc-title-line block">Todo lo que</span>
              </span>
              <span className="block overflow-hidden">
                <span className="svc-title-line block">tu sonrisa</span>
              </span>
              <span className="block overflow-hidden">
                <span className="svc-title-line block text-gradient">necesita.</span>
              </span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg leading-relaxed md:mb-2 max-w-sm">
            Un solo lugar con atención integral. Desde la primera consulta hasta el resultado final,
            estás en manos expertas.
          </p>
        </div>

        {/* Service list */}
        <div className="svc-list border-t border-slate-100">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="svc-row group flex items-center gap-6 md:gap-10 py-6 border-b border-slate-100 cursor-default"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Number */}
              <span className="text-[11px] font-bold text-slate-300 tracking-widest w-8 flex-shrink-0 group-hover:text-blue-400 transition-colors duration-300">
                {s.num}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                <s.Icon size={19} className="text-blue-500 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-200">
                    {s.title}
                  </h3>
                  {s.tag && (
                    <span className="bg-blue-600 text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full tracking-widest uppercase">
                      {s.tag}
                    </span>
                  )}
                  {s.price && (
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {s.price}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm mt-0.5 leading-snug hidden md:block">{s.desc}</p>
              </div>

              {/* Arrow */}
              <motion.div
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300"
                whileHover={{ rotate: 45 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ArrowUpRight size={16} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-blue-50 border border-blue-100 rounded-3xl px-8 py-7">
          <div>
            <p className="font-black text-slate-900 text-lg">¿No sabes qué tratamiento necesitas?</p>
            <p className="text-slate-500 text-sm mt-1">Agenda una consulta inicial por $80.000 COP y lo descubrimos juntos.</p>
          </div>
          <motion.button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-full whitespace-nowrap flex-shrink-0"
            whileHover={{ scale: 1.04, boxShadow: "0 10px 32px rgba(37,99,235,0.35)" }}
            whileTap={{ scale: 0.97 }}
          >
            Agendar consulta
            <ArrowUpRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
