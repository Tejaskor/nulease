"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared";
import { assets } from "@/constants/assets";
import heroVisual from "@/images/services/services-bg.png";
import { siteConfig } from "@/constants/site";
import { buttonHover, buttonTap, easeOutExpo, fadeInUp, floating, staggerContainer } from "@/lib/motion";

/**
 * Services hero (Figma 753:7833). Charcoal + grid, heading with green accent,
 * and the doctor-on-green-blob composite (blob + badges baked into the export).
 * Load: left content staggers up; the composite reveals from the right then
 * floats gently. Badge/blob independent motion isn't possible (baked image).
 */
export function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#242424] pt-32 lg:pt-[150px] ">
      <Image
        src={assets.heroBackground}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-right-top opacity-[0.12]"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_560px] lg:gap-8">
          {/* Copy — staggered entrance */}
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
            className="flex min-w-0 max-w-[600px] flex-col gap-6"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-[2rem] leading-[1.15] font-semibold text-white sm:text-[2.75rem]"
            >
              Our Hospital Has Different <span className="text-[#a4c93a]">Services</span> For Every
              Patient
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="max-w-[480px] text-base leading-[1.5] font-normal text-[#c9c9c4]"
            >
              We are dedicated to being your trusted partner in health and wellness. Our Holistic
              approach focuses on preventive care, healthy lifestyle choices.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
              <motion.span className="inline-flex" whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/contact"
                  className="focus-visible:ring-blue inline-flex h-10 items-center justify-center rounded-lg border border-[#5b9dd5] bg-[#3277b4] px-5 text-sm font-normal text-[#fbfbf8] transition-colors hover:bg-[#2a6094] focus-visible:ring-2 focus-visible:outline-none"
                >
                  Schedule Appointment
                </Link>
              </motion.span>
              <motion.a
                href={siteConfig.contact.phoneHref}
                whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 17 } }}
                whileTap={buttonTap}
                className="focus-visible:ring-blue inline-flex h-10 items-center justify-center rounded-lg border border-[#5b9dd5] bg-[#fbfbf8] px-5 text-sm font-normal text-[#205184] transition-colors hover:bg-white focus-visible:ring-2 focus-visible:outline-none"
              >
                Call Now
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Composite visual: reveal from the right, then float. */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
            className="relative mx-auto w-full min-w-0 max-w-[560px] lg:mx-0"
          >
            <motion.div {...floating(12, 4)}>
              <Image
                src={heroVisual}
                alt="A NuLease physician with trusted-care and quality-assured badges"
                priority
                sizes="(max-width: 1024px) 85vw, 560px"
                className="h-auto w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
