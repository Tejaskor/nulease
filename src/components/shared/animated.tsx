"use client";

import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

import { easeOutExpo } from "@/lib/motion";

interface AnimatedCounterProps {
  /** Target number to count up to. */
  value: number;
  /** Rendered after the number, e.g. "+". */
  suffix?: string;
  /** Count-up duration in seconds. */
  duration?: number;
  className?: string;
}

/**
 * Counts from 0 → `value` once the element scrolls into view. The final value
 * is what renders on the server (correct with JS disabled); the count-up plays
 * when it enters the viewport. Reduced-motion users see the final value with no
 * animation. Kept as an isolated leaf so its per-frame updates never re-render
 * anything else.
 */
export function AnimatedCounter({ value, suffix = "", duration = 1.6, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    const format = (n: number) => `${Math.round(n).toLocaleString("en-US")}${suffix}`;
    if (reduce) {
      node.textContent = format(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [...easeOutExpo],
      onUpdate: (v) => {
        node.textContent = format(v);
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, duration, reduce]);

  // The final value renders on the server (correct with JS disabled); the
  // count-up overwrites textContent imperatively once in view — no re-renders.
  return (
    <span ref={ref} className={className}>
      {`${value.toLocaleString("en-US")}${suffix}`}
    </span>
  );
}

interface ParallaxImageProps {
  src: StaticImageData | string;
  /** Total vertical travel across the section, in px. */
  distance?: number;
  /** Classes for the underlying <Image> (object-fit/position). */
  imageClassName?: string;
  sizes?: string;
}

/**
 * Full-bleed background image with a subtle scroll parallax. The image is
 * over-scanned vertically so the transform never exposes an edge. Renders
 * static for reduced-motion users.
 */
export function ParallaxImage({
  src,
  distance = 40,
  imageClassName,
  sizes = "100vw",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <motion.div
        style={{ y: reduce ? 0 : y }}
        className="absolute inset-x-0 -top-[15%] h-[130%]"
      >
        <Image src={src} alt="" aria-hidden fill sizes={sizes} className={imageClassName} />
      </motion.div>
    </div>
  );
}
