import styled from 'styled-components'
import { Icon } from '../../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, openModal, removePostAsync } from '../../../../actions'
import { useServerRequest } from '../../../../hooks'
import { useNavigate } from 'react-router-dom'
import { selectUserRole } from '../../../../selectors'
import { checkAccess } from '../../../../utils'
import { ROLE } from '../../../../constants'

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const roleId = useSelector(selectUserRole)
	const requestServer = useServerRequest()
	const onPostRemove = () => {
		dispatch(openModal({
			text: 'Вы действительно хотите удалить статью?',
			onCancel: () => dispatch(closeModal),
			onConfirm: () => {
				dispatch(removePostAsync(requestServer, id, navigate))
				dispatch(closeModal)
			}
		}))
	}

	const isAdmin = checkAccess([ROLE.ADMIN], roleId)

	return (
		<div className={className} >
			<div className='published-at'>
				{publishedAt && <Icon id='fa-calendar-o' margin='0 6px 0 0' size='18px' />}
				{publishedAt}
			</div>
			{
				isAdmin &&
				<div className='buttons'>
					{editButton}
					{publishedAt && <Icon id='fa-trash-o' size='21px' isButton onClick={onPostRemove} />}
				</div>
			}
		</div>

	)
}

export const SpecialPanel = styled(SpecialPanelContainer)`
		margin: ${({ margin = '0' }) => margin};
		display: flex;
		justify-content: space-between;
	
	& .published-at{
		display: flex;
		align-items: center;
	}
	
	& i {
		display: flex;
		align-items: center;
	}
	& .buttons{
		display: flex;
		align-items: center;
	}
	
`