import styled from 'styled-components'
import { Button } from '../button/button'
import { useSelector } from 'react-redux'
import { selectModalIsOpen, selectModalOnCancel, selectModalOnConfirm, selectModalText } from '../../selectors'

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen)
	const text = useSelector(selectModalText)
	const onConfirm = useSelector(selectModalOnConfirm)
	const onCancel = useSelector(selectModalOnCancel)
	if (!isOpen) return null
	return (
		<div className={className}>
			<div className='overlay'></div>
			<div className='box'>
				<h3>{text}</h3>
				<div className='buttons'>
					<Button onClick={onConfirm} width='120px'>OK</Button>
					<Button onClick={onCancel} width='120px'>Cancel</Button>
				</div>
			</div>
		</div>
	)
}
export const Modal = styled(ModalContainer)`
	position: fixed;
	margin: 0 auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 10;
	& .overlay{
		background-color: rgba(0, 0, 0, 0.7);
		width: 100vw;
		height: 100vh;
		position: absolute;
	}
	& .box{
		padding: 15px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 400px;
		height: 200px;
		background-color: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	& .buttons{
		display: flex;
		justify-content: center;
		gap: 10px;
		width: 100%;
	}
	
		`