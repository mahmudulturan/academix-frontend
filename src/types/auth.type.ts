import { loginSchema } from "@/validation/auth.validation";
import { z } from "zod";

export type ILoginPayload = z.infer<typeof loginSchema>;