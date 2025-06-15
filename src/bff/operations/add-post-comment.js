import { ROLE } from '../../constants'
import { addComment, getPost, getComments, getUsers } from '../api'
import { sessions } from '../sessions'
export const addPostComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER]
	const access = await sessions.access(hash, accessRoles)
	if (!access) {
		return {
			error: 'Доступ Запрещен',
			res: null,
		}
	}
	await addComment(userId, postId, content)

	const post = await getPost(postId)

	/*---------------------------------*/
	const comments = await getComments(postId)

	const users = await getUsers()

	const commentsWithAuthor = comments.map((comment) => {

		const user = users.find((user) => user.id === comment.authorId)

		return {
			...comment,
			author: user?.login,
		}
	})
	/*---------------------------------*/
	return {
		error: null,
		res: { ...post, comments: commentsWithAuthor },
	}
}