import { roleServices } from "@/services/role.services";
import {
    ICreateRolePayload,
    IUpdateRolePayload,
    IAssignUsersToRolePayload
} from "@/types/role.type";
import { IErrorResponse } from "@/types/common/response.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleErrorResponse, handleSuccessResponse } from "@/lib/responseHandler";

export const useCreateRoleMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data: ICreateRolePayload) => await roleServices.createRole(data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            queryClient.invalidateQueries({ queryKey: ['roles'] });
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useUpdateRoleMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ roleId, data }: { roleId: string; data: IUpdateRolePayload }) =>
            await roleServices.updateRole(roleId, data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            queryClient.invalidateQueries({ queryKey: ['roles'] });
            queryClient.invalidateQueries({ queryKey: ['role'] });
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useDeleteRoleMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (roleId: string) => await roleServices.deleteRole(roleId),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            queryClient.invalidateQueries({ queryKey: ['roles'] });
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useAssignUsersToRoleMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ roleId, data }: { roleId: string; data: IAssignUsersToRolePayload }) =>
            await roleServices.assignUsersToRole(roleId, data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            queryClient.invalidateQueries({ queryKey: ['roles'] });
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}