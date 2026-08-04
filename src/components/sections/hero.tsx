"use client";

import { motion } from "framer-motion";
import { Plus, ShieldPlus, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { assets } from "@/constants/assets";
import { siteConfig } from "@/constants/site";
import { fadeInRight, fadeUp, slideLeft, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Seal order + shape per Figma (473:174): gold, google, legitscript, hippa. */
const seals = [
  { src: assets.seals.jointCommission, label: "Joint Commission National Quality Approval", circle: true },
  { src: assets.seals.googleReview, label: "Google reviews", circle: true },
  { src: assets.seals.legitScript, label: "LegitScript certified", circle: false },
  { src: assets.seals.hippaCompliant, label: "HIPAA compliant", circle: true },
];

export function Hero() {
  return (
    <section
      id="home"
      // `isolate` gives the -z-10 pattern/glow a stacking context so they paint
      // above bg-navy-deep instead of escaping behind it.
      className="bg-navy-deep relative isolate overflow-hidden pt-32 pb-16 lg:pt-[168px] lg:pb-[90px]"
      aria-label="Compassionate outpatient addiction treatment"
    >
      {/* Background layers, composited exactly as Figma (473:174):
          base #0f1a28 → blue glow (Ellipse 6) → grid pattern → olive glow
          (Ellipse 7). All sit at -z-10 under the content. */}
      {/* Ellipse 6 — blue glow, bottom-left. Mostly below the fold; only a
          faint wash bleeds in (center ~15.7%/126%, heavy blur). */}
      <div
        className="absolute top-[126%] left-[15.7%] -z-10 size-[988px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-[150px] [background:radial-gradient(circle,#2665a3_0%,#0e263d_50%,transparent_70%)]"
        aria-hidden
      />
      {/* Grid + plus pattern (Figma export). Anchored left so the plus-shape
          composition sits on the left exactly as in the source image. */}
      <Image
        src={assets.heroBackground}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-left-top opacity-[0.35]"
      />
      {/* Ellipse 7 — olive glow, right (center ~72.5%/59%, heavy blur). Kept
          light so the pattern still reads through it. */}
      <div
        className="absolute top-[59%] left-[72.5%] -z-10 size-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-65 blur-[150px] [background:radial-gradient(circle,#47591b_0%,#232d09_52%,transparent_74%)]"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10 xl:px-0">
        <div className="grid items-center gap-14 lg:grid-cols-[644fr_596fr] lg:gap-0">
          {/* Left: copy */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="max-w-[644px]"
          >
            {/* Badge pill */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-3 py-1.5 text-sm font-normal text-white"
            >
              <ShieldPlus className="size-[18px] text-white" aria-hidden />
              Trusted by Global Patients
            </motion.span>

            {/* Heading — 38px / 46 / 600 */}
            <motion.h1
              variants={fadeUp}
              className="font-heading mt-[18px] text-[2rem] leading-[1.21] font-semibold text-[#fcfcfc] sm:text-[2.375rem]"
            >
              <span className="text-brand">Compassionate</span> Outpatient Addiction Treatment
            </motion.h1>

            {/* Paragraph — 16px / 22 / 500 */}
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[600px] text-base leading-[1.4] font-medium text-[#fbfbf8]"
            >
              At NuLease, your recovery comes first. Our experienced team provides compassionate
              outpatient care to help you build a healthier future.
            </motion.p>

            {/* Buttons — h40, r8, #3277b4 / white, 1px #5b9dd5 border */}
            <motion.div variants={fadeUp} className="mt-9 flex items-center gap-2.5">
              <Link
                href="/contact"
                className="focus-visible:ring-blue inline-flex h-10 items-center justify-center rounded-lg border border-[#5b9dd5] bg-[#3277b4] px-4 text-sm font-normal text-[#fbfbf8] transition-all duration-[250ms] ease-out hover:scale-[1.03] hover:bg-[#2a6094] hover:shadow-lg focus-visible:ring-2 focus-visible:outline-none"
              >
                Schedule Appointment
              </Link>
              <a
                href="/contact"
                className="focus-visible:ring-blue inline-flex h-10 items-center justify-center rounded-lg border border-[#5b9dd5] bg-[#fbfbf8] px-4 text-sm font-normal text-[#205184] transition-colors duration-[250ms] ease-out hover:bg-white focus-visible:ring-2 focus-visible:outline-none"
              >
                Call Now
              </a>
            </motion.div>

            {/* Seals + experience */}
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <ul className="flex items-center gap-3">
                {seals.map((seal) => (
                  <li key={seal.label} className="shrink-0">
                    {seal.circle ? (
                      <span className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-white">
                        <Image src={seal.src} alt={seal.label} className="size-full object-cover" sizes="48px" />
                      </span>
                    ) : (
                      <Image src={seal.src} alt={seal.label} className="size-12 object-contain" sizes="48px" />
                    )}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <span className="h-11 w-px bg-white/25" aria-hidden />
                <div className="flex flex-col">
                  <span className="font-heading flex items-baseline gap-1.5 text-white">
                    <span className="text-2xl font-bold">12+</span>
                    <span className="text-base font-medium">Years</span>
                  </span>
                  <span className="mt-0.5 text-xs font-normal text-white/70">
                    Delivering evidence-based treatment
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: composed visual */}
          <motion.div variants={slideLeft} initial="hidden" animate="visible">
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Right-side composite, rebuilt from the Figma layers with real exported
 * imagery. Stage represents the photo+rail bounding box (624x448 in the design);
 * children are positioned as percentages of it, cards use fixed sizes so their
 * text stays legible when the stage scales down.
 */
function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[624/448] w-full max-w-[624px]">
      {/* Ambient gradient glow drifting behind the photo — decorative, low opacity. */}
      <div
        aria-hidden
        className="animate-hero-glow pointer-events-none absolute top-1/2 left-1/2 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] [background:radial-gradient(circle,#2f6fb0_0%,#47591b_55%,transparent_75%)]"
      />

      {/* Main photo — r8 (gentle 6s float) */}
      <div
        className="animate-float absolute top-[2.7%] left-0 aspect-[596/423] w-[95.5%] overflow-hidden rounded-lg"
        style={{ "--float-duration": "6s" } as CSSProperties}
      >
        <Image
          src={assets.hero.doctor}
          alt="A compassionate physician reviewing a treatment plan with a patient"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 40vw"
          className="object-cover"
        />
      </div>

      {/* Thumbnail rail — 4x, r12, 2px white border, overlapping the photo's right edge.
          Fades + slides in from the right, staggered, then stays static. */}
      <motion.ul
        variants={staggerContainer(0.12, 0.3)}
        initial="hidden"
        animate="visible"
        className="absolute top-0 right-0 flex h-full w-[16%] flex-col gap-[3.6%]"
      >
        {assets.hero.thumbs.map((src, i) => (
          <motion.li
            key={i}
            variants={fadeInRight}
            className="relative min-h-0 flex-1 overflow-hidden rounded-xl border-2 border-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          >
            <Image src={src} alt="" aria-hidden fill sizes="100px" className="object-cover" />
          </motion.li>
        ))}
      </motion.ul>

      {/* "150+ Reviews" card (5.5s float, offset delay so it drifts independently) */}
      <div
        className="animate-float absolute top-[60%] left-[-3.5%] w-[148px] rounded-xl bg-white p-4 shadow-[0_19px_24px_rgba(176,176,176,0.25)]"
        style={{ "--float-duration": "5.5s", "--float-delay": "0.4s" } as CSSProperties}
      >
        <div className="flex" role="img" aria-label="Rated 5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} aria-hidden className="size-5 fill-[#f4c325] text-[#f4c325]" />
          ))}
        </div>
        <p className="mt-1.5 text-sm font-medium text-[#8b8d8c]">150+ Reviews</p>
      </div>

      {/* "Trusted by Clients" card (6.5s float, larger delay for independent drift) */}
      <div
        className="animate-float absolute top-[81%] left-[-3.2%] w-64 rounded-xl bg-white p-4 shadow-[0_19px_24px_rgba(176,176,176,0.25)]"
        style={{ "--float-duration": "6.5s", "--float-delay": "0.8s" } as CSSProperties}
      >
        <p className="border-b border-[#c9c9c4] pb-1.5 text-sm font-bold text-[#333332]">
          Trusted by Clients
        </p>
        <div className="mt-2.5 flex items-center gap-2.5">
          <ul className="flex">
            {assets.hero.avatars.map((src, i) => (
              <li
                key={i}
                className={cn(
                  "relative size-[33px] overflow-hidden rounded-full border-2 border-white",
                  i > 0 && "-ml-3",
                )}
              >
                <Image src={src} alt="" aria-hidden fill sizes="33px" className="object-cover" />
              </li>
            ))}
            <li className="-ml-3">
              <span className="bg-blue flex size-[33px] items-center justify-center rounded-full border-2 border-white text-white">
                <Plus className="size-3" aria-hidden />
              </span>
            </li>
          </ul>
          <div className="leading-tight">
            <p className="text-blue text-xs font-bold">300+</p>
            <p className="text-xs font-medium text-[#474746]">Satisfied Families</p>
          </div>
        </div>
      </div>
    </div>
  );
}
