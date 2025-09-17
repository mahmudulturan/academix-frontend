import { createLoginSchema } from "@/validation/auth.validation";
import { z } from "zod";

const loginSchema = createLoginSchema((key) => key);
export type ILoginPayload = z.infer<typeof loginSchema>;