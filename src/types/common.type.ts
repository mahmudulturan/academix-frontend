export type TGender = 'male' | 'female' | 'other';

export type TBloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type TApprovalStatus = 'pending' | 'approved' | 'rejected';

export type TUserStatus = 'active' | 'blocked';

export type TPermissionAction = 'create' | 'read' | 'update' | 'delete' | 'manage' | 'execute';

export type TPaymentStatus = 'pending' | 'paid' | 'failed';

export type TPaymentMethod = 'bkash' | 'nagad' | 'card';

export type TNoticeTarget = 'student' | 'teacher' | 'all';

export type TAttendanceSource = 'manual' | 'rfid';

export type TStudentDocumentType = 'id_card' | 'certificate' | 'birth_certificate' | 'photo' | 'transfer_certificate';

export type TTeacherDocumentType = 'cv' | 'certificate' | 'nid' | 'photo';

export type TDocumentType = 'certificate' | 'id_card';

export interface IApproval {
    status: TApprovalStatus;
    approvedBy?: string;
    approvedAt?: Date;
}

export interface IAddress {
    village: string;
    post: string;
    subDistrict: string;
    district: string;
}

export interface IName {
    en: string;
    bn: string;
}