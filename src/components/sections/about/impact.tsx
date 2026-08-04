"use client";

import { motion } from "framer-motion";
import { CalendarCheck, ShieldCheck, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { AnimatedCounter, Container, ParallaxImage } from "@/components/shared";
import { aboutAssets } from "@/constants/about-assets";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Stat = { icon: LucideIcon } & (
  | { label: string; prefix?: never }
  | { prefix: string; count: number; countSuffix: string; rest: string; label?: never }
);

const stats: Stat[] = [
  {
    icon: UsersRound,
    prefix: "We see ",
    count: 50000,
    countSuffix: "+",
    rest: " patients every month",
  },
  { icon: ShieldCheck, label: "One million visits completed & counting" },
  { icon: CalendarCheck, label: "24/7 visits available" },
];

/** "OUR IMPACT ACROSS THE U.S." (Figma 564:7877). Parallax background + gradient overlay. */
export function Impact() {
  return (
    <section className="relative isolate overflow-hidden bg-[#242424]">
      {/* Clinical background photo with a subtle scroll parallax. */}
      <ParallaxImage src={aboutAssets.impactBg} imageClassName="object-cover object-center" />
      {/* Overlay layer. */}
      <div className="absolute inset-0 -z-10" aria-hidden />

      <Container className="py-14 lg:py-[100px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          <span className="text-lg leading-[22px] font-medium text-[#f0f0ea] uppercase">
            Our impact across the U.S.
          </span>
          <span className="h-0.5 w-[97px] bg-[#abcf37]" aria-hidden />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -6, transition: { duration: 0.3 } }}
                className="flex items-center gap-5 rounded-xl bg-[#020202]/50 p-6 backdrop-blur-[10px]"
              >
                <span className="flex size-[60px] shrink-0 items-center justify-center rounded-xl bg-[#73931d]">
                  <Icon className="size-[30px] text-white" aria-hidden strokeWidth={2} />
                </span>
                <p className="font-heading text-2xl leading-[29px] font-semibold text-[#fbfbf8]">
                  {"count" in stat ? (
                    <>
                      {stat.prefix}
                      <AnimatedCounter
                        value={stat.count}
                        suffix={stat.countSuffix}
                        className="tabular-nums"
                      />
                      {stat.rest}
                    </>
                  ) : (
                    stat.label
                  )}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
