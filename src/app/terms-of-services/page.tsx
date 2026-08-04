import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Terms of Services — NuLease",
  path: "/terms-of-services",
});

const sections: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    body: [
      "By accessing or using the NuLease website and services, you agree to be bound by these Terms of Services. If you do not agree, please do not use our services.",
      "This is placeholder content pending final legal review. Replace it with your organization's approved Terms of Services before launch.",
    ],
  },
  {
    heading: "Use of Services",
    body: [
      "Our services are intended to support outpatient addiction treatment. Information provided on this site is for general informational purposes and is not a substitute for professional medical advice.",
    ],
  },
  {
    heading: "Appointments & Communication",
    body: [
      "Scheduling an appointment through our website constitutes a request, not a confirmation. A member of our care team will follow up to confirm details.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, NuLease is not liable for any indirect or consequential damages arising from your use of the website.",
    ],
  },
];

export default function TermsOfServicesPage() {
  return (
    <LegalPage
      title="Terms of Services"
      description="The terms that govern your use of the NuLease website and services."
      updated="January 2026"
      sections={sections}
    />
  );
}
