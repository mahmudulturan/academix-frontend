const roleRoutes = {
    createRole: "/roles",
    getAllRoles: "/roles",
    getRoleById: (roleId: string) => `/roles/${roleId}`,
    updateRole: (roleId: string) => `/roles/${roleId}`,
    deleteRole: (roleId: string) => `/roles/${roleId}`,
    getRolePermissions: (roleId: string) => `/roles/${roleId}/permissions`,
    assignUsersToRole: (roleId: string) => `/roles/${roleId}/users`
}

export default roleRoutes;