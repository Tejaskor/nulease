"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Motion elements are created once at module scope (not during render). */
const motionTags = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  section: motion.section,
} as const;

type MotionTagName = keyof typeof motionTags;

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  /** Render as a different element, e.g. "ul", "section". */
  as?: MotionTagName;
  delay?: number;
}

/**
 * Scroll-triggered reveal wrapper. Defaults to a fade-up animation that plays
 * once when the element enters the viewport.
 */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  as = "div",
  delay = 0,
}: RevealProps) {
  const MotionTag = motionTags[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  as?: MotionTagName;
  stagger?: number;
  delayChildren?: number;
}

/**
 * Parent wrapper that reveals its `Reveal`/`motion` children in a staggered
 * sequence as it scrolls into view.
 */
export function Stagger({
  children,
  className,
  as = "div",
  stagger = 0.12,
  delayChildren = 0,
}: StaggerProps) {
  const MotionTag = motionTags[as];
  return (
    <MotionTag
      className={cn(className)}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}
