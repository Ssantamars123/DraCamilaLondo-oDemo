"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const links = [
  { label: "Inicio",       href: "#inicio"      },
  { label: "Sobre mí",    href: "#sobre-mi"    },
  { label: "Servicios",   href: "#servicios"   },
  { label: "Resultados",  href: "#resultados"  },
  { label: "Testimonios", href: "#testimonios" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0,   opacity: 1  }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm shadow-blue-100/50 border-b border-blue-50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => go("#inicio")}
          className="flex flex-col leading-none"
        >
          <span className="text-[15px] font-extrabold text-slate-900 tracking-tight">Dra. Camila Londoño</span>
          <span className="text-[9px] text-blue-500 tracking-[0.22em] uppercase">Odontóloga · Medellín</span>
        </motion.button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center">
          {links.map(l => (
            <li key={l.href} className="relative">
              <button
                onClick={() => go(l.href)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150 ${
                  active === l.href ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {l.label}
                {active === l.href && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-blue-50 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 6px 24px rgba(37,99,235,0.3)" }}
          whileTap={{ scale: 0.96 }}
          onClick={() => go("#contacto")}
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-full"
        >
          <Calendar size={14} />
          Agendar cita
          <ArrowRight size={13} className="opacity-70" />
        </motion.button>

        {/* Hamburger */}
        <button className="md:hidden p-2 flex flex-col gap-[5px]" onClick={() => setOpen(!open)}>
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0  }} className="block w-5 h-0.5 bg-slate-800 origin-center" />
          <motion.span animate={{ opacity: open ? 0 : 1 }}                   className="block w-5 h-0.5 bg-slate-800" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="block w-5 h-0.5 bg-slate-800 origin-center" />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white border-b border-blue-50"
          >
            <ul className="px-6 py-4 flex flex-col gap-3">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button onClick={() => go(l.href)} className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                    {l.label}
                  </button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="pt-1">
                <button onClick={() => go("#contacto")} className="w-full bg-blue-600 text-white text-sm font-bold py-3 rounded-full">
                  Agendar cita
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
