import { IPermission } from './permission.type';

export interface IRole {
    id: string;
    name: string;
    displayName: string;
    description?: string;
    permissions: string[] | IPermission[];
    isSystem: boolean;
    isActive: boolean;
    hierarchy: number;
    createdBy?: string;
    updatedBy?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IGetAllRolesParams {
    page?: number;
    limit?: number;
    searchKey?: string;
    isActive?: "true" | "false";
    isSystem?: "true" | "false";
    sort?: string;
    populate?: string;
    fields?: string;
    permissionsFields?: string;
}

export interface ICreateRolePayload {
    name: string;
    displayName: string;
    description: string;
    permissions: string[];
    hierarchy: number;
}

export interface IUpdateRolePayload {
    displayName?: string;
    description?: string;
    permissions?: string[];
    isActive?: boolean;
    hierarchy?: number;
}

export interface IAssignUsersToRolePayload {
    userIds: string[];
}

export interface IRoleWithPermissions extends Omit<IRole, 'permissions'> {
    permissions: IPermission[];
}

export interface IRoleCreatePayload {
    name: string;
    displayName: string;
    description?: string;
    permissions: string[];
    hierarchy?: number;
}

export interface IAssignRolePayload {
    userId: string;
    roleIds: string[];
}

export interface IRoleFilters {
    name?: string;
    isActive?: boolean;
    isSystem?: boolean;
}