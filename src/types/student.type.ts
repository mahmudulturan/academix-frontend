import { IName, IAddress, IApproval, TGender, TBloodGroup, TStudentDocumentType } from './common.type';


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

export interface IStudentDocument {
    type: TStudentDocumentType;
    fileUrl: string;
}


export interface IStudent {
    id: string;
    user: string;
    studentId: string;
    fatherName: IName;
    motherName: IName;
    guardian: IGuardian;
    gender: TGender;
    dateOfBirth: Date;
    nationality: string;
    religion: string;
    bloodGroup: TBloodGroup;
    nidNumber: string;
    presentAddress: IAddress;
    permanentAddress: IAddress;
    previousSchool: IPreviousSchool;
    admissionClass: string;
    currentClass: string;
    section: string;
    roll: number;
    admissionDate: Date;
    rfid: string;
    approval: IApproval;
    documents: IStudentDocument[];
    createdAt: Date;
    updatedAt: Date;
}

export interface IGetAllStudentsParams {
    page?: number;
    limit?: number;
    searchKey?: string;
    sort?: string;
    "approval.status"?: "pending" | "approved" | "rejected";
    currentClass?: string;
    section?: string;
    gender?: TGender;
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
    documents: IStudentDocument[];
}

export interface IUpdateStudentPayload {
    fatherName?: IName;
    motherName?: IName;
    guardian?: IGuardian;
    gender?: TGender;
    dateOfBirth?: Date;
    nationality?: string;
    religion?: string;
    bloodGroup?: TBloodGroup;
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