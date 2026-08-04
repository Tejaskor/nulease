/**
 * Real brand assets exported from Figma (src/images). These take precedence
 * over the Unsplash placeholders in `images.ts`.
 */
import googleReview from "@/images/google-review.svg";
import heroBackground from "@/images/hero-section-background-image.png";
import heroSection from "@/images/hero-section.png";
import heroAvatar1 from "@/images/hero/avatar-1.jpg";
import heroAvatar2 from "@/images/hero/avatar-2.jpg";
import heroAvatar3 from "@/images/hero/avatar-3.jpg";
import heroDoctor from "@/images/hero/doctor-patient.jpg";
import heroThumb1 from "@/images/hero/thumb-1.jpg";
import heroThumb2 from "@/images/hero/thumb-2.jpg";
import heroThumb3 from "@/images/hero/thumb-3.png";
import heroThumb4 from "@/images/hero/thumb-4.png";
import hippaCompliant from "@/images/hippa-compliant.svg";
import jointCommission from "@/images/joint-commision.svg";
import legitScript from "@/images/ligitscript.svg";
import logo from "@/images/NuLease-Logo.svg";
import hepatitisTreatment from "@/images/services/Hepatitis C Treatment.png";
import hivTreatment from "@/images/services/HIV Treatment.png";
import stiTreatment from "@/images/services/STI Treatment.png";
import testimonial1 from "@/images/testimonials/portrait-1.jpg";
import testimonial2 from "@/images/testimonials/portrait-2.jpg";
import testimonial3 from "@/images/testimonials/portrait-3.jpg";
import trusted from "@/images/trusted.png";
import calendarDots from "@/images/why-choose-nulease/CalendarDots.png";
import collageCounseling from "@/images/why-choose-nulease/group.png";
import collageConfidential from "@/images/why-choose-nulease/Patient.png";
import collageDoctor from "@/images/why-choose-nulease/team.png";
import stethoscope from "@/images/why-choose-nulease/Stethoscope.png";
import users from "@/images/why-choose-nulease/Users.png";

export const assets = {
  logo,
  /** OUTDATED flat composite — superseded by the `hero.*` layers below. */
  heroSection,
  /** 1440x865 transparent grid/plus pattern behind the hero content. */
  heroBackground,
  /** Real hero exports (Figma node 473:174). */
  hero: {
    doctor: heroDoctor,
    thumbs: [heroThumb1, heroThumb2, heroThumb3, heroThumb4],
    avatars: [heroAvatar1, heroAvatar2, heroAvatar3],
  },
  /** Composite "Trusted by Clients" card used in the hero. */
  trusted,
  seals: {
    hippaCompliant,
    jointCommission,
    legitScript,
    googleReview,
  },
  /** 350x218 service card photography. */
  services: {
    hiv: hivTreatment,
    sti: stiTreatment,
    hepatitis: hepatitisTreatment,
  },
  /** 30x30 glyphs for "The NuLease Difference". */
  difference: {
    stethoscope,
    users,
    calendarDots,
  },
  /** "The NuLease Difference" photo collage (Figma 473:261). */
  collage: {
    counseling: collageCounseling, // 276x276
    confidential: collageConfidential, // 276x257
    doctor: collageDoctor, // 274x258
  },
  /** Testimonial portraits (Figma 473:400), 166x198 in design. */
  testimonials: [testimonial1, testimonial2, testimonial3],
} as const;
