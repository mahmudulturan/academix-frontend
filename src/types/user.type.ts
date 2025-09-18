import { USER_STATUS } from "@/constant/user.constant";

export interface IName {
    en: string;
    bn: string;
}

export interface IUser {
    _id: string;
    id: string;
    name: IName;
    email: string;
    phone: string;
    username?: string;
    profileImage?: string;
    roles: string[];
    status: typeof USER_STATUS[keyof typeof USER_STATUS];
    isEmailVerified: boolean;
    isDeleted?: boolean;
    permissions: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IGetAllUsersParams {
    page?: number;
    limit?: number;
    searchKey?: string;
    sort?: string;
    status?: "active" | "blocked";
    populate?: string;
    fields?: string;
    rolesFields?: string;
}

export interface IUpdateMyProfilePayload {
    name: IName;
    profileImage?: string;
}

export interface IUpdateUserStatusPayload {
    status: "active" | "blocked";
}