import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container, Reveal, Stagger } from "@/components/shared";
import { services } from "@/data/services";
import { fadeUp } from "@/lib/motion";
import type { ServiceCard } from "@/types";

/** "OUR SERVICES" (Figma 473:299). Section #14263d, 100px padding. */
export function OurServices() {
  return (
    <section id="services" className="bg-[#14263d]">
      <Container className="py-16 lg:py-[100px]">
        {/* Header: intro (left) + View all services (right, bottom-aligned) */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <Reveal className="flex max-w-[1064px] flex-col gap-3">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium tracking-[0.02em] text-[#f0f0ea] uppercase">
                Our Services
              </span>
              <span className="h-0.5 w-[97px] bg-[#abcf37]" aria-hidden />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-heading max-w-[742px] text-[2rem] leading-[1.22] font-semibold text-[#f4f4ee]">
                Compassionate Outpatient Addiction Treatment
              </h2>
              <p className="text-base leading-[1.6] font-normal text-[#c9c9c4]">
                Our evidence-based outpatient care combines medical treatment, behavioral support,
                and personalized care for lasting recovery.
              </p>
            </div>
          </Reveal>

          <Reveal className="shrink-0">
            <Link
              href="/services"
              className="focus-visible:ring-blue inline-flex h-10 items-center gap-1.5 rounded-lg border border-[#5b9dd5] bg-[#fbfbf8] px-4 text-sm font-normal text-[#205184] transition-colors hover:bg-white focus-visible:ring-2 focus-visible:outline-none"
            >
              View all services
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.14}>
          {services.map((item) => (
            <ServiceItemCard key={item.slug} item={item} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function ServiceItemCard({ item }: { item: ServiceCard }) {
  const { title, description, image, imageAlt, href } = item;
  return (
    <Reveal
      variants={fadeUp}
      className="group flex h-full flex-col gap-2.5 rounded-lg border border-[#7a7a78] bg-[#2e3e52] p-6 transition-colors hover:border-[#9aa6b6]"
    >
      {/* 349x218 image, r12 */}
      <div className="relative aspect-[349/218] w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-2 flex flex-1 flex-col gap-3">
        <h3 className="font-heading text-[22px] leading-[1.18] font-semibold text-[#fbfbf8]">
          {title}
        </h3>
        <p className="text-[18px] leading-[1.44] font-normal text-[#c9c9c4]">{description}</p>
        <div className="mt-auto pt-2">
          <Link
            href={href}
            className="focus-visible:ring-blue inline-flex h-10 items-center gap-1.5 rounded-lg border border-[#5b9dd5] bg-[#3277b4] px-4 text-sm font-normal text-[#fbfbf8] transition-colors hover:bg-[#2a6094] focus-visible:ring-2 focus-visible:outline-none"
          >
            Read More
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
