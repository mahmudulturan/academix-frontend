import { TDocumentType } from './common.type';

export interface IDocument {
    id: string;
    student: string;
    type: TDocumentType;
    title: string;
    fileUrl: string;
    issuedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}