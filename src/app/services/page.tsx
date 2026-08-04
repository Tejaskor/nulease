import {
  OurDepartment,
  ServicesCTA,
  ServicesGrid,
  ServicesHero,
} from "@/components/sections/services";
import { BreadcrumbJsonLd } from "@/lib/seo/json-ld";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Services — Compassionate Outpatient Addiction Treatment",
  path: "/services",
  keywords: [
    "medication-assisted treatment",
    "counseling and therapy",
    "recovery support services",
    "HIV STI care",
    "NuLease services",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
      <OurDepartment />
    </>
  );
}
