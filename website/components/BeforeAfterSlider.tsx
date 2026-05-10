"use client";

import { useRef, useState, useCallback } from "react";
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

  const getPercent = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    const x = clientX - rect.left;
    return Math.min(100, Math.max(0, (x / rect.width) * 100));
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging.current) return;
      setPos(getPercent(e.clientX));
    },
    [getPercent]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      setPos(getPercent(e.touches[0].clientX));
    },
    [getPercent]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square rounded-3xl overflow-hidden select-none shadow-2xl shadow-blue-900/20 group"
      onMouseMove={onMouseMove}
      onMouseDown={() => (dragging.current = true)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={onTouchMove}
    >
      {/* AFTER (bottom layer, full) */}
      <div className="absolute inset-0">
        <Image src={after} alt="Después" fill className="object-cover" />
        <div className="absolute bottom-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
          DESPUÉS
        </div>
      </div>

      {/* BEFORE (top layer, clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <div className="relative w-full h-full" style={{ minWidth: containerRef.current?.offsetWidth }}>
          <Image
            src={before}
            alt="Antes"
            fill
            className="object-cover"
            style={{ maxWidth: "none", width: containerRef.current?.offsetWidth }}
          />
        </div>
        <div className="absolute bottom-3 left-3 bg-slate-800/80 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide backdrop-blur-sm">
          ANTES
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"
        style={{ left: `${pos}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 ba-handle"
        style={{ left: `${pos}%` }}
      >
        <div className="w-10 h-10 rounded-full bg-white shadow-lg shadow-blue-900/30 flex items-center justify-center border-2 border-blue-500/40 transition-transform duration-100 hover:scale-110">
          <span className="text-blue-600 font-bold text-sm select-none">⟺</span>
        </div>
      </div>

      {/* Label */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 glass-white rounded-full px-3 py-1 text-xs font-semibold text-slate-700 z-20 whitespace-nowrap">
        {label}
      </div>
    </div>
  );
}
