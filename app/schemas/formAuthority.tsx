import { z } from "zod";
const ALLOWED_SERVICE_VALUES = z.enum([
  "seo",
  "design",
  "marketing",
  "campaigns",
  "production",
]);
export const LoginFormSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z.string().min(11, "Phone number is required"),
  description: z.string().optional(),
  services: z.array(ALLOWED_SERVICE_VALUES).default([]).optional(),
});

export type FormDataSchema = z.infer<typeof LoginFormSchema>;
