/**
 * Central site configuration. Values here feed SEO metadata, structured data,
 * sitemap and robots. Update the domain/socials once finalized.
 */
export const siteConfig = {
  name: "NuLease",
  title: "NuLease — Compassionate Outpatient Addiction Treatment",
  description:
    "NuLease provides compassionate, evidence-based outpatient addiction treatment. Expert physicians, confidential care, and personalized recovery plans built around your life.",
  // Public production URL. Override with NEXT_PUBLIC_SITE_URL in the environment.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nulease.com",
  ogImage: "/images/og-image.png",
  locale: "en_US",
  themeColor: "#202020",
  links: {
    twitter: "https://twitter.com/nulease",
    linkedin: "https://www.linkedin.com/company/nulease",
    facebook: "https://www.facebook.com/nulease",
    instagram: "https://www.instagram.com/nulease",
  },
  contact: {
    email: "care@nulease.com",
    phone: "(502) 492-7455",
    phoneHref: "tel:+15024927455",
    address: "5722 Outer Loop, Louisville, KY 40219",
  },
} as const;

export type SiteConfig = typeof siteConfig;
