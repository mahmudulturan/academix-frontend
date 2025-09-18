import { studentServices } from "@/services/student.services";
import {
    IStudentAdmissionPayload,
    IUpdateStudentPayload,
    IUpdateStudentStatusPayload,
    IPromoteStudentPayload
} from "@/types/student.type";
import { IErrorResponse } from "@/types/common/response.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleErrorResponse, handleSuccessResponse } from "@/lib/responseHandler";

export const useStudentAdmissionMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data: IStudentAdmissionPayload) => await studentServices.studentAdmission(data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            queryClient.invalidateQueries({ queryKey: ['students'] });
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useUpdateStudentMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, data }: { id: string; data: IUpdateStudentPayload }) =>
            await studentServices.updateStudent(id, data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            queryClient.invalidateQueries({ queryKey: ['students'] });
            queryClient.invalidateQueries({ queryKey: ['student'] });
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useDeleteStudentMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => await studentServices.deleteStudent(id),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            queryClient.invalidateQueries({ queryKey: ['students'] });
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const useUpdateStudentStatusMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, data }: { id: string; data: IUpdateStudentStatusPayload }) =>
            await studentServices.updateStudentStatus(id, data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            queryClient.invalidateQueries({ queryKey: ['students'] });
            queryClient.invalidateQueries({ queryKey: ['student'] });
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}

export const usePromoteStudentMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, data }: { id: string; data: IPromoteStudentPayload }) =>
            await studentServices.promoteStudent(id, data),
        onSuccess: (response) => {
            handleSuccessResponse(response);
            queryClient.invalidateQueries({ queryKey: ['students'] });
            queryClient.invalidateQueries({ queryKey: ['student'] });
        },
        onError: (error: IErrorResponse) => {
            handleErrorResponse(error);
        }
    })
}