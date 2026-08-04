import {
  CTA,
  Hero,
  NuLeaseDifference,
  OurServices,
  RecoveryJourney,
  Testimonials,
} from "@/components/sections";
import { TrustStrip } from "@/components/sections/about/trust-strip";
import { BreadcrumbJsonLd } from "@/lib/seo/json-ld";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  path: "/",
  keywords: [
    "addiction treatment",
    "outpatient rehab",
    "opioid addiction treatment",
    "medication-assisted treatment",
    "recovery program",
    "NuLease",
  ],
});

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      {/* Figma home-page order (473:173). */}
      <Hero />
      <TrustStrip />
      <NuLeaseDifference />
      <OurServices />
      <RecoveryJourney />
      <CTA />
      <Testimonials />
    </>
  );
}
