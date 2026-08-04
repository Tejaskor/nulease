"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared";
import { aboutAssets } from "@/constants/about-assets";
import { assets } from "@/constants/assets";
import {
  buttonHover,
  buttonTap,
  fadeInLeft,
  fadeInRight,
  floating,
  glowPulse,
  staggerContainer,
} from "@/lib/motion";

/** About hero (Figma 564:7704). Charcoal base, grid pattern, olive glow, doctor blob. */
export function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-[#242424] pt-32 pb-16 lg:pt-[168px] lg:pb-20"
      aria-label="We're your partner in lasting addiction recovery"
    >
      {/* Grid + plus pattern (Group opacity ~0.10 in Figma). */}
      <Image
        src={assets.heroBackground}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-right-top opacity-[0.12]"
      />
      {/* Olive glow (Ellipse 7): 517px, centre ~81.6% / 52%, heavy blur — slowly pulses. */}
      <motion.div
        className="absolute top-[52%] left-[81.6%] -z-10 size-[517px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-90 blur-[130px] [background:linear-gradient(90deg,#47591b_0%,#232d09_100%)]"
        aria-hidden
        {...(reduce ? {} : glowPulse(6))}
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_440px] lg:gap-10">
          {/* Copy — heading, paragraph and button fade in from the left, staggered. */}
          <motion.div
            variants={staggerContainer(0.18)}
            initial="hidden"
            animate="visible"
            className="flex min-w-0 max-w-[652px] flex-col gap-6"
          >
            {/* Heading — 38px / 46 / 600 (Figma 564:7705). */}
            <motion.h1
              variants={fadeInLeft}
              className="font-heading text-[2rem] leading-[1.21] font-semibold text-[#fcfcfc] sm:text-[38px] sm:leading-[46px]"
            >
              We&rsquo;re Your Partner In Lasting{" "}
              <span className="text-[#abcf37]">Addiction Recovery</span>
            </motion.h1>
            <motion.p
              variants={fadeInLeft}
              className="max-w-[652px] text-base leading-[22px] font-medium tracking-[0.03em] text-[#c9c9c4]"
            >
              We provide compassionate, evidence-based outpatient addiction treatment with
              personalized care plans, helping individuals begin their recovery journey in a safe,
              supportive, and confidential environment.
            </motion.p>
            <motion.div variants={fadeInLeft} className="inline-flex">
              <motion.span
                className="inline-flex"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                <Link
                  href="/contact"
                  className="focus-visible:ring-blue inline-flex h-[38px] items-center justify-center rounded-lg border border-[#5b9dd5] bg-[#3277b4] px-4 text-sm font-normal text-[#fbfbf8] transition-colors hover:bg-[#2a6094] focus-visible:ring-2 focus-visible:outline-none"
                >
                  Book Now
                </Link>
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Doctor blob visual — fades in from the right, then floats gently. */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full min-w-0 max-w-[440px] lg:mx-0"
          >
            <motion.div {...(reduce ? {} : floating(12, 4))}>
              <Image
                src={aboutAssets.heroVisual}
                alt="A NuLease physician in scrubs with a stethoscope"
                priority
                sizes="(max-width: 1024px) 80vw, 440px"
                className="h-auto w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
