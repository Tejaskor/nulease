import { ClipboardList, HandHeart, Headset, Phone, UserRoundCheck } from "lucide-react";

import type { JourneyStep } from "@/types";

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Contact NuLease",
    description: "Call, message, or book online confidentially, at your own pace.",
    icon: Phone,
  },
  {
    step: 2,
    title: "Medical Assessment",
    description: "A licensed clinician learns your history to understand what you actually need.",
    icon: ClipboardList,
  },
  {
    step: 3,
    title: "Personalized Plan",
    description: "Your treatment plan is built around your body, schedule, and goals.",
    icon: UserRoundCheck,
  },
  {
    step: 4,
    title: "Medication & Counseling",
    description: "Ongoing medical and behavioral support, adjusted as you progress.",
    icon: Headset,
  },
  {
    step: 5,
    title: "Ongoing Support",
    description: "Ongoing care and community keep recovery steady long after treatment starts.",
    icon: HandHeart,
  },
];
