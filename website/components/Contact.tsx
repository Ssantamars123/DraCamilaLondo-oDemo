"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const WA = "https://api.whatsapp.com/send?phone=573102481468&text=Hola,%20quiero%20agendar%20una%20cita%20con%20la%20Dra.%20Camila";

const contactInfo = [
  { icon: "📍", label: "Dirección",   value: "Av. 80 #28-90, Belén La Palma, Medellín" },
  { icon: "📞", label: "Teléfono",    value: "310 2481468" },
  { icon: "📸", label: "Instagram",   value: "@dracamilalondono" },
  { icon: "🕐", label: "Horario",     value: "Lun–Vie 8am–6pm · Sáb 8am–1pm" },
  { icon: "💳", label: "Pagos",       value: "Efectivo, tarjetas, transferencias" },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

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

  const inputBase = "w-full bg-blue-50/60 border rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all duration-200";

  return (
    <section id="contacto" ref={ref} className="py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #DBEAFE 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start relative z-10">

        {/* LEFT */}
        <div className="con-left flex flex-col gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Contacto</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4"
            >
              Agenda tu cita<br /><span className="text-gradient">hoy mismo</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-500 text-lg leading-relaxed"
            >
              Escríbenos y en menos de 24 horas confirmamos tu cita.
            </motion.p>
          </div>

          <div className="flex flex-col gap-3">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 bg-blue-50/60 border border-blue-100 rounded-2xl px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-150"
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{item.label}</p>
                  <p className="text-slate-700 text-sm font-medium mt-0.5">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href={WA} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 32px rgba(34,197,94,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-green-500 text-white font-bold px-8 py-4 rounded-full w-fit"
          >
            <span className="text-xl">💬</span>
            Escribir por WhatsApp
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}>→</motion.span>
          </motion.a>
        </div>

        {/* RIGHT — form */}
        <div className="con-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
            className="bg-white rounded-3xl border border-blue-100 shadow-2xl shadow-blue-50 p-8"
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.97 }}>
                  <h3 className="text-xl font-black text-slate-900 mb-6">Solicitar cita</h3>
                  <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { id: "name",  type: "text",  label: "Nombre",   placeholder: "Tu nombre completo",  required: true  },
                        { id: "phone", type: "tel",   label: "Teléfono", placeholder: "310 0000000",         required: true  },
                      ].map(f => (
                        <div key={f.id} className="col-span-2 sm:col-span-1">
                          <label className="block text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1.5">{f.label}</label>
                          <motion.div animate={{ scale: focused === f.id ? 1.01 : 1 }} transition={{ duration: 0.15 }}>
                            <input type={f.type} placeholder={f.placeholder}
                              className={`${inputBase} ${focused === f.id ? "border-blue-400 bg-white shadow-sm shadow-blue-100" : "border-blue-100"}`}
                              value={(form as Record<string,string>)[f.id]}
                              onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                              onFocus={() => setFocused(f.id)}
                              onBlur={() => setFocused(null)}
                              required={f.required}
                            />
                          </motion.div>
                        </div>
                      ))}
                    </div>

                    {[
                      { id: "email",   type: "email", label: "Correo",   placeholder: "tu@email.com"  },
                    ].map(f => (
                      <div key={f.id}>
                        <label className="block text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1.5">{f.label}</label>
                        <motion.div animate={{ scale: focused === f.id ? 1.01 : 1 }} transition={{ duration: 0.15 }}>
                          <input type={f.type} placeholder={f.placeholder}
                            className={`${inputBase} ${focused === f.id ? "border-blue-400 bg-white shadow-sm shadow-blue-100" : "border-blue-100"}`}
                            value={(form as Record<string,string>)[f.id]}
                            onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                            onFocus={() => setFocused(f.id)}
                            onBlur={() => setFocused(null)}
                          />
                        </motion.div>
                      </div>
                    ))}

                    <div>
                      <label className="block text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1.5">Servicio</label>
                      <select className={`${inputBase} border-blue-100`} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
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
                      <motion.div animate={{ scale: focused === "message" ? 1.01 : 1 }} transition={{ duration: 0.15 }}>
                        <textarea placeholder="Cuéntanos brevemente tu caso..." rows={3}
                          className={`${inputBase} resize-none ${focused === "message" ? "border-blue-400 bg-white shadow-sm shadow-blue-100" : "border-blue-100"}`}
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                        />
                      </motion.div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(37,99,235,0.3)" }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 mt-1"
                    >
                      Solicitar cita <span>→</span>
                    </motion.button>
                    <p className="text-center text-xs text-slate-400">
                      O escríbenos por{" "}
                      <a href={WA} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">WhatsApp</a>
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col items-center justify-center gap-5 py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl"
                  >
                    ✅
                  </motion.div>
                  <h3 className="text-xl font-black text-slate-900">¡Solicitud enviada!</h3>
                  <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                    Te contactaremos en menos de 24 horas para confirmar tu cita.
                  </p>
                  <button onClick={() => setSent(false)} className="text-blue-600 font-semibold text-sm underline underline-offset-2">
                    Enviar otra solicitud
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
