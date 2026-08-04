import { ContactFaq, ContactMain } from "@/components/sections/contact";
import { BreadcrumbJsonLd } from "@/lib/seo/json-ld";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Contact NuLease — Get in Touch",
  path: "/contact",
  keywords: ["contact NuLease", "book appointment", "addiction treatment contact"],
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <ContactMain />
      <ContactFaq />
    </>
  );
}
