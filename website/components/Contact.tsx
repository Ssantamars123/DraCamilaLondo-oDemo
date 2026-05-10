"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-left",
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        ".contact-right",
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
        }
      );
    },
    { scope: containerRef }
  );

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/60 focus:bg-white/10 transition-all duration-200";

  return (
    <section
      id="contacto"
      ref={containerRef}
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #060C1A 0%, #0D1B35 100%)" }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(43,126,255,0.15) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(43,126,255,0.1) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start z-10">
        {/* Left */}
        <div className="contact-left flex flex-col gap-8 text-white">
          <div>
            <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">Contacto</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Agenda tu cita<br />
              <span className="gradient-text">hoy mismo</span>
            </h2>
            <p className="text-blue-100/60 text-lg leading-relaxed">
              Escríbenos y en menos de 24 horas confirmamos tu cita. Tu sonrisa no puede esperar.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: "📍", label: "Dirección", value: "Medellín, Antioquia, Colombia" },
              { icon: "📞", label: "Teléfono", value: "+57 300 000 0000" },
              { icon: "📸", label: "Instagram", value: "@dracamilalondono" },
              { icon: "🕐", label: "Horario", value: "Lun – Vie: 8am – 6pm | Sáb: 8am – 1pm" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 glass rounded-2xl px-4 py-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-blue-300/60 text-xs font-semibold uppercase tracking-widest">{item.label}</p>
                  <p className="text-white text-sm mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] active:scale-95 w-fit"
          >
            <span className="text-xl">💬</span>
            Escríbenos por WhatsApp
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Right: form */}
        <div className="contact-right">
          <div className="glass rounded-3xl p-8 border border-white/10">
            {!sent ? (
              <>
                <h3 className="text-lg font-bold text-white mb-6">Solicitar cita</h3>
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-semibold text-blue-300/60 mb-1.5 uppercase tracking-widest">Nombre</label>
                      <input type="text" placeholder="Tu nombre" className={inputClass}
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-semibold text-blue-300/60 mb-1.5 uppercase tracking-widest">Teléfono</label>
                      <input type="tel" placeholder="+57 300 000 0000" className={inputClass}
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-blue-300/60 mb-1.5 uppercase tracking-widest">Correo</label>
                    <input type="email" placeholder="tu@email.com" className={inputClass}
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-blue-300/60 mb-1.5 uppercase tracking-widest">Servicio</label>
                    <select className={inputClass} value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}>
                      <option value="" className="bg-slate-900">Seleccionar servicio</option>
                      <option className="bg-slate-900">Ortodoncia</option>
                      <option className="bg-slate-900">Blanqueamiento Dental</option>
                      <option className="bg-slate-900">Implantes Dentales</option>
                      <option className="bg-slate-900">Odontología General</option>
                      <option className="bg-slate-900">Estética Dental</option>
                      <option className="bg-slate-900">Cirugía Oral</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-blue-300/60 mb-1.5 uppercase tracking-widest">Mensaje</label>
                    <textarea placeholder="Cuéntanos brevemente sobre tu caso..." rows={3}
                      className={`${inputClass} resize-none`} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>

                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full bg-blue-600 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(43,126,255,0.4)] active:scale-95 mt-2 flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Solicitar cita
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-3xl">
                  ✅
                </div>
                <h3 className="text-xl font-bold text-white">¡Solicitud enviada!</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed max-w-xs">
                  Te responderemos en menos de 24 horas para confirmar tu cita.
                </p>
                <button onClick={() => setSent(false)} className="text-blue-400 text-sm font-semibold underline underline-offset-2">
                  Enviar otra solicitud
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
