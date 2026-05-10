"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const items = [
  "Ortodoncia", "Blanqueamiento", "Implantes",
  "Estética Dental", "Odontología General", "Cirugía Oral",
  "Diseño de Sonrisa", "Periodoncia", "Endodoncia",
];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    gsap.to(trackRef.current, { xPercent: -50, duration: 26, ease: "none", repeat: -1 });
  });

  const all = [...items, ...items];

  return (
    <div className="py-4 overflow-hidden bg-blue-600 relative">
      <div className="absolute left-0 inset-y-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #2563EB, transparent)" }} />
      <div className="absolute right-0 inset-y-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, #2563EB, transparent)" }} />

      <div ref={trackRef} className="flex items-center" style={{ width: "max-content" }}>
        {all.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 whitespace-nowrap px-6">
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">{item}</span>
            <span className="w-1 h-1 rounded-full bg-blue-300/60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
