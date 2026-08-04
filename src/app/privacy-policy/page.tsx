import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Privacy Policy — NuLease",
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    heading: "Overview",
    body: [
      "NuLease is committed to protecting the privacy of the individuals we serve. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.",
      "This is placeholder content pending final legal review. Replace it with your organization's approved Privacy Policy before launch.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "We may collect information you provide directly, such as your name, contact details, and appointment requests, as well as limited technical information collected automatically when you visit our site.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use your information to schedule and coordinate care, respond to inquiries, and improve our services. We do not sell your personal information.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us using the details on our Contact page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How NuLease collects, uses, and protects your personal information."
      updated="January 2026"
      sections={sections}
    />
  );
}
