import { PROP_TYPE } from '../../constants'
import { H2 } from '../h2/h2'
import styled from 'styled-components'

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	font-size: 18px;
`

export const Error = ({ error }) => {
	return <Div>
		<H2>Ошибка</H2>
		<p>{error}</p>
	</Div>
}

Error.propTypes = {
	error: PROP_TYPE.ERROR

}