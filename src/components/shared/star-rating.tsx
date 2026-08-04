import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  max?: number;
  className?: string;
}

/** Accessible 5-star rating display. */
export function StarRating({ rating, max = 5, className }: StarRatingProps) {
  const rounded = Math.round(rating);
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            "size-4",
            i < rounded ? "fill-brand text-brand" : "fill-white/10 text-white/20",
          )}
        />
      ))}
    </div>
  );
}
