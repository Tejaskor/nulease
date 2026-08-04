import type { ReactNode } from "react";

import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Small uppercase kicker with the brand underline mark. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span className={cn("inline-flex flex-col gap-2", className)}>
      <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
        {children}
      </span>
      <span className="bg-brand h-0.5 w-10 rounded-full" aria-hidden />
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** "split" places the title and description side by side on large screens. */
  layout?: "stacked" | "split";
  className?: string;
  titleClassName?: string;
  /** Heading level for correct document outline. */
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  layout = "stacked",
  className,
  titleClassName,
  as: TitleTag = "h2",
}: SectionHeadingProps) {
  const isSplit = layout === "split";

  return (
    <Reveal
      className={cn(
        isSplit ? "grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12" : "flex flex-col gap-4",
        align === "center" && !isSplit && "items-center text-center",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-4", align === "center" && !isSplit && "items-center")}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <TitleTag
          className={cn(
            "font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
            titleClassName,
          )}
        >
          {title}
        </TitleTag>
      </div>
      {description ? (
        <p
          className={cn(
            "text-body-gray max-w-xl text-base leading-relaxed sm:text-lg",
            isSplit && "lg:pb-1.5",
            align === "center" && !isSplit && "mx-auto text-center",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
