import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PostCard } from './components'
import { useServerRequest } from '../../hooks'


const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([])
	const requestServer = useServerRequest()
	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			setPosts(posts.res)
		})
	}, [requestServer])
	return (
		<main className={className}>
			<div className='post-list'>{
				posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) =>
					<PostCard key={id} id={id} title={title} publishedAt={publishedAt} commentsCount={commentsCount} imageUrl={imageUrl} />
				)}
			</div>

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