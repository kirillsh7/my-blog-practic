import { setErrorPost } from './set-error-post'
import { setPostData } from './set-post-data'
import { resetErrorPost } from './reset-error-post'
export const loadPostAsync = (requestServer, postId) => (dispatch) =>
	requestServer('fetchPost', postId).then((postData) => {
		if (postData.res) {
			dispatch(resetErrorPost())
			dispatch(setPostData(postData.res))

		} else {
			dispatch(setErrorPost(postData.error))
		}

	})


