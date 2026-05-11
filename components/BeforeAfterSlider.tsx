"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
  before: string;
  after: string;
  label: string;
}

export function BeforeAfterSlider({ before, after, label }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setWidth(containerRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const getPercent = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square rounded-3xl overflow-hidden select-none shadow-xl shadow-blue-100/60 border border-blue-100"
      onMouseMove={e => { if (dragging.current) setPos(getPercent(e.clientX)); }}
      onMouseDown={() => (dragging.current = true)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={e => setPos(getPercent(e.touches[0].clientX))}
    >
      {/* AFTER — full width below */}
      <div className="absolute inset-0">
        <Image src={after} alt="Después" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <span className="absolute bottom-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-widest uppercase shadow">
          Después
        </span>
      </div>

      {/* BEFORE — clipped */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <div style={{ position: "relative", width: width, height: "100%" }}>
          <Image src={before} alt="Antes" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <span className="absolute bottom-3 left-3 bg-slate-800/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-widest uppercase backdrop-blur-sm shadow">
          Antes
        </span>
      </div>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.8)] z-10 pointer-events-none"
        style={{ left: `${pos}%` }} />

      {/* Handle */}
      <div className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2" style={{ left: `${pos}%` }}>
        <div className="w-10 h-10 rounded-full bg-white shadow-lg shadow-blue-200 border-2 border-blue-400/40 flex items-center justify-center hover:scale-110 transition-transform duration-150">
          <span className="text-blue-500 font-bold text-xs select-none">⟺</span>
        </div>
      </div>

      {/* Label */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-slate-700 whitespace-nowrap shadow-sm border border-blue-100">
        {label}
      </div>
    </div>
  );
}
