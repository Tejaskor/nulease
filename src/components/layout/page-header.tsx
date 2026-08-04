import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared";
import { assets } from "@/constants/assets";

interface PageHeaderProps {
  title: string;
  description?: string;
  /** Highlighted (green) trailing portion of the title, if any. */
  highlight?: string;
}

/** Shared interior-page hero: brand backdrop, breadcrumb, title. */
export function PageHeader({ title, description, highlight }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#242424] pt-32 pb-14 lg:pt-[160px] lg:pb-20">
      <Image
        src={assets.heroBackground}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-left-top opacity-[0.2]"
      />
      <div
        className="absolute top-[45%] left-[82%] -z-10 size-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[150px] [background:radial-gradient(circle,#47591b_0%,#232d09_55%,transparent_75%)]"
        aria-hidden
      />

      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="size-4 shrink-0" aria-hidden />
          <span className="text-brand font-medium">{title}</span>
        </nav>

        <h1 className="font-heading mt-4 text-[2rem] leading-[1.15] font-bold text-white sm:text-[2.5rem]">
          {title}
          {highlight ? <span className="text-brand"> {highlight}</span> : null}
        </h1>

        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-[1.6] text-[#c9c9c4]">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
