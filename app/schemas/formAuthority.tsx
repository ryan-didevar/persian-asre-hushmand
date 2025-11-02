import { z } from "zod";
const ALLOWED_SERVICE_VALUES = z.enum([
  "seo",
  "design",
  "marketing",
  "campaigns",
  "production",
]);
export const LoginFormSchema = z.object({
  name: z.string().min(3, "وارد کردن نام الزامی است"),
  email: z
    .string()
    .min(1, "وارد کردن ایمیل الزامی است")
    .email("این یک ایمیل معتبر نیست"),
  phone: z.string().min(11, "حداقل 11 رقم باید وارد کنید"),
  description: z.string().optional(),
  services: z.array(ALLOWED_SERVICE_VALUES).default([]).optional(),
});

export type FormDataSchema = z.infer<typeof LoginFormSchema>;
