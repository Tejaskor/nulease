"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { Container } from "@/components/shared";
import { aboutAssets } from "@/constants/about-assets";
import { fadeInUp, imageReveal, staggerContainer, viewportOnce } from "@/lib/motion";

interface Expert {
  image: StaticImageData;
  name: string;
  role: string;
  bio: string;
}

const experts: Expert[] = [
  {
    image: aboutAssets.experts[0],
    name: "Shannon Cales, RRT, MHA",
    role: "(Founder and CEO)",
    bio: "Making health care decisions without transparency is like trying to navigate a ship in dense fog. Without clear visibility, it's challenging to make informed choices, and there's a higher risk of making a wrong turn or running aground. For employers, the lack of control over data and the inability to know the underlying cost of services is like assembling a puzzle with missing pieces.",
  },
  {
    image: aboutAssets.experts[1],
    name: "Dr. Cales",
    role: "(Medical Director)",
    bio: "Dr. Cales, M.D. is triple-boarded in Internal, Addiction and Emergency Medicine. Currently, he serves as the Kentucky Trauma Board Chair. Dr. Cales has spent his career in Emergency settings and works to improve the over-prescribing of Opioids by fellow physicians. Dr. Cales is active in KYSAM and research surrounding Addiction. He believes transparency is key and works with leaders to advocate for stronger Medicaid assistance.",
  },
];

/** "MEET NULEASE EXPERT" (Figma 564:7704). Charcoal #242424, two profile cards. */
export function MeetExperts() {
  return (
    <section className="bg-[#242424]">
      <Container className="py-16 lg:py-[100px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-2.5"
        >
          <span className="text-sm font-medium tracking-[0.02em] text-[#f0f0ea] uppercase">
            Meet Nulease Expert
          </span>
          <span className="h-0.5 w-[97px] bg-[#abcf37]" aria-hidden />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-x-12 gap-y-14 md:grid-cols-2"
        >
          {experts.map((expert) => (
            <motion.article
              key={expert.name}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col"
            >
              {/* Composite visual: person on a colour blob + floating badge. */}
              <motion.div variants={imageReveal} className="relative aspect-[588/355] w-full">
                <Image
                  src={expert.image}
                  alt={`${expert.name}, ${expert.role.replace(/[()]/g, "")}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-top transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                />
              </motion.div>
              <h3 className="font-heading mt-5 text-[26px] leading-tight font-bold text-white">
                {expert.name}
              </h3>
              <p className="font-heading mt-1 text-xl font-medium text-white">{expert.role}</p>
              <p className="mt-4 text-[15px] leading-[1.55] font-normal text-[#c9c9c4]">
                {expert.bio}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
