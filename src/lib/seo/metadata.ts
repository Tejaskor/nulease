import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";

interface ConstructMetadataOptions {
  title?: string;
  description?: string;
  /** Path relative to the site root, e.g. "/about". Used for canonical + OG url. */
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

/**
 * Builds a complete Next.js Metadata object (title, description, canonical,
 * Open Graph, Twitter card) from per-page overrides. Use in every route's
 * `generateMetadata`/`metadata` export.
 */
export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  noIndex = false,
  keywords,
}: ConstructMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    title: pageTitle,
    description,
    keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
