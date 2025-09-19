import { TAttendanceSource } from './common.type';

export interface IAttendanceRecord {
    student: string;
    present: boolean;
    source: TAttendanceSource;
}

export interface IAttendance {
    id: string;
    class: string;
    date: Date;
    records: IAttendanceRecord[];
    createdAt: Date;
    updatedAt: Date;
}