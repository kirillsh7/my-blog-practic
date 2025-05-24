import styled from 'styled-components'
import { Icon } from '../../../../components'
const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`
const Buttom = styled.button`
	font-size: 18px;
	width: 100px;
	height: 32px;
`
const ControlPanelContainer = ({ className }) => (
	<div className={className}>
		<RightAligned>
			<Buttom>Войти</Buttom>
		</RightAligned>
		<RightAligned >
			<Icon size="24px" id="fa-backward" margin="10px 0 0 0" />
			<Icon size="20px" id="fa-file-text-o" margin="10px 0 0 16px" />
			<Icon size="20px" id="fa-users" margin="10px 0 0 16px" />
		</RightAligned>
	</div>
)

export const ControlPanel = styled(ControlPanelContainer)`
`