import { remodeComment } from './session/remove-comment'
import { ROLE } from '../constants/role'
export const createSession = (roleId) => {
	const session = {
		logout() {
			Object.keys(session).forEach((key) => delete session[key])
		}
	}

	switch (roleId) {
		case ROLE.ADMIN:
			{
				session.removeComment = remodeComment
				break
			}
		case ROLE.MODERATOR:
			{
				session.removeComment = remodeComment
				break
			}
		case ROLE.READER:
			{
				break
			}
		default:
		// never happens
	}
	return session
}
