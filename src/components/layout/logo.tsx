import Image from "next/image";
import Link from "next/link";

import { assets } from "@/constants/assets";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Accessible link back to the top of the page. */
  href?: string;
}

/** NuLease brand wordmark (Figma export). */
export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "focus-visible:ring-blue inline-flex items-center rounded-md focus-visible:ring-2 focus-visible:outline-none",
        className,
      )}
    >
      <Image
        src={assets.logo}
        alt={siteConfig.name}
        priority
        className="h-10 w-auto"
        sizes="120px"
      />
    </Link>
  );
}
