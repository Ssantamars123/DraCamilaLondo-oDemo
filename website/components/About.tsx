"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import {
  GraduationCap, Globe, CreditCard, Microscope,
  Calendar, Instagram, ArrowRight, Quote,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { Icon: GraduationCap, title: "Fundación Uni. Autónoma de las Américas", desc: "Formación de excelencia con enfoque clínico integral." },
  { Icon: Globe,         title: "Español e Inglés",                         desc: "Atención bilingüe para pacientes locales e internacionales." },
  { Icon: CreditCard,    title: "Múltiples formas de pago",                  desc: "Efectivo, tarjetas débito/crédito y transferencias bancarias." },
  { Icon: Microscope,    title: "Tecnología de punta",                       desc: "Equipos modernos para diagnósticos precisos y sin dolor." },
];

export function About() {
  const ref    = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax on the image column while scrolling
    gsap.to(imgRef.current, {
      y: -60,
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
    <section id="sobre-mi" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — image mosaic (GSAP parallax) */}
        <div ref={imgRef}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
                className="relative h-64 rounded-3xl overflow-hidden shadow-xl shadow-blue-100"
              >
                <Image src="/DraCamila.png" alt="Dra. Camila" fill className="object-cover object-top" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="h-28 rounded-3xl bg-blue-600 flex flex-col items-center justify-center shadow-lg shadow-blue-200 gap-1"
              >
                <span className="text-4xl font-black text-white leading-none">2016</span>
                <span className="text-blue-200 text-xs tracking-widest uppercase">Desde</span>
              </motion.div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-28 rounded-3xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center gap-1"
              >
                <span className="text-4xl font-black text-blue-600 leading-none">7K+</span>
                <span className="text-slate-400 text-xs tracking-widest uppercase">Pacientes</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="h-64 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center">
                  <Calendar size={36} className="text-blue-600" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative -mt-4 mx-4 bg-white rounded-2xl shadow-xl shadow-blue-100/80 p-4 border border-blue-50 z-10"
          >
            <p className="text-sm text-slate-600 italic leading-snug">
              "Mi pasión es devolverte la confianza de sonreír."
            </p>
            <div className="flex items-center gap-2 mt-3">
              <Quote size={14} className="text-blue-400" />
              <p className="text-xs font-bold text-blue-700">Dra. Camila Londoño Galeano</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — text */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 w-fit"
          >
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Sobre mí</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
          >
            Cuidando sonrisas{" "}
            <span className="text-gradient">desde 2016</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            Soy la <strong className="text-slate-800">Dra. Camila Londoño Galeano</strong>, odontóloga
            con 10 años de experiencia y más de 7,000 pacientes en Medellín. Mi consultorio
            en Belén La Palma abrió en mayo de 2022.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-400 leading-relaxed"
          >
            Me especializo en ortodoncia, estética dental, implantes, periodoncia,
            endodoncia y cirugía oral. Atiendo en español e inglés, presencial y por videollamada.
          </motion.p>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.02, borderColor: "#93C5FD" }}
                className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 transition-colors duration-200"
              >
                <div className="mb-2 text-blue-600"><c.Icon size={20} /></div>
                <p className="text-xs font-bold text-slate-800 leading-snug">{c.title}</p>
                <p className="text-xs text-slate-500 mt-1 leading-snug">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(37,99,235,0.3)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full"
            >
              <Calendar size={16} /> Agendar cita <ArrowRight size={15} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.instagram.com/dracamilalondono/"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-blue-100 text-slate-600 font-semibold px-7 py-3.5 rounded-full hover:border-pink-300 hover:text-pink-600 transition-colors duration-200"
            >
              <Instagram size={16} /> Instagram
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
