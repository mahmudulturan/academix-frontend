import { z } from "zod";

export const createLoginSchema = (t: (key: string) => string) => {
  return z.object({
    email: z.string()
      .min(1, { message: t('required') })
      .email({ message: t('invalidEmail') }),
    password: z.string()
      .min(1, { message: t('required') })
      .min(8, { message: t('passwordMinLength') }),
    rememberMe: z.boolean(),
  });
};