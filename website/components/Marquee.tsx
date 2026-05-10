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
    const track = trackRef.current;
    if (!track) return;

    gsap.to(track, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  });

  const allItems = [...items, ...items];

  return (
    <div className="py-5 bg-blue-700 overflow-hidden border-y border-blue-600">
      <div className="flex" ref={trackRef} style={{ width: "max-content" }}>
        {allItems.map((item, i) => (
          <span
            key={i}
            className="text-white font-semibold text-sm tracking-wide whitespace-nowrap px-8"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
