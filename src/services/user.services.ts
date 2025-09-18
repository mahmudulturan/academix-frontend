import axiosInstance from "@/lib/axiosInstances"
import userRoutes from "@/routes/user.routes"
import { IGetAllUsersParams, IUpdateMyProfilePayload, IUpdateUserStatusPayload } from "@/types/user.type"
import { IResponseBase, IResponseWithData, IResponseWithPaginationData } from "@/types/common/response.type"
import { IUser } from "@/types/user.type"

const getAllUsers = async (params?: IGetAllUsersParams): Promise<IResponseWithData<IResponseWithPaginationData<IUser[]>>> => {
    const queryParams = new URLSearchParams()

    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.limit) queryParams.append('limit', params.limit.toString())
    if (params?.searchKey) queryParams.append('searchKey', params.searchKey)
    if (params?.sort) queryParams.append('sort', params.sort)
    if (params?.status) queryParams.append('status', params.status)
    if (params?.populate) queryParams.append('populate', params.populate)
    if (params?.fields) queryParams.append('fields', params.fields)
    if (params?.rolesFields) queryParams.append('rolesFields', params.rolesFields)

    const queryString = queryParams.toString()
    const url = queryString ? `${userRoutes.getAllUsers}?${queryString}` : userRoutes.getAllUsers

    const response = await axiosInstance.get(url)
    return response.data
}

const updateMyProfile = async (data: IUpdateMyProfilePayload): Promise<IResponseWithData<IUser>> => {
    const response = await axiosInstance.put(userRoutes.updateMyProfile, data)
    return response.data
}

const deleteMyAccount = async (): Promise<IResponseBase> => {
    const response = await axiosInstance.delete(userRoutes.deleteMyAccount)
    return response.data
}

const updateUserStatus = async (id: string, data: IUpdateUserStatusPayload): Promise<IResponseWithData<IUser>> => {
    const response = await axiosInstance.patch(userRoutes.updateUserStatus(id), data)
    return response.data
}

export const userServices = {
    getAllUsers,
    updateMyProfile,
    deleteMyAccount,
    updateUserStatus
}