import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { PostCard } from './components'
import { useServerRequest } from '../../hooks'
import { Pagination, Search } from './components'
import { PAGINATION_LIMIT } from '../../constants'
import { debounce, fakeSearchJson } from './utils'


const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(1)
	const [paginationData, setPaginationData] = useState({})
	const [shouldSearch, setShouldSearch] = useState(false)
	const [searchPhase, setSearchPhase] = useState('')
	const requestServer = useServerRequest()
	const onPage = (page) => {
		setPage(page)
	}
	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(({ res: { data, pagination } }) => {

			setPosts(fakeSearchJson(searchPhase, data))
			setPaginationData(pagination)
		})
	}, [requestServer, page, shouldSearch])

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), [])
	const onSearch = ({ target }) => {
		setSearchPhase(target.value)
		startDelayedSearch(!shouldSearch)
	}



	return (
		<div className={className}>

			<Search searchPhase={searchPhase} onChange={onSearch} />
			{posts.length ?
				<>
					<div className='post-list'>
						{
							posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) =>
								<PostCard key={id} id={id} title={title} publishedAt={publishedAt} commentsCount={commentsCount} imageUrl={imageUrl} />
							)}
					</div>

				</>
				: <div className='no-post-found'> Post not found</div>}

			{posts.length > 1 ? <Pagination page={page} onPage={onPage} paginationData={paginationData} /> : null}

		</div>

	)
}

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	& .post-list{	
	display: flex;
	flex-wrap: wrap;
	padding: 20px 0 20px 25px;
	height: 90%;
	}
	& .no-post-found{ 
		font-size: 18px;
		margin-top:40px;
		text-align: center;

	}

`