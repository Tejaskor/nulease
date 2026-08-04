"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "@/components/shared";
import { aboutAssets } from "@/constants/about-assets";
import { cardHover, fadeInLeft, fadeInRight } from "@/lib/motion";

const cards = [
  {
    title: "Our Vision",
    body: "Our mission is to provide Jefferson and surrounding counties with a comprehensive treatment program for Opioid and Alcohol Use Disorders that holds both the patient and physician accountable to a higher standard.",
  },
  {
    title: "Our Mission",
    body: "NuLease is a premier, comprehensive, and all-inclusive facility that now accepts Private Insurance, Medicare, and Medicaid..",
  },
];

const viewport = { once: true, amount: 0.3 } as const;

/** "About US" (Figma 564:7704). Navy #14263d, doctor image + vision/mission cards. */
export function AboutUs() {
  return (
    <section id="about" className="bg-[#14263d]">
      <Container className="py-16 lg:py-[100px]">
        <div className="grid items-center gap-10 lg:grid-cols-[460px_1fr] lg:gap-14">
          {/* Doctor image — slides in from the left. */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative mx-auto aspect-[458/438] w-full max-w-[460px] overflow-hidden rounded-2xl lg:mx-0"
          >
            <Image
              src={aboutAssets.aboutDoctor}
              alt="A NuLease clinician at their desk"
              fill
              sizes="(max-width: 1024px) 90vw, 460px"
              className="object-cover"
            />
          </motion.div>

          {/* Content — slides in from the right. */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <h2 className="font-heading text-[2rem] leading-[1.13] font-medium text-[#fbfbf8]">
                About US
              </h2>
              <span className="h-0.5 w-[97px] bg-[#abcf37]" aria-hidden />
            </div>

            <h3 className="font-heading text-[22px] leading-[1.36] font-normal tracking-[-0.02em] text-[#f0f0ea]">
              Your Trusted Healthcare Partner
            </h3>
            <p className="text-[20px] leading-[1.5] font-normal tracking-[-0.02em] text-[#c9c9c4]">
              At NuLease, we believe recovery begins with compassionate, judgment-free care. Our
              experienced team of medical professionals is dedicated to helping individuals overcome
              opioid and alcohol dependence through personalized, evidence-based outpatient
              treatment.
            </p>

            {/* Vision / Mission cards — title #e0efa7, gray divider (Figma 564:7762). */}
            <div className="mt-1 grid gap-6 sm:grid-cols-2">
              {cards.map((card) => (
                <motion.div
                  key={card.title}
                  whileHover={cardHover}
                  className="flex flex-col gap-2.5 rounded-lg border border-[#7a7a78] bg-[#2e3e52] p-6 backdrop-blur-[26px]"
                >
                  <div className="border-b border-[#7a7a78] pb-2.5">
                    <h4 className="font-heading text-lg leading-tight font-medium text-[#e0efa7]">
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-sm leading-[1.43] font-normal text-[#c9c9c4]">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
