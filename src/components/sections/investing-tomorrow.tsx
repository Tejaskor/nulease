"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { Container, Reveal, Section, SectionHeading } from "@/components/shared";
import { images } from "@/constants/images";
import { highlights } from "@/data/highlights";
import { slideRight } from "@/lib/motion";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5000;

export function InvestingTomorrow() {
  const [active, setActive] = useState(1);

  // Auto-advance the highlighted card, pausing while the tab is hidden.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % highlights.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, []);

  const handleActivate = useCallback((index: number) => setActive(index), []);

  return (
    <Section spacing="lg" className="bg-charcoal">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal variants={slideRight} className="flex flex-col gap-6">
            <SectionHeading
              as="h2"
              title="Investing in a better tomorrow"
              description="We follow a structured, patient-focused approach to ensure every step of your healthcare journey is simple, clear, and effective."
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={images.investing.main}
                alt="NuLease multidisciplinary care team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="from-navy/50 absolute inset-0 bg-gradient-to-t to-transparent" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-4" role="tablist" aria-label="Our approach">
            {highlights.map((card, index) => {
              const isActive = active === index;
              return (
                <button
                  key={card.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleActivate(index)}
                  onMouseEnter={() => handleActivate(index)}
                  className={cn(
                    "focus-visible:ring-brand group relative overflow-hidden rounded-2xl text-left transition-all duration-500 focus-visible:ring-2 focus-visible:outline-none",
                    isActive ? "h-56 lg:h-64" : "h-24 hover:h-28",
                  )}
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={cn(
                      "object-cover transition-transform duration-700",
                      isActive ? "scale-105" : "scale-100 grayscale group-hover:grayscale-0",
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      isActive
                        ? "bg-gradient-to-t from-black/85 via-black/50 to-black/20"
                        : "bg-black/60",
                    )}
                  />
                  <div className="relative flex h-full flex-col justify-between p-5">
                    <span
                      className={cn(
                        "font-heading text-2xl font-bold transition-colors",
                        isActive ? "text-brand" : "text-white/80",
                      )}
                    >
                      {card.id}
                    </span>
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col gap-1.5"
                      >
                        <h3 className="font-heading text-lg font-semibold text-white">
                          {card.title}
                        </h3>
                        <p className="max-w-md text-sm leading-relaxed text-white/75">
                          {card.description}
                        </p>
                      </motion.div>
                    ) : (
                      <h3 className="font-heading text-base font-semibold text-white/90">
                        {card.title}
                      </h3>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
