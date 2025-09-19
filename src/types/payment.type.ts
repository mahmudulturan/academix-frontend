import { TPaymentStatus, TPaymentMethod } from './common.type';

export interface IPayment {
    id: string;
    student: string;
    amount: number;
    status: TPaymentStatus;
    method: TPaymentMethod;
    transactionId: string;
    month: string;
    createdAt: Date;
}