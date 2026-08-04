import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "HIPAA Notice — NuLease",
  path: "/hipaa-notice",
});

const sections: LegalSection[] = [
  {
    heading: "Notice of Privacy Practices",
    body: [
      "This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.",
      "This is placeholder content pending final legal review. Replace it with your organization's approved HIPAA Notice of Privacy Practices before launch.",
    ],
  },
  {
    heading: "Our Responsibilities",
    body: [
      "NuLease is required by law to maintain the privacy and security of your protected health information (PHI) and to notify you following a breach of unsecured PHI.",
    ],
  },
  {
    heading: "How We May Use Your Health Information",
    body: [
      "We may use and disclose your health information for treatment, payment, and health care operations, and as otherwise permitted or required by law.",
    ],
  },
  {
    heading: "Your Health Information Rights",
    body: [
      "You have the right to inspect and copy your health information, request corrections, and request restrictions on certain uses and disclosures.",
    ],
  },
];

export default function HipaaNoticePage() {
  return (
    <LegalPage
      title="HIPAA Notice"
      description="Our Notice of Privacy Practices for protected health information."
      updated="January 2026"
      sections={sections}
    />
  );
}
