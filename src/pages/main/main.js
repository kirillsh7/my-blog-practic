import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PostCard } from './components'
import { useServerRequest } from '../../hooks'
import { Pagination } from './components'
import { PAGINATION_LIMIT } from '../../constants'


const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(1)
	const [paginationData, setPaginationData] = useState({})
	const requestServer = useServerRequest()
	const setPageHandler = (page) => {
		setPage(page)
	}
	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(({ res: { data, pagination } }) => {

			setPosts(data)
			setPaginationData(pagination)
		})
	}, [requestServer, page])

	return (
		<main className={className}>
			<div className='post-list'>{
				posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) =>
					<PostCard key={id} id={id} title={title} publishedAt={publishedAt} commentsCount={commentsCount} imageUrl={imageUrl} />
				)}
			</div>
			<Pagination page={page} setPageHandler={setPageHandler} paginationData={paginationData} />
		</main>
	)
}

export const Main = styled(MainContainer)`
	& .post-list{	
	display: flex;
	flex-wrap: wrap;
	padding: 20px;
	margin: 0 auto;
	}
`