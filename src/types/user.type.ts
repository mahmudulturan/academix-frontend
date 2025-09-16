import { USER_STATUS } from "@/constant/user.constant";

export interface IName {
    en: string;
    bn: string;
}

export interface IUser {
    id: any;
    name: IName;
    email: string;
    phone: string;
    username: string;
    profileImage?: string;
    roles: any[];
    status: typeof USER_STATUS[keyof typeof USER_STATUS];
    isEmailVerified: boolean;
    isDeleted: boolean;
    permissions: string[];
    createdAt?: Date;
    updatedAt?: Date;
}