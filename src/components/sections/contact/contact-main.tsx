"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/shared";
import { assets } from "@/constants/assets";
import { ContactForm } from "@/features/contact/contact-form";
import { cardHover, easeOutExpo, staggerContainer, viewportOnce } from "@/lib/motion";

interface InfoCard {
  icon: LucideIcon;
  label: string;
  value: string;
  direction?: boolean;
}

const info: InfoCard[] = [
  { icon: Mail, label: "Email", value: "5722 Outer Loop, Louisville, KY 40219" },
  {
    icon: MapPin,
    label: "Address-01",
    value: "5722 Outer Loop, Louisville, KY 40219",
    direction: true,
  },
  {
    icon: MapPin,
    label: "Address-02",
    value: "1327 East Broadway suite B, Campbellsville Kentucky 42718",
    direction: true,
  },
];

/** Content columns split-reveal: form from the left, info from the right. */
const slideLeftFar = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOutExpo } },
};
const slideRightFar = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOutExpo } },
};

/** Contact form + "We're here to help" cards (Figma 647:50711). Navy #14263d. */
export function ContactMain() {
  return (
    <section
      id="contact-form"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#14263d] pt-28 pb-16 lg:pt-[150px] lg:pb-24"
    >
      <Image
        src={assets.heroBackground}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-right-top opacity-[0.08]"
      />

      <Container>
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-10 lg:grid-cols-2 lg:gap-14"
        >
          {/* Form card — slides in from the left */}
          <motion.div
            variants={slideLeftFar}
            className="rounded-2xl border border-white/10 bg-[#0f1e35]/70 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2.5">
              <h1 className="font-heading text-[1.75rem] leading-tight font-semibold text-white">
                Get in touch
              </h1>
              <motion.span
                className="h-0.5 origin-left bg-[#abcf37]"
                initial={{ width: 0 }}
                whileInView={{ width: 97 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.3 }}
                aria-hidden
              />
            </div>
            <p className="mt-4 mb-6 max-w-md text-sm leading-relaxed text-[#c9c9c4]">
              Just fill out the form below and we will get back to you as soon as possible.
            </p>
            <ContactForm />
          </motion.div>

          {/* Contact info — slides in from the right, cards stagger */}
          <motion.div variants={slideRightFar} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <h2 className="font-heading text-[1.75rem] leading-tight font-semibold text-white">
                We&rsquo;re here to help
              </h2>
              <span className="h-0.5 w-[97px] bg-[#abcf37]" aria-hidden />
            </div>
            <p className="text-base leading-relaxed text-[#c9c9c4]">
              Call any time to schedule a private consultation.
            </p>

            <motion.ul
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-4"
            >
              {info.map((card) => (
                <InfoRow key={card.label} card={card} />
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

const rowReveal = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOutExpo } },
};

function InfoRow({ card }: { card: InfoCard }) {
  const Icon = card.icon;
  return (
    <motion.li
      variants={rowReveal}
      whileHover={cardHover}
      className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#73931d]/50"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#73931d] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6">
        <Icon className="size-5 text-white" aria-hidden />
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-base font-medium text-white">{card.label}</span>
        <span className="text-[15px] leading-relaxed text-[#c9c9c4]">{card.value}</span>
        {card.direction ? (
          <a
            href="#"
            className="text-blue group/link mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[#5b9dd5]"
          >
            Get Direction
            <ArrowRight
              className="size-4 transition-transform duration-300 ease-out group-hover/link:translate-x-1.5"
              aria-hidden
            />
          </a>
        ) : null}
      </div>
    </motion.li>
  );
}
