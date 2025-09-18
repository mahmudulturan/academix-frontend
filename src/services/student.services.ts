import axiosInstance from "@/lib/axiosInstances"
import studentRoutes from "@/routes/student.routes"
import {
    IStudent,
    IGetAllStudentsParams,
    IGetStudentByIdParams,
    IStudentAdmissionPayload,
    IUpdateStudentPayload,
    IUpdateStudentStatusPayload,
    IPromoteStudentPayload,
    IGuardian
} from "@/types/student.type"
import { IResponseBase, IResponseWithData, IResponseWithPaginationData } from "@/types/common/response.type"

const studentAdmission = async (data: IStudentAdmissionPayload): Promise<IResponseWithData<IStudent>> => {
    const response = await axiosInstance.post(studentRoutes.studentAdmission, data)
    return response.data
}

const getAllStudents = async (params?: IGetAllStudentsParams): Promise<IResponseWithData<IResponseWithPaginationData<IStudent[]>>> => {
    const queryParams = new URLSearchParams()

    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.limit) queryParams.append('limit', params.limit.toString())
    if (params?.searchKey) queryParams.append('searchKey', params.searchKey)
    if (params?.sort) queryParams.append('sort', params.sort)
    if (params?.["approval.status"]) queryParams.append('approval.status', params["approval.status"])
    if (params?.currentClass) queryParams.append('currentClass', params.currentClass)
    if (params?.section) queryParams.append('section', params.section)
    if (params?.gender) queryParams.append('gender', params.gender)
    if (params?.populate) queryParams.append('populate', params.populate)
    if (params?.fields) queryParams.append('fields', params.fields)
    if (params?.userFields) queryParams.append('userFields', params.userFields)
    if (params?.admissionClassFields) queryParams.append('admissionClassFields', params.admissionClassFields)
    if (params?.currentClassFields) queryParams.append('currentClassFields', params.currentClassFields)
    if (params?.approvalApprovedByFields) queryParams.append('approvalApprovedByFields', params.approvalApprovedByFields)

    const queryString = queryParams.toString()
    const url = queryString ? `${studentRoutes.getAllStudents}?${queryString}` : studentRoutes.getAllStudents

    const response = await axiosInstance.get(url)
    return response.data
}

const getStudentById = async (id: string, params?: IGetStudentByIdParams): Promise<IResponseWithData<IStudent>> => {
    const queryParams = new URLSearchParams()

    if (params?.populate) queryParams.append('populate', params.populate)
    if (params?.fields) queryParams.append('fields', params.fields)
    if (params?.userFields) queryParams.append('userFields', params.userFields)
    if (params?.admissionClassFields) queryParams.append('admissionClassFields', params.admissionClassFields)
    if (params?.currentClassFields) queryParams.append('currentClassFields', params.currentClassFields)
    if (params?.approvalApprovedByFields) queryParams.append('approvalApprovedByFields', params.approvalApprovedByFields)

    const queryString = queryParams.toString()
    const url = queryString ? `${studentRoutes.getStudentById(id)}?${queryString}` : studentRoutes.getStudentById(id)

    const response = await axiosInstance.get(url)
    return response.data
}

const updateStudent = async (id: string, data: IUpdateStudentPayload): Promise<IResponseWithData<IStudent>> => {
    const response = await axiosInstance.put(studentRoutes.updateStudent(id), data)
    return response.data
}

const deleteStudent = async (id: string): Promise<IResponseBase> => {
    const response = await axiosInstance.delete(studentRoutes.deleteStudent(id))
    return response.data
}

const updateStudentStatus = async (id: string, data: IUpdateStudentStatusPayload): Promise<IResponseWithData<IStudent>> => {
    const response = await axiosInstance.patch(studentRoutes.updateStudentStatus(id), data)
    return response.data
}

const getGuardianDetails = async (id: string): Promise<IResponseWithData<IGuardian>> => {
    const response = await axiosInstance.get(studentRoutes.getGuardianDetails(id))
    return response.data
}

const promoteStudent = async (id: string, data: IPromoteStudentPayload): Promise<IResponseWithData<IStudent>> => {
    const response = await axiosInstance.patch(studentRoutes.promoteStudent(id), data)
    return response.data
}

export const studentServices = {
    studentAdmission,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    updateStudentStatus,
    getGuardianDetails,
    promoteStudent
}