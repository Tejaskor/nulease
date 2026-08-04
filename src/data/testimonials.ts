import { assets } from "@/constants/assets";
import type { Testimonial } from "@/types";

/**
 * Real portraits + quotes from Figma 473:400, plus additional stories so the
 * carousel has enough slides to scroll. Portraits cycle through the three
 * available exports.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I was terrified to walk in the door. The staff talked to me like a person, not a case file, from the very first minute.",
    author: "Jennifer Dsouza",
    rating: 5,
    image: assets.testimonials[0],
  },
  {
    quote:
      "NuLease gave me more than treatment they gave me hope. The staff truly cared about my recovery, and I always felt respected and supported.",
    author: "Sarah M.",
    rating: 5,
    image: assets.testimonials[1],
  },
  {
    quote:
      "From my first visit, I knew I was in the right place. The team helped me regain control of my life.",
    author: "James W. Dsouza",
    rating: 5,
    image: assets.testimonials[2],
  },
  {
    quote:
      "The outpatient schedule meant I never had to choose between recovery and keeping my job. That flexibility changed everything for me.",
    author: "Marcus Rivera",
    rating: 5,
    image: assets.testimonials[0],
  },
  {
    quote:
      "Every step was explained before it happened. For the first time, I felt in control of my own treatment and my future.",
    author: "Dana Sullivan",
    rating: 5,
    image: assets.testimonials[1],
  },
  {
    quote:
      "My brother finally found a program that didn't feel like a lecture. He's been steady in recovery for over a year now.",
    author: "Aaron Cole",
    rating: 5,
    image: assets.testimonials[2],
  },
  {
    quote:
      "The care team checked in on me long after my first visit. Knowing someone was in my corner made all the difference.",
    author: "Priya Nair",
    rating: 5,
    image: assets.testimonials[0],
  },
  {
    quote:
      "Confidential, judgment-free, and genuinely kind. I always left my appointments feeling hopeful about the road ahead.",
    author: "David Lin",
    rating: 5,
    image: assets.testimonials[1],
  },
  {
    quote:
      "They met me where I was and built a plan around my life. I finally believe lasting recovery is possible.",
    author: "Elena Morales",
    rating: 5,
    image: assets.testimonials[2],
  },
];
