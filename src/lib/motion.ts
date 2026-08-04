import type { TargetAndTransition, Transition, Variants } from "framer-motion";

/** Standard easing used across the site. */
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOutExpo } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

/** Fade in from the right (enters moving left). */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOutExpo } },
};

/** Collage entrance: fade + slight scale-up + slide from the left, once. */
export const collageReveal: Variants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease: easeOutExpo } },
};

/** Parent container that staggers its children. */
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/* --------------------------------------------------------------------------
 * Reusable, spec-named animation variants (About-page enhancement set).
 * These are the canonical entrance/interaction primitives — compose them via
 * <Reveal>/<Stagger> or apply directly to `motion.*` elements. Reduced-motion
 * is honoured globally by <MotionConfig reducedMotion="user"> in the layout.
 * ------------------------------------------------------------------------ */

/** Fade + rise 40px. The default scroll-reveal for sections and cards. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

/** Fade in from the left (enters moving right). */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOutExpo } },
};

/** Subtle text rise — for headings/eyebrows that shouldn't travel far. */
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

/** Image settle — fades while easing down from a slight scale-up. */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: easeOutExpo } },
};

/**
 * Continuous, GPU-friendly vertical float (y only). Returns props to spread
 * onto a `motion.*` element: `<motion.div {...floating()} />`. Disabled
 * automatically for reduced-motion users via MotionConfig.
 */
export const floating = (
  distance = 12,
  duration = 4,
): { animate: TargetAndTransition; transition: Transition } => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
});

/** Slow opacity pulse for ambient background glows. */
export const glowPulse = (duration = 5): { animate: TargetAndTransition; transition: Transition } => ({
  animate: { opacity: [0.85, 0.55, 0.85] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
});

/** Card hover: lift + gentle scale + soft shadow. Use as `whileHover`. */
export const cardHover: TargetAndTransition = {
  y: -8,
  scale: 1.02,
  boxShadow: "0 22px 48px -20px rgba(0, 0, 0, 0.55)",
  transition: { duration: 0.3, ease: easeOutExpo },
};

/** Button hover/tap — springy scale with a slight lift. */
export const buttonHover: TargetAndTransition = {
  scale: 1.05,
  y: -2,
  transition: { type: "spring", stiffness: 400, damping: 17 },
};
export const buttonTap: TargetAndTransition = { scale: 0.96 };

/** Shared viewport config for scroll-triggered reveals. */
export const viewportOnce = { once: true, amount: 0.25 } as const;

/* --------------------------------------------------------------------------
 * Services-page enhancement set — additional spec-named primitives.
 * ------------------------------------------------------------------------ */

/** Fade + drop 30px — navbar / top-anchored entrances. */
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
};

/** Aliases so both naming conventions resolve to one implementation. */
export const fadeLeft = fadeInLeft; // enters moving right (from the left)
export const fadeRight = fadeInRight; // enters moving left (from the right)
export const staggerItem = fadeInUp; // default child of a stagger container

/** Sidebar slide-in from the left. */
export const sidebarReveal: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

/** Image zoom-reveal — settles from a slight over-scale. */
export const zoomReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: easeOutExpo } },
};

/**
 * Ambient blob pulse — gentle scale + opacity breathing. Spread onto a
 * `motion.*`: `<motion.div {...pulse()} />`. Paused for reduced-motion.
 */
export const pulse = (
  duration = 6,
): { animate: TargetAndTransition; transition: Transition } => ({
  animate: { scale: [1, 1.03, 1], opacity: [0.95, 1, 0.95] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
});

/**
 * Floating chip — vertical drift with a subtle rotation, for trust badges.
 */
export const badgeFloat = (
  duration = 4,
  distance = 8,
): { animate: TargetAndTransition; transition: Transition } => ({
  animate: { y: [0, -distance, 0], rotate: [-2, 2, -2] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
});

/** Icon hover — slight rotate + scale. Use as `whileHover`. */
export const iconHover: TargetAndTransition = {
  rotate: 6,
  scale: 1.15,
  transition: { duration: 0.3, ease: easeOutExpo },
};

/** Alias for the icon rotate-on-hover interaction. */
export const rotateHover = iconHover;

/** Accordion item entrance — small fade + rise, staggered by its container. */
export const accordionReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutExpo } },
};
