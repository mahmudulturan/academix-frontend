import { authServices } from "@/services/auth.services";
import { useStore } from "@/store";
import { ILoginPayload } from "@/types/auth.type";
import { IErrorResponse } from "@/types/common/response.type";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLoginUserMutation = () => {
    const { setUser } = useStore(state => state.auth);

    return useMutation({
        mutationFn: async (data: ILoginPayload) => await authServices.loginUser(data),
        onSuccess: (data) => {
            setUser(data.data);
            toast.success(data?.message || "Login Successfully");
        },
        onError: (error : IErrorResponse) => {
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    })
}
