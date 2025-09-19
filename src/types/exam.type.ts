export interface ISubject {
    name: string;
    date: Date;
    totalMarks: number;
}

export interface IExam {
    id: string;
    name: string;
    class: string;
    subjects: ISubject[];
    isPublished: boolean;
    publishedAt?: Date;
    publishedBy?: string;
    startDate?: Date;
    endDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}