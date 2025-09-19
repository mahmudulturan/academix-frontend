import { TNoticeTarget } from './common.type';

export interface INotices {
    id: string;
    title: string;
    description: string;
    target: TNoticeTarget;
    isPublished: boolean;
    publishedAt?: Date;
    publishedBy?: string;
    expiresAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}