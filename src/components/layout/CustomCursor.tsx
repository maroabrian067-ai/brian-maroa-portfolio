"use client";

import { useEffect, useState } from "react";
import { m, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

export function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 420, damping: 32, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 420, damping: 32, mass: 0.4 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    setEnabled(true);

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, [data-cursor='hover']");
      setIsHoveringInteractive(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (!enabled) return null;

  return (
    <m.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/70 bg-emerald-400/10 mix-blend-screen md:block"
      style={{
        x: springX,
        y: springY,
        width: isHoveringInteractive ? 40 : 22,
        height: isHoveringInteractive ? 40 : 22,
        transition: "width 160ms ease, height 160ms ease",
      }}
    />
  );
}
