import styled from 'styled-components'
import { PostContent, Comments, PostForm } from './components'
import { Error, PrivateContent } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useMatch, useParams } from 'react-router-dom'
import { useServerRequest } from '../../hooks'
import { loadPostAsync, resetPostData } from '../../actions'
import { selectPost, selectErrorPost } from '../../selectors'
import { ROLE } from '../../constants'
const PostContainer = ({ className }) => {
	const post = useSelector(selectPost)
	const error = useSelector(selectErrorPost)
	const [isLoading, setIsLoading] = useState(true)
	const dispatch = useDispatch()
	const params = useParams()
	const isEditing = useMatch('/post/:postId/edit')
	const isCreating = useMatch('/post')
	const requestServer = useServerRequest()
	useLayoutEffect(() => {
		dispatch(resetPostData())
	}, [dispatch, isCreating])
	useEffect(() => {

		if (isCreating) {
			setIsLoading(false)
			return
		}
		dispatch(
			loadPostAsync(requestServer, params.postId)
		).then(() => { setIsLoading(false) })
	}, [requestServer, dispatch, params.postId, isCreating])

	if (isLoading) {
		return <div>Загрузка...</div>
	}

	const SpecificPostPage =
		isCreating || isEditing
			? <PrivateContent access={[ROLE.ADMIN]}>
				<div className={className}>
					<PostForm post={post} />
				</div>
			</PrivateContent>
			: <div className={className}>
				<PostContent post={post} />
				<Comments comments={post.comments} postId={post.id} />
			</div>

	return error ? <Error error={error} /> : SpecificPostPage

}

export const Post = styled(PostContainer)`
					margin: 40px 0 ;
					padding: 0 80px;
					flex-grow: 1;

					`