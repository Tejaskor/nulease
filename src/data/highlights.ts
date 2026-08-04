import { images } from "@/constants/images";
import type { HighlightCard } from "@/types";

export const highlights: HighlightCard[] = [
  {
    id: "01",
    title: "Expert Medical Team",
    description:
      "A multidisciplinary team of physicians, nurses, and specialists dedicated to your recovery every step of the way.",
    image: images.investing.card1,
    imageAlt: "Expert medical team collaborating on patient care",
  },
  {
    id: "02",
    title: "Compassionate Recovery",
    description:
      "We provide personalized addiction treatment with dignity, respect, and evidence-based support to help individuals reclaim their lives.",
    image: images.investing.card2,
    imageAlt: "Clinician offering compassionate support to a patient",
  },
  {
    id: "03",
    title: "Lasting Wellness",
    description:
      "Our aftercare and community programs are built to sustain recovery and support lifelong, whole-person wellness.",
    image: images.investing.card3,
    imageAlt: "Patient celebrating a milestone in lasting recovery",
  },
];
