import styled from 'styled-components'
import { Input, Icon } from '../../../../components'

const SearchContainer = ({ className, searchPhase, onChange }) => {
	return (
		<div className={className}>
			<Input placeholder="Поиск по заголовкам..." value={searchPhase} onChange={onChange} />
			<Icon id="fa-search" size="21px" padding='10px 40px 10px 10px' />
		</div>
	)
}

export const Search = styled(SearchContainer)`
	display: flex;
	margin: 40px auto 0;
	height: 40px;
	width: 320px;
	position: relative;
	& > input {
		padding: 10px 32px 10px 10px;
	}
	& > div {
		position: absolute;
		right: 9px;
		top: 3px;
	}
`