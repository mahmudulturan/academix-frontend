export interface IPeriod {
    subject: string;
    teacher: string;
    time: string;
}

export interface IRoutine {
    id: string;
    class: string;
    day: string;
    periods: IPeriod[];
    createdAt: Date;
    updatedAt: Date;
}