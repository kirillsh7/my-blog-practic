import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '../../../../components'
import { Comment } from './components'
import { selectUserId } from '../../../../selectors'
import { useServerRequest } from '../../../../hooks'
import { addCommentAsync } from '../../../../actions'

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('')
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const userId = useSelector(selectUserId)
	const onNewCommentAdd = () => {
		dispatch(addCommentAsync(requestServer, userId, postId, newComment))
		setNewComment('')
	}
	return (
		<div className={className} >

			<div className='new-comment'>
				<textarea name="comment" placeholder='Комментарий...' value={newComment} onChange={({ target }) => setNewComment(target.value)} > </textarea>
				<Icon id='fa-paper-plane-o' margin='0 0 0 10px' size='20px' isButton onClick={onNewCommentAdd} />
			</div>
			<div className="comments">
				{comments.filter(comment => comment.postId === postId).map(({ id, author, content, publishedAt }) => <Comment
					key={id}
					id={id}
					author={author}
					content={content}
					publishedAt={publishedAt}
					postId={postId}

				/>)
				}
			</div>
		</div>
	)
}
export const Comments = styled(CommentsContainer)`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 580px;
	& .new-comment{
		display: flex;
		width: 100%;
		margin: 20px 0 0 0;
	}
	& .new-comment textarea{
		width: 100%;
		height: 120px;
		resize: none;
		font-size: 18px;
	}
`