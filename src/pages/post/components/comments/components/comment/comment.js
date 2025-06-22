import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon } from '../../../../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useServerRequest } from '../../../../../../hooks'
import { removeCommentAsync, openModal, closeModal } from '../../../../../../actions'
import { selectUserRole } from '../../../../../../selectors'
import { ROLE } from '../../../../../../constants'
import { checkAccess } from '../../../../../../utils'

const CommentContainer = ({ className, id, author, content, postId, publishedAt }) => {
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const onCommentRemove = () => {
		dispatch(openModal({
			text: 'Вы действительно хотите удалить комментарий?',
			onCancel: () => dispatch(closeModal),
			onConfirm: () => {
				dispatch(removeCommentAsync(requestServer, postId, id))
				dispatch(closeModal)
			}
		}))
	}

	const userRole = useSelector(selectUserRole)
	const isAdminOrModerator = checkAccess([ROLE.ADMIN, ROLE.MODERATOR], userRole)
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
			{
				isAdminOrModerator
				&& <Icon id='fa-trash-o' margin='5px 5px 0 10px' size='18px' isButton onClick={onCommentRemove} />
			}


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
Comment.propTypes = {
	id: PropTypes.string.isRequared,
	author: PropTypes.string.isRequared,
	content: PropTypes.string.isRequared,
	postId: PropTypes.string.isRequared,
	publishedAt: PropTypes.string.isRequared
}