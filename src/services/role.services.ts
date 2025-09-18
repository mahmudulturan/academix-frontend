import axiosInstance from "@/lib/axiosInstances"
import roleRoutes from "@/routes/role.routes"
import {
    IRole,
    IGetAllRolesParams,
    ICreateRolePayload,
    IUpdateRolePayload,
    IAssignUsersToRolePayload
} from "@/types/role.type"
import { IResponseBase, IResponseWithData, IResponseWithPaginationData } from "@/types/common/response.type"

const createRole = async (data: ICreateRolePayload): Promise<IResponseWithData<IRole>> => {
    const response = await axiosInstance.post(roleRoutes.createRole, data)
    return response.data
}

const getAllRoles = async (params?: IGetAllRolesParams): Promise<IResponseWithData<IResponseWithPaginationData<IRole[]>>> => {
    const queryParams = new URLSearchParams()

    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.limit) queryParams.append('limit', params.limit.toString())
    if (params?.searchKey) queryParams.append('searchKey', params.searchKey)
    if (params?.isActive) queryParams.append('isActive', params.isActive)
    if (params?.isSystem) queryParams.append('isSystem', params.isSystem)
    if (params?.sort) queryParams.append('sort', params.sort)
    if (params?.populate) queryParams.append('populate', params.populate)
    if (params?.fields) queryParams.append('fields', params.fields)
    if (params?.permissionsFields) queryParams.append('permissionsFields', params.permissionsFields)

    const queryString = queryParams.toString()
    const url = queryString ? `${roleRoutes.getAllRoles}?${queryString}` : roleRoutes.getAllRoles

    const response = await axiosInstance.get(url)
    return response.data
}

const getRoleById = async (roleId: string): Promise<IResponseWithData<IRole>> => {
    const response = await axiosInstance.get(roleRoutes.getRoleById(roleId))
    return response.data
}

const updateRole = async (roleId: string, data: IUpdateRolePayload): Promise<IResponseWithData<IRole>> => {
    const response = await axiosInstance.put(roleRoutes.updateRole(roleId), data)
    return response.data
}

const deleteRole = async (roleId: string): Promise<IResponseBase> => {
    const response = await axiosInstance.delete(roleRoutes.deleteRole(roleId))
    return response.data
}

const getRolePermissions = async (roleId: string): Promise<IResponseWithData<string[]>> => {
    const response = await axiosInstance.get(roleRoutes.getRolePermissions(roleId))
    return response.data
}

const assignUsersToRole = async (roleId: string, data: IAssignUsersToRolePayload): Promise<IResponseBase> => {
    const response = await axiosInstance.patch(roleRoutes.assignUsersToRole(roleId), data)
    return response.data
}

export const roleServices = {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole,
    getRolePermissions,
    assignUsersToRole
}