import { useRouter } from "@/i18n/routing";
import { useErrorTranslations, useSuccessTranslations } from "@/lib/i18n-utils";
import { authServices } from "@/services/auth.services";
import { useStore } from "@/store";
import { ILoginPayload } from "@/types/auth.type";
import { IErrorResponse } from "@/types/common/response.type";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLoginUserMutation = () => {
    const { setUser } = useStore(state => state.auth);
    const successT = useSuccessTranslations();
    const errorT = useErrorTranslations();
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: ILoginPayload) => await authServices.loginUser(data),
        onSuccess: (data) => {
            setUser(data.data);
            toast.success(successT('loginSuccessfully'));
            router.push("/dashboard");
        },
        onError: (error: IErrorResponse) => {
            toast.error(errorT("somethingWentWrong"));
        }
    })
}
