import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Vertical rhythm. Defaults to comfortable marketing spacing. */
  spacing?: "none" | "sm" | "md" | "lg";
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

const spacingMap: Record<NonNullable<SectionProps["spacing"]>, string> = {
  none: "",
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
};

/** Semantic `<section>` with consistent vertical spacing and scroll anchor. */
export function Section({ children, id, className, spacing = "md", ...aria }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24", spacingMap[spacing], className)}
      {...aria}
    >
      {children}
    </section>
  );
}
