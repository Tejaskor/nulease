import Image from "next/image";
import Link from "next/link";

import { Container, Reveal } from "@/components/shared";
import { assets } from "@/constants/assets";
import { siteConfig } from "@/constants/site";

/** "TRUSTED RECOVERY PARTNER — Take the first step to Better health" (Figma 473:384). */
export function CTA() {
  return (
    <section id="get-started" className="relative isolate overflow-hidden bg-[#14263d]">
      {/* Green wash bleeding from the left into navy. */}
      <div
        className="absolute inset-0 -z-10 [background:linear-gradient(100deg,#3d5322_0%,#2c3b23_34%,#14263d_68%)]"
        aria-hidden
      />

      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Team photo (transparent cut-out), anchored to the bottom edge. */}
          <div className="relative h-64 self-end sm:h-80 lg:h-[372px]">
            <Image
              src={assets.trusted}
              alt="The NuLease clinical team standing together"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain object-bottom lg:object-left-bottom"
            />
          </div>

          {/* Text */}
          <Reveal className="flex max-w-[560px] flex-col gap-5 py-10 lg:py-16">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium tracking-[0.02em] text-[#f0f0ea] uppercase">
                Trusted Recovery Partner
              </span>
              <span className="h-0.5 w-[97px] bg-[#abcf37]" aria-hidden />
            </div>

            <h2 className="font-heading text-[2rem] leading-[1.15] font-bold text-white sm:text-[2.5rem]">
              Take the first step to Better health
            </h2>
            <p className="text-base leading-[1.6] font-normal text-[#c9c9c4]">
              We follow a structured and patient-focused approach to ensure every step of your
              healthcare journey is simple, clear, and effective.
            </p>

            <div className="mt-2 flex items-center gap-2.5">
              <Link
                href="/contact"
                className="focus-visible:ring-blue inline-flex h-10 items-center justify-center rounded-lg border border-[#5b9dd5] bg-[#3277b4] px-4 text-sm font-normal text-[#fbfbf8] transition-colors hover:bg-[#2a6094] focus-visible:ring-2 focus-visible:outline-none"
              >
                Schedule Appointment
              </Link>
              <a
                href="/contact"
                className="focus-visible:ring-blue inline-flex h-10 items-center justify-center rounded-lg border border-[#5b9dd5] bg-[#fbfbf8] px-4 text-sm font-normal text-[#205184] transition-colors hover:bg-white focus-visible:ring-2 focus-visible:outline-none"
              >
                Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
