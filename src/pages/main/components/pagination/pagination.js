import styled from 'styled-components'
import { Button } from '../../../../components'

const PaginationContainer = ({ className, page, onPage, paginationData }) => {
	const { first, prev, next, last } = paginationData
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={onPage.bind(null, first)}>В начало</Button>
			<Button disabled={page === 1} onClick={onPage.bind(null, prev)}>Предыдущая</Button>
			<div className='current-page' >Страница: {page}</div>
			<Button disabled={page === last} onClick={onPage.bind(null, next)}>Следущая</Button>
			<Button disabled={page === last} onClick={onPage.bind(null, last)}>В конец</Button>
		</div>
	)
}
export const Pagination = styled(PaginationContainer)`
display: flex;
justify-content: center;
margin: 0 35px 20px 5px;
padding: 0 20px;
& .current-page{
	border: 1px solid #000;
	min-width: 140px;
	text-align: center;
	padding: 0 5px;
	margin: 0 10px;
	font-weight: 500;
}
& button{
	margin: 0 10px;
	height: max-content;
	padding: 4px 5px;
}`