"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const links = [
  { label: "Inicio",      href: "#inicio"      },
  { label: "Sobre mí",   href: "#sobre-mi"    },
  { label: "Servicios",  href: "#servicios"   },
  { label: "Resultados", href: "#resultados"  },
  { label: "Testimonios",href: "#testimonios" },
];

export function Navbar() {
  const navRef   = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.4 }
    );
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm shadow-blue-100/50 border-b border-blue-50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go("#inicio")} className="flex flex-col leading-none">
          <span className="text-[15px] font-extrabold text-slate-900 tracking-tight">Dra. Camila Londoño</span>
          <span className="text-[9px] text-blue-500 tracking-[0.22em] uppercase">Odontóloga · Medellín</span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center">
          {links.map(l => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-150"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("#contacto")}
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
        >
          Agendar cita <span className="opacity-70 text-xs">→</span>
        </button>

        {/* Hamburger */}
        <button className="md:hidden p-2 flex flex-col gap-[5px]" onClick={() => setOpen(!open)}>
          <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-b border-blue-50 ${open ? "max-h-72" : "max-h-0"}`}>
        <ul className="px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <li key={l.href}>
              <button onClick={() => go(l.href)} className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors">
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-1">
            <button onClick={() => go("#contacto")} className="w-full bg-blue-600 text-white text-sm font-bold py-3 rounded-full hover:bg-blue-700 transition-colors">
              Agendar cita
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
