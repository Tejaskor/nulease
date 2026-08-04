import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "glass";
}

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  solid: "bg-brand/15 text-brand ring-1 ring-inset ring-brand/25",
  outline: "text-foreground/80 ring-1 ring-inset ring-white/15",
  glass: "bg-white/10 text-white ring-1 ring-inset ring-white/20 backdrop-blur-md",
};

/** Small pill label used for eyebrows and trust badges. */
export function Badge({ children, className, variant = "solid" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
