"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

import { easeOutExpo, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

import { contactSchema, type ContactValues } from "./schema";

// Focus: border glow + soft shadow-ring + subtle scale (transform, no reflow).
const fieldClass =
  "w-full rounded-lg border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/40 transition-[border-color,box-shadow,transform] duration-200 focus:scale-[1.01] focus:border-[#5b9dd5]/70 focus:shadow-[0_0_0_3px_rgba(50,119,180,0.18)] focus:outline-none";

const fieldItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOutExpo } },
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", message: "" },
  });

  async function onSubmit() {
    // Simulate an async request. Replace with a real route handler / server
    // action when the backend is available.
    await new Promise((resolve) => setTimeout(resolve, 900));
    reset();
  }

  return (
    <AnimatePresence mode="wait">
      {isSubmitSuccessful ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          role="status"
          aria-live="polite"
          className="border-brand/30 bg-brand/10 flex items-center gap-3 rounded-xl border px-5 py-6"
        >
          <motion.span
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 14, delay: 0.1 }}
          >
            <CheckCircle2 className="text-brand size-6 shrink-0" aria-hidden />
          </motion.span>
          <p className="text-sm font-medium text-white">
            Thanks for reaching out &mdash; a member of our care team will be in touch shortly.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          <motion.div variants={fieldItem} className="grid gap-4 sm:grid-cols-2">
            <Field error={errors.firstName?.message}>
              <input type="text" autoComplete="given-name" placeholder="First Name" className={fieldClass} {...register("firstName")} />
            </Field>
            <Field error={errors.lastName?.message}>
              <input type="text" autoComplete="family-name" placeholder="Last Name" className={fieldClass} {...register("lastName")} />
            </Field>
          </motion.div>
          <motion.div variants={fieldItem} className="grid gap-4 sm:grid-cols-2">
            <Field error={errors.email?.message}>
              <input type="email" autoComplete="email" placeholder="Email" className={fieldClass} {...register("email")} />
            </Field>
            <Field error={errors.phone?.message}>
              <input type="tel" autoComplete="tel" placeholder="Phone Number" className={fieldClass} {...register("phone")} />
            </Field>
          </motion.div>
          <motion.div variants={fieldItem}>
            <Field error={errors.message?.message}>
              <textarea
                rows={6}
                placeholder="Your message..."
                className={cn(fieldClass, "resize-y")}
                {...register("message")}
              />
            </Field>
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            variants={fieldItem}
            whileHover={{ scale: 1.02, y: -3, boxShadow: "0 16px 32px -12px rgba(50,119,180,0.6)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="focus-visible:ring-blue mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#3277b4] text-sm font-medium text-[#fbfbf8] hover:bg-[#2a6094] focus-visible:ring-2 focus-visible:outline-none disabled:opacity-60"
          >
            {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
            Send Message
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({ error, children }: { error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      {children}
      {error ? <span className="text-xs text-red-400">{error}</span> : null}
    </div>
  );
}
