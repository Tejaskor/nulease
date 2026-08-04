"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Container } from "@/components/shared";
import faqDoctor from "@/images/contact-us/contact-us.svg";
import {
  accordionReveal,
  easeOutExpo,
  fadeInLeft,
  fadeInUp,
  floating,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does NuLease provide?",
    answer:
      "We provide comprehensive outpatient addiction treatment — including Medication-Assisted Treatment (MAT), individual and group counseling, recovery support, HIV & STI care, and medical and laboratory services.",
  },
  {
    question: "What is Medication-Assisted Treatment (MAT)?",
    answer:
      "MAT combines FDA-approved medications with behavioral counseling to help you safely manage withdrawal, reduce cravings, and lower the risk of relapse.",
  },
  {
    question: "What types of addiction do you treat?",
    answer:
      "We treat opioid and alcohol use disorders and provide compassionate, evidence-based care for related dependencies.",
  },
  {
    question: "Do you offer mental health counseling?",
    answer:
      "Yes. Our licensed clinicians offer individual and group counseling to support your mental health throughout recovery.",
  },
  {
    question: "Is treatment confidential?",
    answer:
      "Absolutely. Every appointment and record is protected under HIPAA, and nothing is shared without your explicit consent.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We accept most major insurance plans, including Medicaid and many commercial providers. We'll verify your benefits before your first visit.",
  },
];

/** "FAQ — Some context can help" (Figma 647:50711). Charcoal, accordion + doctor. */
export function ContactFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#242424]">
      <Container className="py-16 lg:py-[100px]">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-3"
        >
          <motion.div variants={fadeInUp} className="flex flex-col gap-2.5">
            <span className="text-sm font-medium tracking-[0.02em] text-[#f0f0ea] uppercase">
              FAQ
            </span>
            <span className="h-0.5 w-[60px] bg-[#abcf37]" aria-hidden />
          </motion.div>
          <motion.h2
            variants={fadeInLeft}
            className="font-heading text-[2rem] leading-[1.22] font-semibold text-[#f4f4ee]"
          >
            Some context can help
          </motion.h2>
          <motion.p variants={fadeInUp} className="max-w-[640px] text-base leading-[1.6] text-[#c9c9c4]">
            Clear answers to common questions about addiction, mental health and getting support.
          </motion.p>
        </motion.div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_460px] lg:gap-14">
          {/* Accordion — staggered reveal */}
          <motion.ul
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.li
                  key={faq.question}
                  variants={accordionReveal}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={cn(
                    "rounded-xl border transition-colors",
                    isOpen
                      ? "border-[#abcf37]/40 bg-white/[0.03]"
                      : "border-white/12 hover:bg-white/[0.02]",
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="focus-visible:ring-blue flex w-full items-center gap-4 px-5 py-4 text-left focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <span className="text-sm font-medium text-white/50 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[15px] font-medium text-white">{faq.question}</span>
                    <Plus
                      className={cn(
                        "size-5 shrink-0 text-white/70 transition-transform duration-300 ease-out",
                        isOpen && "rotate-45 text-[#abcf37]",
                      )}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: easeOutExpo }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 pl-[3.25rem] text-sm leading-relaxed text-[#c9c9c4]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Doctor cut-out on green blob — slide-right + zoom-reveal, then float. */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 60, scale: 1.08 },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 0.8, ease: easeOutExpo },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mx-auto hidden w-full max-w-[460px] lg:block"
          >
            <motion.div {...floating(10, 4)}>
              <Image src={faqDoctor} alt="A NuLease clinician" sizes="460px" className="h-auto w-full" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
