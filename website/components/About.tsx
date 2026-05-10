"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import {
  GraduationCap, Globe, CreditCard, Microscope,
  Calendar, AtSign, ArrowRight, Quote,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { Icon: GraduationCap, title: "F.U. Autónoma de las Américas", desc: "Formación de excelencia con enfoque clínico integral." },
  { Icon: Globe,         title: "Español e Inglés",              desc: "Atención bilingüe para pacientes locales e internacionales." },
  { Icon: CreditCard,    title: "Múltiples formas de pago",      desc: "Efectivo, tarjetas débito/crédito y transferencias." },
  { Icon: Microscope,    title: "Tecnología de punta",           desc: "Equipos modernos para diagnósticos precisos y sin dolor." },
];

export function About() {
  const ref    = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Photo reveal
    gsap.fromTo(imgRef.current,
      { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 },
      {
        clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.3, ease: "power4.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );

    // Text lines
    gsap.fromTo(".abt-line",
      { y: "110%", opacity: 0 },
      {
        y: "0%", opacity: 1, duration: 1, stagger: 0.14, ease: "power4.out",
        scrollTrigger: { trigger: ".abt-text", start: "top 78%" },
      }
    );

    // Parallax subtle on scroll
    gsap.to(imgRef.current, {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, { scope: ref });

  return (
    <section id="sobre-mi" ref={ref} className="py-0 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0 items-stretch min-h-[80vh] py-24">

        {/* LEFT — full-height photo */}
        <div className="relative flex items-stretch">
          <div ref={imgRef} className="relative w-full min-h-[480px] md:min-h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-100">
            <Image
              src="/DraCamila.png"
              alt="Dra. Camila Londoño Galeano"
              fill
              className="object-cover object-top"
            />
            {/* Blue accent at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(37,99,235,0.55) 0%, transparent 100%)" }} />

            {/* Year badge */}
            <div className="absolute bottom-8 left-8 text-white">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-blue-200 block mb-1">Ejerciendo desde</span>
              <span className="text-5xl font-black leading-none">2016</span>
            </div>

            {/* Quote card floating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute bottom-8 right-8 bg-white rounded-2xl shadow-xl px-5 py-4 max-w-[200px]"
            >
              <Quote size={14} className="text-blue-400 mb-2" />
              <p className="text-slate-700 text-xs font-medium leading-snug italic">
                "Mi pasión es devolverte la confianza de sonreír."
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — text */}
        <div className="abt-text flex flex-col justify-center gap-8 md:pl-16 py-8 md:py-0">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-7">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Sobre mí</span>
            </div>

            <h2 className="font-black leading-[1.0] tracking-tight text-slate-900 mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
              <span className="block overflow-hidden">
                <span className="abt-line block">Cuidando</span>
              </span>
              <span className="block overflow-hidden">
                <span className="abt-line block">sonrisas con</span>
              </span>
              <span className="block overflow-hidden">
                <span className="abt-line block text-gradient">pasión real.</span>
              </span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Soy la <strong className="text-slate-900">Dra. Camila Londoño Galeano</strong>, odontóloga
              con 10 años de experiencia y más de 7,000 pacientes en Medellín.
              Mi consultorio en Belén La Palma abrió en mayo de 2022.
            </p>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              Me especializo en ortodoncia, estética dental, implantes, periodoncia, endodoncia
              y cirugía oral. Atiendo en español e inglés, presencial y por videollamada.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-3">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ y: -3, borderColor: "#93C5FD" }}
                className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 transition-all duration-200 group"
              >
                <div className="mb-2 text-blue-600 group-hover:text-blue-700 transition-colors">
                  <c.Icon size={18} />
                </div>
                <p className="text-xs font-bold text-slate-800 leading-snug">{c.title}</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(37,99,235,0.3)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full text-sm"
            >
              <Calendar size={15} /> Agendar cita <ArrowRight size={14} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.instagram.com/dracamilalondono/"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-slate-200 text-slate-600 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-pink-300 hover:text-pink-600 transition-colors duration-200"
            >
              <AtSign size={15} /> Instagram
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
