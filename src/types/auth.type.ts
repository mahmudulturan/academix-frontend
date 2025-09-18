import { createLoginSchema } from "@/validation/auth.validation";
import { z } from "zod";

const loginSchema = createLoginSchema((key) => key);
export type ILoginPayload = z.infer<typeof loginSchema>;

export interface IRegisterPayload {
    name: {
        en: string;
        bn: string;
    };
    email: string;
    phone: string;
    password: string;
    profileImage?: string;
}

export interface IChangePasswordPayload {
    oldPassword: string;
    newPassword: string;
}

export interface IVerifyEmailPayload {
    email: string;
    verificationCode: string;
}

export interface IVerifyPasswordResetOtpPayload {
    otp: string;
    email: string;
}

export interface IResetPasswordPayload {
    newPassword: string;
}