/**
 * About-page imagery (Figma 564:7704). The blob/badge/illustration visuals are
 * exported as composites because their organic shapes are baked into the
 * design; text and layout around them are rebuilt as markup.
 */
import aboutDoctor from "@/images/about/about-doctor.jpg";
import ctaIllustration from "@/images/about/cta-illustration.png";
import expert1 from "@/images/about/expert-1.jpg";
import expert2 from "@/images/about/expert-2.jpg";
import heroVisual from "@/images/about/hero-visual.png";
import impactBg from "@/images/about/Our-impact-across-the-U.S.png";

export const aboutAssets = {
  heroVisual,
  aboutDoctor,
  experts: [expert1, expert2],
  impactBg,
  ctaIllustration,
} as const;
