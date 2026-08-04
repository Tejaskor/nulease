/**
 * Reusable Motion variants for the site.
 *
 * These are re-exported from `@/lib/motion`, which is the single source of
 * truth so every component shares one set of primitives (and one place to
 * tune easing/durations). Reduced-motion is honoured globally by
 * `<MotionConfig reducedMotion="user">` in the root layout.
 *
 * Requested spec names all resolve here:
 *   fadeUp · fadeDown · fadeLeft · fadeRight · scaleIn · staggerContainer ·
 *   staggerItem · floating · pulse · cardHover · buttonHover · imageReveal ·
 *   textReveal · rotateHover · sidebarReveal
 */
export {
  easeOutExpo,
  // entrances
  fadeUp,
  fadeInUp,
  fadeDown,
  fadeIn,
  fadeLeft,
  fadeInLeft,
  fadeRight,
  fadeInRight,
  slideLeft,
  slideRight,
  scaleIn,
  zoomReveal,
  imageReveal,
  textReveal,
  collageReveal,
  sidebarReveal,
  // stagger
  staggerContainer,
  staggerItem,
  // continuous / ambient
  floating,
  glowPulse,
  pulse,
  badgeFloat,
  // interactions
  cardHover,
  buttonHover,
  buttonTap,
  iconHover,
  rotateHover,
  accordionReveal,
  // config
  viewportOnce,
} from "@/lib/motion";
