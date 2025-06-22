import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from '../../../../components'
import { Comment } from './components'
import { selectUserId, selectUserRole } from '../../../../selectors'
import { useServerRequest } from '../../../../hooks'
import { addCommentAsync } from '../../../../actions'
import { ROLE } from '../../../../constants'

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('')
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const userId = useSelector(selectUserId)
	const onNewCommentAdd = () => {
		dispatch(addCommentAsync(requestServer, userId, postId, newComment))
		setNewComment('')
	}
	const userRole = useSelector(selectUserRole)
	const isGuest = ROLE.GUEST === userRole
	return (
		<div className={className} >
			{!isGuest
				&& <div className='new-comment'>
					<textarea name="comment" placeholder='Комментарий...' value={newComment} onChange={({ target }) => setNewComment(target.value)} > </textarea>
					<Icon id='fa-paper-plane-o' margin='0 0 0 10px' size='20px' isButton onClick={onNewCommentAdd} />
				</div>
			}
			<div className="comments">
				{comments.length === 0
					? <div style={{ marginTop: '20px' }} >
						Коментариев под этим постом нет
					</div>
					: comments.map(({ id, author, content, publishedAt }) => <Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
						postId={postId}

					/>)
				}
			</div>
		</div >
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