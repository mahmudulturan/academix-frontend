import { studentServices } from "@/services/student.services";
import { IGetAllStudentsParams, IGetStudentByIdParams } from "@/types/student.type";
import { useQuery } from "@tanstack/react-query";

export const useGetAllStudentsQuery = (params?: IGetAllStudentsParams) => {
    return useQuery({
        queryKey: ['students', params],
        queryFn: async () => await studentServices.getAllStudents(params),
        retry: false
    });
}

export const useGetStudentByIdQuery = (id: string, params?: IGetStudentByIdParams) => {
    return useQuery({
        queryKey: ['student', id, params],
        queryFn: async () => await studentServices.getStudentById(id, params),
        retry: false,
        enabled: !!id
    });
}

export const useGetGuardianDetailsQuery = (id: string) => {
    return useQuery({
        queryKey: ['student-guardian', id],
        queryFn: async () => await studentServices.getGuardianDetails(id),
        retry: false,
        enabled: !!id
    });
}