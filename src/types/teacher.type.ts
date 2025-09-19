import { IAddress, IApproval, TGender, TTeacherDocumentType } from './common.type';

export interface ITeacherDocument {
    type: TTeacherDocumentType;
    fileUrl: string;
}

export interface ITeacher {
    id: string;
    user: string;
    teacherId: string;
    gender: TGender;
    dateOfBirth: Date;
    nidNumber: string;
    presentAddress: IAddress;
    permanentAddress: IAddress;
    qualification: string;
    designation: string;
    subject: string;
    classes: string[];
    joiningDate: Date;
    approval: IApproval;
    documents: ITeacherDocument[];
    createdAt: Date;
    updatedAt: Date;
}