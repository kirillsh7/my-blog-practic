import { authorize, fetchRoles, updateUserRole, fetchUsers, logout, register, removeUser } from './operations'
export const server = {
  authorize,
  logout,
  register,
  fetchUsers,
  fetchRoles,
  updateUserRole,
  removeUser,
}
