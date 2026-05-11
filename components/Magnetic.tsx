"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";

interface Props {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Magnetic wrapper — child element drifts toward cursor on hover.
 * Used for premium CTA feel.
 */
export function Magnetic({ children, strength = 0.35, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    gsap.to(el, { x, y, duration: 0.6, ease: "power3.out" });
  };

  const onLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`inline-block magnetic ${className}`}>
      {children}
    </div>
  );
}
