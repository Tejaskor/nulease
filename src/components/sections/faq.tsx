"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

import { Container, Section, SectionHeading } from "@/components/shared";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" spacing="lg" className="bg-charcoal">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          layout="split"
          title="Some context can help"
          description="Clear answers to common questions about addiction, mental health, and getting support."
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;
            return (
              <div
                key={faq.question}
                className={cn(
                  "overflow-hidden rounded-xl border transition-colors duration-300",
                  isOpen
                    ? "border-brand/30 bg-surface-raised"
                    : "bg-surface-raised/50 border-white/8",
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="focus-visible:ring-blue flex w-full items-center gap-4 p-4 text-left focus-visible:ring-2 focus-visible:outline-none sm:p-5"
                  >
                    <span className="text-body-gray font-heading w-6 shrink-0 text-sm font-semibold tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm font-medium text-white sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "bg-brand text-brand-foreground flex size-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    >
                      <Plus className="size-5" aria-hidden />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-body-gray px-4 pb-4 pl-14 text-sm leading-relaxed sm:px-5 sm:pb-5 sm:pl-15">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
