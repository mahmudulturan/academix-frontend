import axiosInstance from "@/lib/axiosInstances"
import authRoutes from "@/routes/auth.routes"
import { ILoginPayload } from "@/types/auth.type"
import { IResponseWithData } from "@/types/common/response.type"
import { IUser } from "@/types/user.type"

const loginUser = async (data: ILoginPayload): Promise<IResponseWithData<IUser>> => {
    const response = await axiosInstance.post(`${authRoutes.loginRoute}?rememberMe=${(data).rememberMe}`, data)
    return response.data
}

export const authServices = {
    loginUser
}