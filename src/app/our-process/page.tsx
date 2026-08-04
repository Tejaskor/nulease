import { PageHeader } from "@/components/layout/page-header";
import { RecoveryJourney } from "@/components/sections";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Our Process — How NuLease Works",
  path: "/our-process",
  keywords: ["treatment process", "how it works", "outpatient recovery steps"],
});

export default function OurProcessPage() {
  return (
    <>
      <PageHeader
        title="Our Process"
        description="From your first call to ongoing support, here's exactly what recovery with NuLease looks like — clear, structured, and built around you."
      />
      <RecoveryJourney />
    </>
  );
}
