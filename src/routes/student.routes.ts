const studentRoutes = {
    studentAdmission: "/students/admission",
    getAllStudents: "/students",
    getStudentById: (id: string) => `/students/${id}`,
    updateStudent: (id: string) => `/students/${id}`,
    deleteStudent: (id: string) => `/students/${id}`,
    updateStudentStatus: (id: string) => `/students/${id}/status`,
    getGuardianDetails: (id: string) => `/students/${id}/guardian`,
    promoteStudent: (id: string) => `/students/${id}/promote`
}

export default studentRoutes;