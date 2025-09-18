const authRoutes = {
    register: "/auth/register",
    login: "/auth/login",
    getCurrentUser: "/auth/me",
    changePassword: "/auth/password/change",
    sendVerificationEmail: (email: string) => `/auth/email/verification/${email}`,
    verifyEmail: "/auth/email/verify-email",
    sendPasswordResetEmail: (email: string) => `/auth/password/reset-email/${email}`,
    verifyPasswordResetOtp: "/auth/password/reset/verify-otp",
    resetPassword: (token: string) => `/auth/password/reset/${token}`,
    refreshToken: "/auth/token/refresh",
    logout: "/auth/logout"
}

export default authRoutes;