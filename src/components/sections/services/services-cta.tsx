"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/shared";
import { siteConfig } from "@/constants/site";
import { buttonTap, fadeInLeft, fadeInRight, viewportOnce } from "@/lib/motion";

/**
 * "Connect with Our Care Team Today" band (Figma 753:7833).
 *
 * PLACEHOLDER: the molecular background photo isn't exported yet — using a dark
 * teal gradient with an animated ambient glow. Swap for the real image when
 * available.
 */
export function ServicesCTA() {
  return (
    <section
      id="get-started"
      className="relative isolate overflow-hidden bg-[#0e2a33] [background:radial-gradient(120%_140%_at_50%_50%,#124b52_0%,#0e2233_60%,#0b1a2a_100%)]"
    >
      {/* Ambient drifting glow. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 size-[520px] rounded-full bg-[#1a6b73]/40 blur-[140px]"
        initial={{ opacity: 0.4, x: "-10%", y: "-20%" }}
        animate={{ opacity: [0.35, 0.6, 0.35], x: ["-10%", "60%", "-10%"], y: ["-20%", "10%", "-20%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="py-12 lg:py-14">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex max-w-[560px] flex-col gap-3"
          >
            <h2 className="font-heading text-[1.75rem] leading-[1.15] font-semibold text-white sm:text-[2rem]">
              Connect with Our Care Team Today
            </h2>
            <p className="text-lg leading-[1.4] font-normal text-[#d5dee8]">
              500+ successful treatment plans personalized every year.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap items-center gap-3"
          >
            <motion.span
              className="inline-flex"
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              whileTap={buttonTap}
            >
              <Link
                href="/contact"
                className="focus-visible:ring-blue inline-flex h-10 items-center justify-center rounded-lg border border-[#5b9dd5] bg-[#3277b4] px-5 text-sm font-normal text-[#fbfbf8] transition-colors hover:bg-[#2a6094] focus-visible:ring-2 focus-visible:outline-none"
              >
                Schedule Appointment
              </Link>
            </motion.span>
            <motion.a
              href={siteConfig.contact.phoneHref}
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              whileTap={buttonTap}
              className="focus-visible:ring-blue inline-flex h-10 items-center justify-center rounded-lg border border-[#5b9dd5] bg-[#fbfbf8] px-5 text-sm font-normal text-[#205184] transition-colors hover:bg-white focus-visible:ring-2 focus-visible:outline-none"
            >
              Call Now
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
