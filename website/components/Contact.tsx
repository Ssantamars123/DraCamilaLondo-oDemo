"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WA = "https://api.whatsapp.com/send?phone=573102481468&text=Hola,%20quiero%20agendar%20una%20cita%20con%20la%20Dra.%20Camila";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  useGSAP(() => {
    gsap.fromTo(".con-left",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" } }
    );
    gsap.fromTo(".con-right",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" } }
    );
  }, { scope: ref });

  const input = "w-full bg-blue-50/60 border border-blue-100 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-200";

  return (
    <section id="contacto" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      {/* Blue blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #DBEAFE 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start relative z-10">

        {/* LEFT */}
        <div className="con-left flex flex-col gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-5">
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Contacto</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
              Agenda tu cita<br /><span className="text-gradient">hoy mismo</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Escríbenos y en menos de 24 horas confirmamos tu cita. También puedes llegar directamente al consultorio.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { icon: "📍", label: "Dirección",   value: "Av. 80 #28-90, Belén La Palma, Medellín" },
              { icon: "📞", label: "Teléfono",    value: "310 2481468" },
              { icon: "📸", label: "Instagram",   value: "@dracamilalondono" },
              { icon: "🕐", label: "Horario",     value: "Lun – Vie: 8am – 6pm | Sáb: 8am – 1pm" },
              { icon: "💳", label: "Pagos",       value: "Efectivo, tarjetas, transferencias" },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-3 bg-blue-50/60 border border-blue-100 rounded-2xl px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-all duration-150">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{item.label}</p>
                  <p className="text-slate-700 text-sm font-medium mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-green-200 active:scale-95 w-fit"
          >
            <span className="text-xl">💬</span>
            Escríbir por WhatsApp
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* RIGHT — form */}
        <div className="con-right">
          <div className="bg-white rounded-3xl border border-blue-100 shadow-2xl shadow-blue-50 p-8">
            {!sent ? (
              <>
                <h3 className="text-xl font-black text-slate-900 mb-6">Solicitar cita</h3>
                <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1.5">Nombre</label>
                      <input type="text" placeholder="Tu nombre completo" className={input}
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1.5">Teléfono</label>
                      <input type="tel" placeholder="310 0000000" className={input}
                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1.5">Correo</label>
                    <input type="email" placeholder="tu@email.com" className={input}
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1.5">Servicio</label>
                    <select className={input} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      <option value="">Seleccionar servicio</option>
                      <option>Consulta inicial ($80.000 COP)</option>
                      <option>Ortodoncia</option>
                      <option>Blanqueamiento dental</option>
                      <option>Implantes dentales</option>
                      <option>Estética dental / Carillas</option>
                      <option>Periodoncia</option>
                      <option>Endodoncia</option>
                      <option>Cirugía oral</option>
                      <option>Férula para bruxismo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1.5">Mensaje</label>
                    <textarea placeholder="Cuéntanos brevemente tu caso..." rows={3}
                      className={`${input} resize-none`} value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit"
                    className="group w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 active:scale-[0.98] mt-1 flex items-center justify-center gap-2"
                  >
                    Solicitar cita
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    O escríbenos directo por{" "}
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">WhatsApp</a>
                  </p>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">✅</div>
                <h3 className="text-xl font-black text-slate-900">¡Solicitud enviada!</h3>
                <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                  Te contactaremos en menos de 24 horas para confirmar tu cita.
                </p>
                <button onClick={() => setSent(false)} className="text-blue-600 font-semibold text-sm underline underline-offset-2">
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
