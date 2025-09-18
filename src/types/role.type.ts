export interface IPermission {
    _id: string;
    name: string;
    displayName: string;
    description: string;
    isSystem: boolean;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface IRole {
    _id: string;
    name: string;
    displayName: string;
    description: string;
    permissions: string[] | IPermission[];
    isSystem: boolean;
    isActive: boolean;
    hierarchy: number;
    createdAt: string;
    updatedAt: string;
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