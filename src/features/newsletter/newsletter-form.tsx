"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/shared";
import { cn } from "@/lib/utils";

import { newsletterSchema, type NewsletterValues } from "./schema";

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit() {
    // Simulate an async subscription request. Replace with a real API call
    // (e.g. a route handler / server action) when the backend is available.
    await new Promise((resolve) => setTimeout(resolve, 900));
    reset({ email: "" });
  }

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {isSubmitSuccessful ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            role="status"
            aria-live="polite"
            className="border-brand/30 bg-brand/10 flex items-center gap-3 rounded-full border px-5 py-3.5"
          >
            <CheckCircle2 className="text-brand size-5 shrink-0" aria-hidden />
            <p className="text-sm font-medium text-white">
              You&rsquo;re on the list &mdash; we&rsquo;ll be in touch shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "newsletter-error" : undefined}
                  className={cn(
                    "focus-visible:ring-brand h-12 w-full rounded-full border bg-white/5 px-5 text-sm text-white placeholder:text-white/40 focus-visible:ring-2 focus-visible:outline-none",
                    errors.email ? "border-destructive" : "border-white/15",
                  )}
                  {...register("email")}
                />
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting} className="shrink-0">
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" aria-hidden />
                    Joining…
                  </>
                ) : (
                  "Join us"
                )}
              </Button>
            </div>
            {errors.email ? (
              <p id="newsletter-error" role="alert" className="text-destructive px-5 text-xs">
                {errors.email.message}
              </p>
            ) : null}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
