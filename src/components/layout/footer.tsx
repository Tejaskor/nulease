import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/layout/social-icons";
import { Container, Reveal } from "@/components/shared";
import { siteConfig } from "@/constants/site";
import { footerPolicies, footerQuickLinks } from "@/data/navigation";
import { fadeInUp } from "@/lib/motion";

/** Social order per Figma: X, Instagram, Facebook, LinkedIn. */
const socials = [
  { label: "X", href: siteConfig.links.twitter, icon: TwitterIcon },
  { label: "Instagram", href: siteConfig.links.instagram, icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.links.facebook, icon: FacebookIcon },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedinIcon },
];

/** Footer (Figma 473:471). Section #14263d. */
export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-[#14263d] text-[#c9c9c4]">
      <Container className="pt-14 pb-8 lg:pt-16">
       <Reveal variants={fadeInUp}>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.3fr] lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo href="/" className="w-64" />
            <p className="max-w-xs text-[15px] leading-[1.6] text-[#9aa6b6]">
              Compassionate, evidence-based outpatient addiction treatment built around your life,
              your goals, and your pace
            </p>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" links={footerQuickLinks} />

          {/* Policies */}
          <FooterColumn title="Policies" links={footerPolicies} />

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-white">Contact</h3>
            <ul className="flex flex-col gap-3.5 text-[15px]">
              <li className="flex items-start gap-2.5">
                <MapPin className="text-brand mt-0.5 size-[18px] shrink-0" aria-hidden />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="text-brand size-[18px] shrink-0" aria-hidden />
                <a href={siteConfig.contact.phoneHref} className="transition-colors hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="text-brand size-[18px] shrink-0" aria-hidden />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="mt-12 border-t border-white/12 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-[15px] text-[#9aa6b6] sm:flex-row">
            <p>© Copyright 2026, All Rights Reserved</p>
            <ul className="flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="focus-visible:ring-blue hover:bg-brand hover:text-navy-deep inline-flex size-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition-[color,background-color,transform] duration-[250ms] ease-out hover:scale-[1.15] hover:-rotate-6 focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <Icon className="size-[15px]" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
       </Reveal>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title} className="flex flex-col gap-4">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <ul className="flex flex-col gap-3 text-[15px]">
        {links.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="text-[#9aa6b6] transition-colors hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
