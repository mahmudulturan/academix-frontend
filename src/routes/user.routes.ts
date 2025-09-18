const userRoutes = {
    getAllUsers: "/user/all",
    updateMyProfile: "/user/me",
    deleteMyAccount: "/user/me",
    updateUserStatus: (id: string) => `/user/status/${id}`
}

export default userRoutes;