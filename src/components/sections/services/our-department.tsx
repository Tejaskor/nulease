"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import { Container } from "@/components/shared";
import counselingImg from "@/images/services/Individual & Group Counseling.png";
import hivStiCareImg from "@/images/services/HIV & STI Care.png";
import matImg from "@/images/services/our-department.png";
import detoxImg from "@/images/services/Outpatient Detox Support.png";
import recoverySupportImg from "@/images/services/Recovery Support Services.png";
import relapsePreventionImg from "@/images/services/Relapse Prevention.png";
import {
  easeOutExpo,
  fadeInUp,
  sidebarReveal,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Content panel: slides in from the right and staggers its children. */
const panelVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: easeOutExpo, when: "beforeChildren", staggerChildren: 0.06 },
  },
  exit: { opacity: 0, x: -20, transition: { duration: 0.25, ease: easeOutExpo } },
};

const zoomChild = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOutExpo } },
};

interface Department {
  tab: string;
  title: string;
  description: string;
  points: string[];
  image: StaticImageData;
}

const departments: Department[] = [
  {
    tab: "Medication-Assisted Treatment (MAT)",
    title: "Medication-Assisted Treatment (MAT)",
    description:
      "Medication-Assisted Treatment combines FDA-approved medications with behavioral counseling to help individuals safely manage withdrawal symptoms, reduce cravings, and lower the risk of relapse. Our treatment plans are personalized for each patient and support long-term recovery from opioid and alcohol use disorders.",
    points: [
      "FDA-approved medications prescribed by experienced providers",
      "Treatment for opioid and alcohol dependence",
      "FDA-approved medications prescribed by experienced providers",
    ],
    image: matImg,
  },
  {
    tab: "Individual & Group Counseling",
    title: "Individual & Group Counseling",
    description:
      "Compassionate, evidence-based counseling delivered one-on-one and in supportive group settings, helping you build coping skills, process challenges, and stay connected to a community that understands your journey.",
    points: [
      "Licensed clinicians and certified counselors",
      "Confidential individual and group sessions",
      "Flexible scheduling around your life",
    ],
    image: counselingImg,
  },
  {
    tab: "Recovery Support Services",
    title: "Recovery Support Services",
    description:
      "Ongoing support that keeps recovery steady long after treatment begins — from peer support and case management to community resources tailored to your goals.",
    points: [
      "Dedicated peer and recovery coaches",
      "Case management and community referrals",
      "Long-term relapse-prevention planning",
    ],
    image: recoverySupportImg,
  },
  {
    tab: "HIV & STI Care",
    title: "HIV & STI Care",
    description:
      "Private, judgment-free testing and treatment for HIV and STIs, with accurate diagnosis, effective care, and continuous medical monitoring in a safe, confidential environment.",
    points: [
      "Confidential testing and rapid results",
      "Evidence-based treatment and monitoring",
      "Compassionate, discreet care",
    ],
    image: hivStiCareImg,
  },
  {
    tab: "Relapse Prevention",
    title: "Relapse Prevention",
    description:
      "Recovery is an ongoing journey. Our relapse prevention program helps you identify triggers, develop healthy coping strategies, and build the confidence to stay on track through continuous support and personalized care.",
    points: [
      "Individualized relapse-prevention planning",
      "Trigger identification and healthy coping skills",
      "Regular follow-ups to keep you on track",
    ],
    image: relapsePreventionImg,
  },
  {
    tab: "Outpatient Detox Support",
    title: "Outpatient Detox Support",
    description:
      "Begin your recovery with medically supervised outpatient detox. Our team helps you manage withdrawal symptoms safely and comfortably while you continue living at home, with a clear path into ongoing treatment.",
    points: [
      "Comprehensive evaluation to determine the safest detox approach",
      "Medically supervised withdrawal management and monitoring",
      "Seamless transition into ongoing treatment and recovery planning",
    ],
    image: detoxImg,
  },
];

/** "OUR DEPARTMENT" (Figma 753:7833). Charcoal section, tab list + detail panel. */
export function OurDepartment() {
  const [active, setActive] = useState(0);
  const current = departments[active];

  return (
    <section className="bg-[#242424]">
      <Container className="py-16 lg:py-[100px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-3"
        >
          <span className="text-sm font-medium tracking-[0.02em] text-[#f0f0ea] uppercase">
            Our Department
          </span>
          <span className="h-0.5 w-[97px] bg-[#abcf37]" aria-hidden />
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[340px_1fr] lg:gap-12">
          {/* Tabs — slide in from the left, staggered */}
          <motion.ul
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
            role="tablist"
            aria-label="Departments"
          >
            {departments.map((dept, i) => {
              const isActive = i === active;
              return (
                <motion.li key={dept.tab} variants={sidebarReveal}>
                  <motion.button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className={cn(
                      "focus-visible:ring-blue relative w-full rounded-lg px-5 py-4 text-left text-[15px] font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none",
                      isActive ? "text-white" : "border border-white/15 text-white/85 hover:bg-white/5",
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="dept-active"
                        className="absolute inset-0 -z-0 rounded-lg bg-[#73931d]"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                        aria-hidden
                      />
                    ) : null}
                    <span className="relative z-10">{dept.tab}</span>
                  </motion.button>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Detail — cross-fades + slides on tab change */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-5"
            >
              <motion.div
                variants={zoomChild}
                className="group relative aspect-[490/240] w-full overflow-hidden rounded-xl"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
              </motion.div>
              <motion.h3
                variants={fadeInUp}
                className="font-heading text-2xl leading-tight font-semibold text-white"
              >
                {current.title}
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-[15px] leading-[1.7] font-normal text-[#c9c9c4]"
              >
                {current.description}
              </motion.p>
              <motion.ul variants={staggerContainer(0.05)} className="flex flex-col gap-2">
                {current.points.map((point, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-2.5 text-[15px] text-[#c9c9c4]"
                  >
                    <span className="bg-brand mt-2 size-1.5 shrink-0 rounded-full" aria-hidden />
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
