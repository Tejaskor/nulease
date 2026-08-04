import { assets } from "@/constants/assets";
import type { DifferenceCard } from "@/types";

/**
 * "WHY CHOOSE NULEASE — The NuLease Difference".
 *
 * Copy is transcribed from the design screenshot at ~47% scale. Titles are
 * legible and high-confidence; the body copy is smaller and some wording is a
 * best-effort read — verify against Figma once accessible.
 */
export const differenceCards: DifferenceCard[] = [
  {
    title: "Accredited Physicians",
    description:
      "Receive expert, evidence-based care from accredited physicians committed to your recovery and long-term well-being.",
    icon: assets.difference.stethoscope,
  },
  {
    title: "Outpatient Program",
    description:
      "Flexible outpatient care that supports your recovery without disrupting your everyday life.",
    icon: assets.difference.users,
  },
  {
    title: "Confidential Appointments",
    description:
      "Your privacy comes first with discreet, confidential care in a safe and supportive environment.",
    icon: assets.difference.calendarDots,
  },
];
