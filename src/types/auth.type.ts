import { loginSchema } from "@/validation/auth.validation";
import { z } from "zod";

export interface ILoginPayload extends z.infer<typeof loginSchema> { }