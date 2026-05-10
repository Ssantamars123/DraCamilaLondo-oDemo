"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-left",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".contact-right",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-200";

  return (
    <section
      id="contacto"
      ref={containerRef}
      className="py-24 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-800/40 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Left: info */}
        <div className="contact-left flex flex-col gap-8 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 w-fit">
            <span className="text-white text-xs font-semibold tracking-wide uppercase">
              Contacto
            </span>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Agenda tu cita <br />
              <span className="text-blue-200">hoy mismo</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              Escríbenos y en menos de 24 horas te confirmamos tu cita. Tu
              sonrisa no puede esperar.
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "📍",
                label: "Dirección",
                value: "Medellín, Antioquia, Colombia",
              },
              {
                icon: "📞",
                label: "Teléfono",
                value: "+57 300 000 0000",
              },
              {
                icon: "📧",
                label: "Email",
                value: "dra.camila@odontologia.com",
              },
              {
                icon: "🕐",
                label: "Horario",
                value: "Lun – Vie: 8am – 6pm | Sáb: 8am – 1pm",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-blue-200 text-xs font-semibold uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-white text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 active:scale-95 w-fit"
          >
            <span className="text-xl">💬</span>
            Escríbenos por WhatsApp
          </a>
        </div>

        {/* Right: form */}
        <div className="contact-right">
          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-blue-900/20">
            {!sent ? (
              <>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Formulario de cita
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className={inputClass}
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        placeholder="+57 300 000 0000"
                        className={inputClass}
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Servicio de interés
                    </label>
                    <select
                      className={inputClass}
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                    >
                      <option value="">Seleccionar servicio</option>
                      <option>Ortodoncia</option>
                      <option>Blanqueamiento Dental</option>
                      <option>Implantes Dentales</option>
                      <option>Odontología General</option>
                      <option>Estética Dental</option>
                      <option>Cirugía Oral</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      placeholder="Cuéntanos brevemente sobre tu caso..."
                      rows={3}
                      className={`${inputClass} resize-none`}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white font-semibold py-4 rounded-xl hover:bg-blue-800 transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 active:scale-95 mt-2"
                  >
                    Solicitar cita
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
                  ✅
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  ¡Solicitud enviada!
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  Gracias por contactarnos. Te responderemos en menos de 24 horas
                  para confirmar tu cita.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-blue-700 text-sm font-semibold underline underline-offset-2"
                >
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
