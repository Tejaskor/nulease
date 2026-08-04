"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * App-wide motion settings. `reducedMotion="user"` makes Framer Motion skip
 * transform/layout animations (keeping opacity) for visitors who set
 * "prefers-reduced-motion", so every animation on the site is accessible by
 * default without per-component guards.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
