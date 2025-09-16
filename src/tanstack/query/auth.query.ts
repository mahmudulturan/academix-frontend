import { authServices } from "@/services/auth.services";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentUserQuery = () => {
    return useQuery({
        queryKey: ['user'],
        retry: false,
        queryFn: async () => await authServices.getCurrentUser()
    });
}