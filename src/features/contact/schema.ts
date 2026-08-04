import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Please tell us a little more (10+ characters)."),
});

export type ContactValues = z.infer<typeof contactSchema>;
