import { setPostData } from './set-post-data'

export const savePostAsync = (requestServer, payload) => (dispatch) =>
	requestServer('savePost', payload)
		.then((updatePost) => {
			dispatch(setPostData(updatePost.res))
			return updatePost.res
		})

