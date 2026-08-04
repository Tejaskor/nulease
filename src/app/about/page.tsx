import {
  AboutCTA,
  AboutHero,
  AboutUs,
  Impact,
  MeetExperts,
  TrustStrip,
} from "@/components/sections/about";
import { BreadcrumbJsonLd } from "@/lib/seo/json-ld";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "About NuLease — Your Partner in Lasting Addiction Recovery",
  path: "/about",
  keywords: [
    "about NuLease",
    "addiction recovery team",
    "outpatient addiction treatment",
    "NuLease physicians",
  ],
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <AboutHero />
      <TrustStrip />
      <AboutUs />
      <MeetExperts />
      <Impact />
      <AboutCTA />
    </>
  );
}
