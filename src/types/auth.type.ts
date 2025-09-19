import { createLoginSchema } from "@/validation/auth.validation";
import { z } from "zod";
import { IName } from './common.type';

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

export interface IRegisterRequest {
    name: IName;
    email: string;
    phone: string;
    password: string;
    profileImage?: string;
}

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface IChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
}

export interface IResetPasswordRequest {
    newPassword: string;
}

export interface IVerifyOtpRequest {
    otp: string;
    email: string;
}

export interface IVerifyEmailRequest {
    email?: string;
    verificationCode?: string;
}

export interface IUserResponse {
    id: string;
    name: IName;
    email: string;
    phone: string;
    roles: Array<{
        id: string;
        name: string;
        displayName: string;
    }>;
    profileImage?: string;
    permissions: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface IAuthResponse {
    user: IUserResponse;
    accessToken: string;
}