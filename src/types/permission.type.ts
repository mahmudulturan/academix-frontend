import { TPermissionAction } from './common.type';

export interface IPermission {
    id: string;
    name: string;
    resource: string;
    action: TPermissionAction;
    description?: string;
    conditions?: Record<string, unknown>;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IPermissionCreatePayload {
    resource: string;
    action: TPermissionAction;
    description?: string;
    conditions?: Record<string, unknown>;
}

export interface IPermissionUpdatePayload {
    name?: string;
    resource?: string;
    action?: TPermissionAction;
    description?: string;
    conditions?: Record<string, unknown>;
    isActive?: boolean;
}

export interface IPermissionFilters {
    resource?: string;
    action?: TPermissionAction;
    isActive?: boolean;
}