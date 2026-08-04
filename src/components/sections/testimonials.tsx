"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { type ReactNode, useCallback, useEffect, useState } from "react";

import { Container, Reveal } from "@/components/shared";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types";

/** "REAL STORIES, REAL RECOVERY — Has this worked for others?" (Figma 473:400). */
export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-[#242424]">
      <Container className="py-16 lg:py-[100px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium tracking-[0.02em] text-[#f0f0ea] uppercase">
                Real Stories, Real Recovery
              </span>
              <span className="h-0.5 w-[97px] bg-[#abcf37]" aria-hidden />
            </div>
            <h2 className="font-heading text-[2rem] leading-[1.22] font-semibold text-[#f4f4ee]">
              Has this worked for others?
            </h2>
            <p className="text-base leading-[1.6] font-normal text-[#c9c9c4]">
              Every story here started the same way yours can with one phone call.
            </p>
          </Reveal>

          <div className="flex gap-3">
            <CarouselButton label="Previous testimonial" disabled={!canPrev} onClick={scrollPrev}>
              <ChevronLeft className="size-5" aria-hidden />
            </CarouselButton>
            <CarouselButton label="Next testimonial" disabled={!canNext} onClick={scrollNext}>
              <ChevronRight className="size-5" aria-hidden />
            </CarouselButton>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <ul className="-ml-6 flex">
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.author}
                className="min-w-0 shrink-0 basis-full pl-6 sm:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function CarouselButton({
  children,
  label,
  disabled,
  onClick,
}: {
  children: ReactNode;
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="focus-visible:ring-blue inline-flex size-11 items-center justify-center rounded-lg bg-[#232e39] text-white/90 transition-colors hover:bg-[#2c3b49] focus-visible:ring-2 focus-visible:outline-none disabled:opacity-40"
    >
      {children}
    </button>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full overflow-hidden rounded-lg">
      {/* Portrait — 166x198 in the design (~42% of the card width). */}
      <div className="relative aspect-[166/198] w-[42%] shrink-0">
        <Image
          src={testimonial.image}
          alt={`Portrait of ${testimonial.author}`}
          fill
          sizes="166px"
          className="object-cover"
        />
      </div>
      {/* Quote panel */}
      <div className="flex flex-1 flex-col gap-3 bg-[#3b3b3b] p-5">
        <div className="flex gap-1" role="img" aria-label={`Rated ${testimonial.rating} of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} aria-hidden className="size-[18px] fill-[#f4c325] text-[#f4c325]" />
          ))}
        </div>
        <blockquote className="flex-1 text-sm leading-[1.45] text-[#e6e6e3]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="text-sm text-[#a8a8a6]">-{testimonial.author}</figcaption>
      </div>
    </figure>
  );
}
