"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const items = [
  "🦷 Ortodoncia",
  "✨ Blanqueamiento",
  "🔩 Implantes",
  "💎 Estética Dental",
  "🩺 Odontología General",
  "🏥 Cirugía Oral",
  "😊 Sonrisas perfectas",
  "❤️ Cuidado personalizado",
];

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 22,
      ease: "none",
      repeat: -1,
    });
  });

  const allItems = [...items, ...items];

  return (
    <div
      className="py-4 overflow-hidden relative"
      style={{ background: "linear-gradient(90deg, #060C1A 0%, #0D1B35 50%, #060C1A 100%)", borderTop: "1px solid rgba(43,126,255,0.15)", borderBottom: "1px solid rgba(43,126,255,0.15)" }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #060C1A, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, #060C1A, transparent)" }} />

      <div className="flex" ref={trackRef} style={{ width: "max-content" }}>
        {allItems.map((item, i) => (
          <span
            key={i}
            className="text-blue-300/70 font-semibold text-sm tracking-widest whitespace-nowrap px-10 uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
