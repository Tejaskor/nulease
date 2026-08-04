import { assets } from "@/constants/assets";
import type { ServiceCard } from "@/types";

/**
 * The three cards under "OUR SERVICES" in the Figma home page.
 *
 * Copy is transcribed from the design screenshot. The raster is ~47% scale, so
 * wording is high-confidence but not character-exact — verify against Figma
 * once the file is accessible.
 *
 * `href` targets are unconfirmed: the design shows a "Read More" affordance but
 * the destination routes are not readable from a static frame.
 */
export const services: ServiceCard[] = [
  {
    slug: "hiv-treatment",
    title: "HIV Treatment",
    description:
      "Expert HIV treatment with compassionate care and continuous medical monitoring.",
    image: assets.services.hiv,
    imageAlt: "Clinician drawing blood from a patient during an HIV screening",
    href: "/contact",
  },
  {
    slug: "sti-treatment",
    title: "STI Treatment",
    description:
      "Private, evidence-based STI care with accurate diagnosis, effective treatment, and ongoing medical support.",
    image: assets.services.sti,
    imageAlt: "Gloved hand holding a labelled STI test sample tube",
    href: "/contact",
  },
  {
    slug: "hepatitis-c-treatment",
    title: "Hepatitis C Treatment",
    description:
      "Take control of your health with expert Hepatitis C treatment and ongoing medical guidance.",
    image: assets.services.hepatitis,
    imageAlt: "Clinician indicating a liver diagram during a Hepatitis C consultation",
    href: "/contact",
  },
];
