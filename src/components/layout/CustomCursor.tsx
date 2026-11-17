"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Point {
  x: number;
  y: number;
  age: number;
}

export function CustomCursor() {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const points: Point[] = [];
    let rafId = 0;
    let active = false;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        points[i].age += 1;
      }
      while (points.length > 0 && points[0].age > 24) {
        points.shift();
      }

      if (points.length > 1) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let i = 1; i < points.length; i++) {
          const p0 = points[i - 1];
          const p1 = points[i];
          const alpha = Math.max(0, 1 - p1.age / 24) * 0.55;
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
          ctx.lineWidth = Math.max(1, (1 - p1.age / 24) * 3.5);
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.stroke();
        }
      }

      if (points.length > 0) {
        rafId = requestAnimationFrame(draw);
      } else {
        active = false;
      }
    };

    const onMove = (e: MouseEvent) => {
      points.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (points.length > 28) points.shift();
      if (!active) {
        active = true;
        rafId = requestAnimationFrame(draw);
      }
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 hidden md:block"
    />
  );
}
