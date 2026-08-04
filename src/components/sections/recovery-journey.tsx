import { Container, Reveal, Stagger } from "@/components/shared";
import { journeySteps } from "@/data/journey";
import { fadeUp } from "@/lib/motion";
import type { JourneyStep } from "@/types";

/** "HOW OUR PROGRAM WORKS — Your Path at NuLease" (Figma 473:344). */
export function RecoveryJourney() {
  return (
    <section id="journey" className="bg-[#242424]">
      <Container className="py-16 lg:py-[100px]">
        <Reveal className="flex max-w-[820px] flex-col gap-3">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium tracking-[0.02em] text-[#f0f0ea] uppercase">
              How Our Program Works
            </span>
            <span className="h-0.5 w-[97px] bg-[#abcf37]" aria-hidden />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-[2rem] leading-[1.22] font-semibold text-[#f4f4ee]">
              Your Path at NuLease
            </h2>
            <p className="text-base leading-[1.6] font-normal text-[#c9c9c4]">
              Uncertainty is one of the hardest parts of asking for help. Here&rsquo;s exactly what
              happens after you reach out.
            </p>
          </div>
        </Reveal>

        {/* Steps with a single connected dashed zig-zag rail (desktop). */}
        <div className="relative mt-14">
          <ZigZagRail />
          <Stagger
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:py-10"
            stagger={0.12}
          >
            {journeySteps.map((step) => (
              <StepCard key={step.step} step={step} />
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}

/**
 * Continuous dashed rail: top bars over odd columns, bottom bars under even
 * columns, joined by full-height interior verticals; the two outer verticals
 * are half-height. Drawn as one polyline over a 1240x307 viewBox (5 columns of
 * 248), stretched to fit with non-scaling dashes.
 */
function ZigZagRail() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      viewBox="0 0 1240 307"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <path
        d="M0 187 L0 0 L248 0 L248 307 L496 307 L496 0 L744 0 L744 307 L992 307 L992 0 L1240 0 L1240 187"
        stroke="#7c8a4d"
        strokeWidth="1.25"
        strokeDasharray="7 6"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function StepCard({ step }: { step: JourneyStep }) {
  const { title, description, icon: Icon } = step;
  return (
    <Reveal
      variants={fadeUp}
      className="flex flex-col items-center gap-4 px-2 text-center max-lg:rounded-xl max-lg:border max-lg:border-dashed max-lg:border-[#57701b] max-lg:px-4 max-lg:py-8"
    >
      <span className="flex size-[72px] items-center justify-center rounded-2xl bg-[#73931d]">
        <Icon className="size-8 text-white" aria-hidden strokeWidth={2} />
      </span>
      <h3 className="font-heading text-[20px] leading-tight font-semibold text-[#f0f0ea]">
        {title}
      </h3>
      <p className="max-w-[210px] text-base leading-[1.6] font-normal text-[#c9c9c4]">
        {description}
      </p>
    </Reveal>
  );
}
