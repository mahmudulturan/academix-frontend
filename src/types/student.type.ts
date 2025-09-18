import { IName } from "./user.type";

export interface IAddress {
    village: string;
    post: string;
    subDistrict: string;
    district: string;
}

export interface IGuardian {
    name: IName;
    occupation: string;
    phone: string;
}

export interface IPreviousSchool {
    name: string;
    location: string;
    result: string;
    leavingReason: string;
}

export interface IDocument {
    type: string;
    fileUrl: string;
}

export interface IApproval {
    status: "pending" | "approved" | "rejected";
    approvedBy?: string;
    approvedAt?: string;
}

export interface IStudent {
    id: string;
    user: string;
    studentId: string;
    fatherName: IName;
    motherName: IName;
    guardian: IGuardian;
    gender: "male" | "female" | "other";
    dateOfBirth: string;
    nationality: string;
    religion: string;
    bloodGroup: string;
    nidNumber: string;
    presentAddress: IAddress;
    permanentAddress: IAddress;
    previousSchool: IPreviousSchool;
    admissionClass: string;
    currentClass: string;
    section: string;
    roll: number;
    admissionDate: string;
    rfid: string;
    approval: IApproval;
    documents: IDocument[];
    createdAt: string;
    updatedAt: string;
}

export interface IGetAllStudentsParams {
    page?: number;
    limit?: number;
    searchKey?: string;
    sort?: string;
    "approval.status"?: "pending" | "approved" | "rejected";
    currentClass?: string;
    section?: string;
    gender?: "male" | "female" | "other";
    populate?: string;
    fields?: string;
    userFields?: string;
    admissionClassFields?: string;
    currentClassFields?: string;
    approvalApprovedByFields?: string;
}

export interface IGetStudentByIdParams {
    populate?: string;
    fields?: string;
    userFields?: string;
    admissionClassFields?: string;
    currentClassFields?: string;
    approvalApprovedByFields?: string;
}

export interface IStudentAdmissionPayload {
    name: IName;
    email: string;
    phone: string;
    profileImage?: string;
    admissionEmail: string;
    fatherName: IName;
    motherName: IName;
    guardian: IGuardian;
    gender: "male" | "female" | "other";
    dateOfBirth: string;
    nationality: string;
    religion: string;
    bloodGroup: string;
    nidNumber: string;
    presentAddress: IAddress;
    permanentAddress: IAddress;
    previousSchool: IPreviousSchool;
    admissionClass: string;
    section: string;
    rfid: string;
    documents: IDocument[];
}

export interface IUpdateStudentPayload {
    fatherName?: IName;
    motherName?: IName;
    guardian?: IGuardian;
    gender?: "male" | "female" | "other";
    dateOfBirth?: string;
    nationality?: string;
    religion?: string;
    bloodGroup?: string;
    nidNumber?: string;
    presentAddress?: IAddress;
    permanentAddress?: IAddress;
    previousSchool?: IPreviousSchool;
    currentClass?: string;
    section?: string;
    roll?: number;
    rfid?: string;
    documents?: IDocument[];
}

export interface IUpdateStudentStatusPayload {
    status: "pending" | "approved" | "rejected";
}

export interface IPromoteStudentPayload {
    nextClassId: string;
    section: string;
    roll: number;
}