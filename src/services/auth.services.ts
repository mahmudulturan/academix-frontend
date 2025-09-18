import axiosInstance from "@/lib/axiosInstances"
import authRoutes from "@/routes/auth.routes"
import { IChangePasswordPayload, ILoginPayload, IRegisterPayload, IResetPasswordPayload, IVerifyEmailPayload, IVerifyPasswordResetOtpPayload } from "@/types/auth.type"
import { IResponseBase, IResponseWithData } from "@/types/common/response.type"
import { IUser } from "@/types/user.type"

const registerUser = async (data: IRegisterPayload): Promise<IResponseBase> => {
    const response = await axiosInstance.post(authRoutes.register, data)
    return response.data
}

const loginUser = async (data: ILoginPayload): Promise<IResponseWithData<{ user: IUser; accessToken: string }>> => {
    const response = await axiosInstance.post(`${authRoutes.login}?rememberMe=${(data).rememberMe}`, data)
    return response.data
}

const getCurrentUser = async (): Promise<IResponseWithData<IUser>> => {
    const response = await axiosInstance.get(authRoutes.getCurrentUser)
    return response.data
}

const changePassword = async (data: IChangePasswordPayload): Promise<IResponseBase> => {
    const response = await axiosInstance.patch(authRoutes.changePassword, data)
    return response.data
}

const sendVerificationEmail = async (email: string): Promise<IResponseBase> => {
    const response = await axiosInstance.post(authRoutes.sendVerificationEmail(email))
    return response.data
}

const verifyEmail = async (data: IVerifyEmailPayload, token?: string): Promise<IResponseBase> => {
    const url = token ? `${authRoutes.verifyEmail}?token=${token}` : authRoutes.verifyEmail
    const response = await axiosInstance.patch(url, data)
    return response.data
}

const sendPasswordResetEmail = async (email: string): Promise<IResponseBase> => {
    const response = await axiosInstance.post(authRoutes.sendPasswordResetEmail(email))
    return response.data
}

const verifyPasswordResetOtp = async (data: IVerifyPasswordResetOtpPayload): Promise<IResponseBase> => {
    const response = await axiosInstance.post(authRoutes.verifyPasswordResetOtp, data)
    return response.data
}

const resetPassword = async (token: string, data: IResetPasswordPayload): Promise<IResponseBase> => {
    const response = await axiosInstance.patch(authRoutes.resetPassword(token), data)
    return response.data
}

const refreshToken = async (): Promise<IResponseBase> => {
    const response = await axiosInstance.post(authRoutes.refreshToken)
    return response.data
}

const logoutUser = async (): Promise<IResponseBase> => {
    const response = await axiosInstance.get(authRoutes.logout)
    return response.data
}

export const authServices = {
    registerUser,
    loginUser,
    getCurrentUser,
    changePassword,
    sendVerificationEmail,
    verifyEmail,
    sendPasswordResetEmail,
    verifyPasswordResetOtp,
    resetPassword,
    refreshToken,
    logoutUser
}