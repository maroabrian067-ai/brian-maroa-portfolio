"use client";

import dynamic from "next/dynamic";
import { LazyMotion, domAnimation } from "framer-motion";

const CustomCursor = dynamic(
  () => import("./CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <CustomCursor />
      {children}
    </LazyMotion>
  );
}
