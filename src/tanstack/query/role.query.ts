import { roleServices } from "@/services/role.services";
import { IGetAllRolesParams } from "@/types/role.type";
import { useQuery } from "@tanstack/react-query";

export const useGetAllRolesQuery = (params?: IGetAllRolesParams) => {
    return useQuery({
        queryKey: ['roles', params],
        queryFn: async () => await roleServices.getAllRoles(params),
        retry: false
    });
}

export const useGetRoleByIdQuery = (roleId: string) => {
    return useQuery({
        queryKey: ['role', roleId],
        queryFn: async () => await roleServices.getRoleById(roleId),
        retry: false,
        enabled: !!roleId
    });
}

export const useGetRolePermissionsQuery = (roleId: string) => {
    return useQuery({
        queryKey: ['role-permissions', roleId],
        queryFn: async () => await roleServices.getRolePermissions(roleId),
        retry: false,
        enabled: !!roleId
    });
}