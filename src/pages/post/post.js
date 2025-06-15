import styled from 'styled-components'
import { PostContent, Comments, PostForm } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useLayoutEffect } from 'react'
import { useMatch, useParams } from 'react-router-dom'
import { useServerRequest } from '../../hooks'
import { loadPostAsync, resetPostData } from '../../actions'
import { selectPost } from '../../selectors'
const PostContainer = ({ className }) => {
	const post = useSelector(selectPost)
	const dispatch = useDispatch()
	const params = useParams()
	const isEditing = useMatch('/post/:postId/edit')
	const isCreating = useMatch('/post')
	const requestServer = useServerRequest()
	useLayoutEffect(() => {
		dispatch(resetPostData())
	}, [dispatch, isCreating])
	useEffect(() => {
		if (isCreating) return
		dispatch(loadPostAsync(requestServer, params.postId))
	}, [requestServer, dispatch, params.postId, isCreating])
	return (
		<div className={className}>
			{isCreating || isEditing ?
				<PostForm post={post} /> :
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			}
		</div>
	)
}

export const Post = styled(PostContainer)`
margin: 40px 0 ;
padding: 0 80px;

`