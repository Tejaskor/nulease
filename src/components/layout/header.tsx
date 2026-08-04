"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/shared";
import { siteConfig } from "@/constants/site";
import { mainNav } from "@/data/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { buttonHover, buttonTap, easeOutExpo } from "@/lib/motion";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

/** A nav item is active by route (own page) or, for home anchors, by section. */
function useIsActive() {
  const pathname = usePathname();
  const sectionIds = useMemo(
    () => mainNav.filter((i) => i.href.includes("#")).map((i) => i.href.split("#")[1]),
    [],
  );
  const activeId = useActiveSection(sectionIds);
  return (href: string) =>
    href.includes("#") ? pathname === "/" && activeId === href.split("#")[1] : pathname === href;
}

export function Header() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const isActive = useIsActive();

  const closeMenu = useCallback(() => setOpen(false), []);

  // Lock body scroll and close on Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
        className={cn(
          "mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 rounded-2xl border px-4 transition-[background-color,border-color,box-shadow] duration-300 sm:h-16 sm:px-5",
          scrolled
            ? "bg-navy-deep/85 border-white/10 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "border-white/10 bg-white/5 backdrop-blur-md",
        )}
      >
        <Logo href="/" />

        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    active ? "text-brand" : "text-white/70 hover:text-white",
                  )}
                >
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className="bg-brand absolute inset-x-3 -bottom-1 h-0.5 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="absolute inset-x-3 -bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-white/40 transition-transform duration-300 ease-out group-hover:scale-x-100"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.div className="inline-flex" whileHover={buttonHover} whileTap={buttonTap}>
            <Button asChild size="sm">
              <Link href="/contact">Schedule Appointment</Link>
            </Button>
          </motion.div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="focus-visible:ring-blue inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:outline-none lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu className="size-6" aria-hidden />
        </button>
      </motion.nav>

      <MobileDrawer open={open} isActive={isActive} onClose={closeMenu} />
    </header>
  );
}

interface MobileDrawerProps {
  open: boolean;
  isActive: (href: string) => boolean;
  onClose: () => void;
}

function MobileDrawer({ open, isActive, onClose }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="bg-surface fixed inset-y-0 right-0 z-50 flex w-[min(84vw,20rem)] flex-col gap-8 border-l border-white/10 p-6 lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 360, damping: 36 }}
          >
            <div className="flex items-center justify-between">
              <Logo href="/" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="focus-visible:ring-brand inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:outline-none"
              >
                <X className="size-6" aria-hidden />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-brand/10 text-brand"
                          : "text-white/80 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto flex flex-col gap-4">
              <a
                href={siteConfig.contact.phoneHref}
                className="text-brand flex items-center gap-2 text-sm font-semibold"
              >
                <Phone className="size-4" aria-hidden />
                {siteConfig.contact.phone}
              </a>
              <Button asChild size="lg" className="w-full">
                <Link href="/contact" onClick={onClose}>
                  Schedule Appointment
                </Link>
              </Button>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
