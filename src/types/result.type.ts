export interface ISubjectResult {
    subject: string;
    marks: number;
}

export interface IResult {
    id: string;
    student: string;
    exam: string;
    subjectResults: ISubjectResult[];
    createdAt: Date;
    updatedAt: Date;
}