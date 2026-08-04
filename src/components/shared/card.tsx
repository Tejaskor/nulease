import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Adds a subtle hover-lift + border highlight. */
  interactive?: boolean;
}

/** Generic raised surface used as the base for feature/service cards. */
export function Card({ children, className, as: Tag = "div", interactive = false }: CardProps) {
  return (
    <Tag
      className={cn(
        "bg-surface-raised relative rounded-2xl border border-white/8",
        interactive &&
          "hover:border-brand/40 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
