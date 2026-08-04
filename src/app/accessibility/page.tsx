import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Accessibility — NuLease",
  path: "/accessibility",
});

const sections: LegalSection[] = [
  {
    heading: "Our Commitment",
    body: [
      "NuLease is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.",
      "This is placeholder content pending final review. Replace it with your organization's approved Accessibility Statement before launch.",
    ],
  },
  {
    heading: "Conformance Status",
    body: [
      "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with a wide range of disabilities.",
    ],
  },
  {
    heading: "Feedback",
    body: [
      "We welcome your feedback on the accessibility of the NuLease website. If you encounter accessibility barriers, please let us know through our Contact page.",
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility"
      description="Our commitment to an accessible experience for all patients and visitors."
      updated="January 2026"
      sections={sections}
    />
  );
}
