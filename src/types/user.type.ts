import { USER_STATUS } from "@/constant/user.constant";

export interface IName {
    en: string;
    bn: string;
}

export interface IUser {
    id: string;
    name: IName;
    email: string;
    phone: string;
    username: string;
    profileImage?: string;
    roles: string[];
    status: typeof USER_STATUS[keyof typeof USER_STATUS];
    isEmailVerified: boolean;
    isDeleted: boolean;
    permissions: string[];
    createdAt?: Date;
    updatedAt?: Date;
}