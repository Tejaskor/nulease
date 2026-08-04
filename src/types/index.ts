import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

/** Either a remote URL or a statically imported asset from `src/images`. */
export type ImageSource = string | StaticImageData;

export interface NavItem {
  label: string;
  href: string;
}

/**
 * A feature in the "The NuLease Difference" section. The design uses exported
 * PNG glyphs in a rounded green tile rather than an icon font.
 */
export interface DifferenceCard {
  title: string;
  description: string;
  icon: StaticImageData;
}

export interface ServiceCard {
  slug: string;
  title: string;
  description: string;
  image: ImageSource;
  imageAlt: string;
  href: string;
}

export interface HighlightCard {
  id: string; // "01" | "02" | "03"
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  quote: string;
  author: string;
  /** Not rendered on the home page — the design shows the name alone. */
  role?: string;
  rating: number; // 1-5
  image: ImageSource;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}
