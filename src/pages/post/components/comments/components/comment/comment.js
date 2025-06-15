import styled from 'styled-components'
import { Icon } from '../../../../../../components'
import { useDispatch } from 'react-redux'
import { useServerRequest } from '../../../../../../hooks'
import { removeCommentAsync } from '../../../../../../actions'

const CommentContainer = ({ className, id, author, content, postId, publishedAt }) => {
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const onCommentRemove = () => {
		dispatch(removeCommentAsync(requestServer, postId, id))
	}
	return (
		<div className={className}>
			<div className='comment'>
				<div className='information-panel'>
					<div className='author'>
						<Icon id='fa-user-circle-o' margin='0 6px 0 0' size='18px' />
						{author}
					</div>
					<div className='published-at'>
						<Icon id='fa-calendar-o' margin='0 6px 0 0' size='18px' />
						{publishedAt}
					</div>
				</div>
				<div className='comment-text'>{content}</div>
			</div>
			<Icon id='fa-trash-o' margin='5px 5px 0 10px' size='18px' onClick={onCommentRemove} />
		</div>)
}
export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 10px;
	& .comment{
		border: 1px solid #000;
		width: 100%;
		padding: 5px 10px;
		}
	& .information-panel{
		display: flex;
		justify-content: space-between;
	}	
	& .author{
		display: flex;
		align-items: center;
	}
	& .published-at{
		display: flex;
		align-items: center;
	}

`