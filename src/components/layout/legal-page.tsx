import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/shared";

export interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalPageProps {
  title: string;
  description?: string;
  updated?: string;
  sections: LegalSection[];
}

/** Shared layout for policy / legal pages: header + centered prose. */
export function LegalPage({ title, description, updated, sections }: LegalPageProps) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <section className="bg-[#14263d]">
        <Container className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            {updated ? <p className="text-sm text-white/50">Last updated: {updated}</p> : null}
            <div className="mt-8 flex flex-col gap-10">
              {sections.map((section) => (
                <div key={section.heading} className="flex flex-col gap-3">
                  <h2 className="font-heading text-xl font-semibold text-white">
                    {section.heading}
                  </h2>
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-[15px] leading-[1.7] text-[#c9c9c4]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
