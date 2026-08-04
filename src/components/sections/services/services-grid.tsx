"use client";

import { motion } from "framer-motion";
import { FlaskConical, HandHeart, Pill, Scale, Syringe, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/shared";
import { cardHover, fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: ServiceItem[] = [
  {
    title: "Medication-Assisted Treatment (MAT)",
    description: "Clinically proven medication to reduce cravings and block opioid effects.",
    icon: Pill,
  },
  {
    title: "Counseling & Therapy",
    description: "Clinically proven medication to reduce cravings and block opioid effects.",
    icon: Users,
  },
  {
    title: "Recovery Support Services",
    description: "Clinically proven medication to reduce cravings and block opioid effects.",
    icon: HandHeart,
  },
  {
    title: "Medical & Laboratory Services",
    description: "On-site testing and medical services for your health and safety",
    icon: FlaskConical,
  },
  {
    title: "Legal & Compliance Programs",
    description: "Programs to help you meet legal requirements and move forward.",
    icon: Scale,
  },
  {
    title: "Medical & Laboratory Services",
    description: "On-site testing and medical services for your health and safety",
    icon: Syringe,
  },
];

/** "OUR SERVICES — Your Path at NuLease" (Figma 753:7833). Navy section, 6-card grid. */
export function ServicesGrid() {
  return (
    <section className="bg-[#14263d]">
      <Container className="py-16 lg:py-[100px]">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium tracking-[0.02em] text-[#f0f0ea] uppercase">
              Our Services
            </span>
            <span className="h-0.5 w-[97px] bg-[#abcf37]" aria-hidden />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-[2rem] leading-[1.22] font-semibold text-[#f4f4ee]">
              Your Path at NuLease
            </h2>
            <p className="max-w-[640px] text-base leading-[1.6] font-normal text-[#c9c9c4]">
              Uncertainty is one of the hardest parts of asking for help. Here&rsquo;s exactly what
              happens after you reach out.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function ServiceCard({ item }: { item: ServiceItem }) {
  const { title, description, icon: Icon } = item;
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={cardHover}
      className="group flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-8 text-center transition-colors duration-300 hover:border-[#73931d]/50"
    >
      <span className="flex size-[52px] items-center justify-center rounded-full bg-[#73931d] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6">
        <Icon className="size-6 text-white" aria-hidden strokeWidth={2} />
      </span>
      <h3 className="font-heading text-lg leading-tight font-semibold text-white">{title}</h3>
      <p className="max-w-[260px] text-sm leading-[1.5] font-normal text-[#c9c9c4]">{description}</p>
    </motion.div>
  );
}
