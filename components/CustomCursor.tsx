"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      gsap.to(dot,  { x: e.clientX, y: e.clientY, duration: 0.08, ease: "power2.out" });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.3,  ease: "power2.out" });
    };

    const onEnter = () => {
      gsap.to(ring, { scale: 2,   opacity: 0.5, duration: 0.25 });
      gsap.to(dot,  { scale: 0,              duration: 0.25 });
    };
    const onLeave = () => {
      gsap.to(ring, { scale: 1,   opacity: 1,   duration: 0.25 });
      gsap.to(dot,  { scale: 1,              duration: 0.25 });
    };
    const onDown = () => gsap.to(ring, { scale: 0.75, duration: 0.12 });
    const onUp   = () => gsap.to(ring, { scale: 1,    duration: 0.12 });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);

    const attach = () => {
      document.querySelectorAll("a,button,[role='button'],input,select,textarea").forEach(el => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-500 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" />
      <div ref={ringRef} className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-blue-400/60 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}
