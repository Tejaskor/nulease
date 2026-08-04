import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group focus-visible:ring-blue focus-visible:ring-offset-surface relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full font-semibold whitespace-nowrap transition-[transform,background-color,box-shadow,color] duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-[1.15em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-blue text-blue-foreground shadow-blue/50 hover:bg-blue-strong hover:shadow-blue/60 shadow-[0_10px_30px_-12px] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px]",
        brand:
          "bg-brand text-brand-foreground shadow-brand/60 hover:bg-brand-strong shadow-[0_10px_30px_-12px] hover:-translate-y-0.5",
        light: "text-navy bg-white hover:-translate-y-0.5 hover:bg-white/90",
        navy: "bg-navy hover:bg-navy/80 text-white hover:-translate-y-0.5",
        outline:
          "border border-white/25 bg-transparent text-white hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5",
        ghost: "bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
        link: "text-blue rounded-none underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
export type { ButtonProps };
