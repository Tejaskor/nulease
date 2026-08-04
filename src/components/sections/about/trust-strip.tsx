import { Medal, ShieldPlus, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: { label: string; icon: LucideIcon }[] = [
  { label: "Patient Satisfaction", icon: Medal },
  { label: "Trusted by 100K+ patients", icon: UsersRound },
  { label: "Private & secure", icon: ShieldPlus },
];

/** Continuously-scrolling trust strip (Figma 580:8053). Blue band #1e3b5c with edge fades. */
export function TrustStrip() {
  // Repeated copies make the -50% translate loop seamlessly.
  const track = [...items, ...items, ...items, ...items];

  return (
    <section aria-label="Why patients trust NuLease" className="relative overflow-hidden bg-[#1e3b5c]">
      <div className="flex items-center py-8">
        <div
          aria-hidden
          className="animate-marquee flex w-max shrink-0 items-center gap-x-10 whitespace-nowrap pr-10"
        >
          {track.map(({ label, icon: Icon }, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-[#fbfbf8] transition-[transform,filter] duration-300 ease-out hover:scale-[1.08] hover:brightness-110 hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
            >
              <Icon className="text-brand size-6 shrink-0" aria-hidden />
              <span className="text-lg font-medium tracking-[0.03em]">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Edge fades: solid #1e3b5c at the outer edge → transparent inward (185px). */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[120px] bg-gradient-to-r from-[#1e3b5c] to-transparent sm:w-[185px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[120px] bg-gradient-to-l from-[#1e3b5c] to-transparent sm:w-[185px]"
        aria-hidden
      />
    </section>
  );
}
