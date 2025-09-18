import { userServices } from "@/services/user.services";
import { IGetAllUsersParams } from "@/types/user.type";
import { useQuery } from "@tanstack/react-query";

export const useGetAllUsersQuery = (params?: IGetAllUsersParams) => {
    return useQuery({
        queryKey: ['users', params],
        queryFn: async () => await userServices.getAllUsers(params),
        retry: false
    });
}