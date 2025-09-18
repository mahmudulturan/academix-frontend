import { useRouter } from "@/i18n/routing";
import { useErrorTranslations, useSuccessTranslations } from "@/lib/i18n-utils";
import { handleErrorResponse, handleSuccessResponse } from "@/lib/responseHandler";
import { authServices } from "@/services/auth.services";
import { useStore } from "@/store";
import { IChangePasswordPayload, ILoginPayload, IRegisterPayload, IResetPasswordPayload, IVerifyEmailPayload, IVerifyPasswordResetOtpPayload } from "@/types/auth.type";
import { IErrorResponse } from "@/types/common/response.type";
import { useMutation } from "@tanstack/react-query";

export const useRegisterUserMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: IRegisterPayload) => await authServices.registerUser(data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            router.push("/login");
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useLoginUserMutation = () => {
    const { setUser } = useStore(state => state.auth);
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: ILoginPayload) => await authServices.loginUser(data),
        onSuccess: (response) => {
            setUser(response?.data?.user);
            handleSuccessResponse(response);
            router.push("/dashboard");
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useChangePasswordMutation = () => {
    return useMutation({
        mutationFn: async (data: IChangePasswordPayload) => await authServices.changePassword(data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useSendVerificationEmailMutation = () => {
    return useMutation({
        mutationFn: async (email: string) => await authServices.sendVerificationEmail(email),
        onSuccess: (response) => {
            handleSuccessResponse(response);
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useVerifyEmailMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async ({ data, token }: { data: IVerifyEmailPayload; token?: string }) =>
            await authServices.verifyEmail(data, token),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            router.push("/login");
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useSendPasswordResetEmailMutation = () => {
    return useMutation({
        mutationFn: async (email: string) => await authServices.sendPasswordResetEmail(email),
        onSuccess: (response) => {
            handleSuccessResponse(response);
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useVerifyPasswordResetOtpMutation = () => {
    return useMutation({
        mutationFn: async (data: IVerifyPasswordResetOtpPayload) => await authServices.verifyPasswordResetOtp(data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useResetPasswordMutation = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async ({ token, data }: { token: string; data: IResetPasswordPayload }) =>
            await authServices.resetPassword(token, data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            router.push("/login");
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useRefreshTokenMutation = () => {
    return useMutation({
        mutationFn: async () => await authServices.refreshToken(),
        onSuccess: (response) => {
            handleSuccessResponse(response);
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useLogoutUserMutation = () => {
    const { removeUser } = useStore(state => state.auth);
    const router = useRouter();
    return useMutation({
        mutationFn: async () => await authServices.logoutUser(),
        onSuccess: (response) => {
            removeUser();
            handleSuccessResponse(response);
            router.push("/login");
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}
