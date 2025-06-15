import styled from 'styled-components'
import { PostContent, Comments } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useServerRequest } from '../../hooks'
import { loadPostAsync } from '../../actions'
import { selectPost } from '../../selectors'

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost)
	const dispatch = useDispatch()
	const params = useParams()
	const requestServer = useServerRequest()
	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.postId))
	}, [requestServer, dispatch, params.postId])
	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} postId={post.id} />
		</div>
	)
}

export const Post = styled(PostContainer)`
margin: 40px 0 ;
padding: 0 80px;
`