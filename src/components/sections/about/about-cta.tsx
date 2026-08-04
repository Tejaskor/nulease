"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared";
import { aboutAssets } from "@/constants/about-assets";
import { assets } from "@/constants/assets";
import { buttonHover, buttonTap, fadeInLeft, fadeInRight, floating, viewportOnce } from "@/lib/motion";

const avatars = [
  assets.hero.avatars[0],
  assets.testimonials[0],
  assets.hero.avatars[1],
  assets.hero.avatars[2],
];

/** "Connect with Our Care Team Today" (Figma 564:7704). Blue section + illustration. */
export function AboutCTA() {
  const reduce = useReducedMotion();

  return (
    <section id="get-started" className="overflow-hidden bg-[#1e3b5c]">
      <Container className="py-12 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[555fr_607fr] lg:gap-8">
          {/* Copy — slides in from the left. */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex min-w-0 flex-col gap-6"
          >
            <h2 className="font-heading max-w-[555px] text-[2.25rem] leading-[1.1] font-medium text-[#fbfbf8] sm:text-[3rem] sm:leading-[1.1]">
              Connect with Our Care Team Today
            </h2>
            <p className="text-xl leading-[1.5] font-normal tracking-[-0.02em] text-[#c9c9c4]">
              500+ successful treatment plans personalized every year.
            </p>

            <ul className="flex items-center">
              {avatars.map((src, i) => (
                <li
                  key={i}
                  className={`relative size-10 overflow-hidden rounded-full ring-2 ring-white ${i > 0 ? "-ml-3" : ""}`}
                >
                  <Image src={src} alt="" aria-hidden fill sizes="40px" className="object-cover" />
                </li>
              ))}
            </ul>

            <div>
              <motion.span className="inline-flex" whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/contact"
                  className="focus-visible:ring-blue inline-flex h-10 items-center justify-center rounded-lg border border-[#5b9dd5] bg-[#3277b4] px-5 text-sm font-normal text-[#fbfbf8] transition-colors hover:bg-[#2a6094] focus-visible:ring-2 focus-visible:outline-none"
                >
                  Book Call
                </Link>
              </motion.span>
            </div>
          </motion.div>

          {/* Illustration — slides in from the right, then floats gently. */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mx-auto aspect-[607/404] w-full min-w-0 max-w-[607px]"
          >
            <motion.div className="absolute inset-0" {...(reduce ? {} : floating(10, 6))}>
              <Image
                src={aboutAssets.ctaIllustration}
                alt="NuLease clinicians reviewing patient care on a tablet"
                fill
                sizes="(max-width: 1024px) 90vw, 607px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
