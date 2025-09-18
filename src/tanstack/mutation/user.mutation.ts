import { useRouter } from "@/i18n/routing";
import { userServices } from "@/services/user.services";
import { useStore } from "@/store";
import { IUpdateMyProfilePayload, IUpdateUserStatusPayload } from "@/types/user.type";
import { IErrorResponse } from "@/types/common/response.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleErrorResponse, handleSuccessResponse } from "@/lib/responseHandler";

export const useUpdateMyProfileMutation = () => {
    const { setUser } = useStore(state => state.auth);
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data: IUpdateMyProfilePayload) => await userServices.updateMyProfile(data),
        onSuccess: (response) => {
            setUser(response.data);
            handleSuccessResponse(response);
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useDeleteMyAccountMutation = () => {
    const { removeUser } = useStore(state => state.auth);
    const router = useRouter();
    return useMutation({
        mutationFn: async () => await userServices.deleteMyAccount(),
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

export const useUpdateUserStatusMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, data }: { id: string; data: IUpdateUserStatusPayload }) =>
            await userServices.updateUserStatus(id, data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}