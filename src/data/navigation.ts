import type { NavItem } from "@/types";

/** Primary nav (Figma Nav Bar 479:3083). Each link is now a real route. */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

/** Footer "Quick Links" column (Figma 473:471). */
export const footerQuickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Process", href: "/our-process" },
];

/** Footer "Policies" column. */
export const footerPolicies: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Services", href: "/terms-of-services" },
  { label: "HIPAA Notice", href: "/hipaa-notice" },
  { label: "Accessibility", href: "/accessibility" },
];
