import { toast } from "sonner";
import { IResponseBase, IResponseWithData, IErrorResponse } from "@/types/common/response.type";

export const handleSuccessResponse = (response: IResponseBase | IResponseWithData<unknown>, customMessage?: string) => {
    const message = customMessage || response.message;
    toast.success(message);
};

export const handleErrorResponse = (error: IErrorResponse, customMessage?: string) => {
    const message = customMessage || error.response?.message || "Something went wrong";
    toast.error(message);
};