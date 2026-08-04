"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Container, Reveal, Stagger } from "@/components/shared";
import { assets } from "@/constants/assets";
import { differenceCards } from "@/data/difference";
import { collageReveal, fadeUp, scaleIn } from "@/lib/motion";
import type { DifferenceCard } from "@/types";

/**
 * "WHY CHOOSE NULEASE — The NuLease Difference" (Figma 473:261).
 * Section: #242424, 100px padding, two columns with an 80px gap.
 */
export function NuLeaseDifference() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-[#242424]">
      {/* Olive radial glow, top-left (Ellipse 7). */}
      <div
        className="absolute top-[68px] -left-[117px] -z-10 size-[629px] rounded-full opacity-80 blur-[120px] [background:radial-gradient(circle,#47591b_0%,#232d09_70%)]"
        aria-hidden
      />

      <Container className="py-16 lg:py-[100px]">
        <div className="grid items-center gap-12 lg:grid-cols-[519fr_641fr] lg:gap-20">
          <Reveal variants={collageReveal}>
            <DifferenceCollage />
          </Reveal>

          <div className="flex flex-col gap-8 lg:gap-10">
            {/* Heading block — label, heading and paragraph fade up in sequence. */}
            <Stagger as="div" className="flex flex-col gap-3" stagger={0.12}>
              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                <span className="text-sm font-medium tracking-[0.02em] text-[#f0f0ea] uppercase">
                  Why Choose Nulease
                </span>
                <span className="h-0.5 w-[97px] bg-[#abcf37]" aria-hidden />
              </motion.div>
              <Stagger as="div" className="flex flex-col gap-4" stagger={0.12}>
                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-[2rem] leading-[1.22] font-semibold text-[#f4f4ee]"
                >
                  The NuLease Difference
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="max-w-[641px] text-base leading-[1.6] font-normal text-[#c9c9c4]"
                >
                  Every recovery journey is different. That&rsquo;s why we combine expert medical
                  care, evidence-based treatment, and unwavering support to help you move forward.
                </motion.p>
              </Stagger>
            </Stagger>

            {/* Feature rows — raw motion children so the Stagger truly staggers them. */}
            <Stagger className="flex flex-col gap-4" stagger={0.12}>
              {differenceCards.map((card, index) => (
                <DifferenceRow key={card.title} card={card} divided={index > 0} />
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DifferenceRow({ card, divided }: { card: DifferenceCard; divided: boolean }) {
  return (
    <motion.div variants={fadeUp} className={divided ? "border-t border-[#61615f] pt-4" : undefined}>
      {/* Inner element carries the hover transform/shadow — kept off the motion
          node so it never fights Framer's entrance transform. */}
      <div className="group flex items-start gap-7 rounded-lg transition-all duration-300 ease-out hover:translate-x-2 hover:bg-white/[0.02] hover:shadow-lg">
        <motion.span
          variants={scaleIn}
          className="flex size-[60px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#57701b]"
        >
          <Image
            src={card.icon}
            alt=""
            aria-hidden
            className="size-[30px] transition-transform duration-300 ease-out group-hover:scale-[1.08]"
          />
        </motion.span>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-[22px] leading-[1.18] font-medium text-[#f0f0ea]">
            {card.title}
          </h3>
          <p className="text-base leading-[1.6] font-normal text-[#7a7a78]">{card.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Photo collage: two stacked images (276w) on the left, one (274w) overlapping
 * to the right. Positions/sizes are exact percentages of the 519x553 group.
 * Each image floats independently; hover adds a subtle zoom + shadow.
 */
function DifferenceCollage() {
  return (
    <div className="relative mx-auto aspect-[519/553] w-full max-w-[519px]">
      {/* Green glow pulsing behind the overlapping centre image (decorative). */}
      <div
        aria-hidden
        className="animate-collage-glow pointer-events-none absolute top-[35%] left-[62%] size-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] [background:radial-gradient(circle,#abcf37_0%,#57701b_55%,transparent_75%)]"
      />

      {/* Top-left — counseling (276x276) */}
      <div className="animate-collage-top group absolute top-0 left-0 aspect-square w-[53.2%] overflow-hidden rounded-xl transition-shadow duration-300 ease-out hover:shadow-2xl">
        <Image
          src={assets.collage.counseling}
          alt="A counsellor talking with a patient during a session"
          fill
          sizes="(max-width: 1024px) 40vw, 18vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
      {/* Bottom-left — patient confidentiality (276x257) */}
      <div className="animate-collage-bottom group absolute top-[53.3%] left-0 aspect-[276/257] w-[53.2%] overflow-hidden rounded-xl transition-shadow duration-300 ease-out hover:shadow-2xl">
        <Image
          src={assets.collage.confidential}
          alt="A clinician holding a sign reading Patient Confidentiality"
          fill
          sizes="(max-width: 1024px) 40vw, 18vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
      {/* Middle-right — doctor + accreditation (274x258), overlapping on top */}
      <div className="animate-collage-center group absolute top-[22.8%] left-[47.2%] aspect-[274/258] w-[52.8%] overflow-hidden rounded-xl ring-[6px] ring-[#242424] transition-shadow duration-300 ease-out hover:shadow-2xl">
        <Image
          src={assets.collage.doctor}
          alt="A physician working at a laptop with an accreditation badge"
          fill
          sizes="(max-width: 1024px) 40vw, 18vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}
