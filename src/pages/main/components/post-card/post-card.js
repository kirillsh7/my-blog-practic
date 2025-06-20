import styled from 'styled-components'
import { Icon } from '../../../../components'
import { Link } from 'react-router-dom'
const PostCardContainer = ({ className, id, title, publishedAt, commentsCount, imageUrl }) => {
	return (
		<Link to={`/post/${id}`}>
			<div className={className}>
				<img src={imageUrl} alt={title} />
				<div className='post-card-footer'>
					<h4>{title}</h4>
					<div className='post-card-info'>
						<div className='published-at'>
							<Icon id='fa-calendar-o' margin='0 7px 0 0' size='18px' />
							<span>{publishedAt}</span>
						</div>
						<div className='commment-count'>
							<Icon id='fa-comment-o' margin='0 7px 0 0' size='18px' />
							<span>{commentsCount}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 10px;
	border: 1px solid #000;


	& h4{
		margin: 5px 0 0;
	}

	& .post-card-footer{
		border-top: 1px solid #000;
		padding: 5px;
	}

	& .post-card-info{
		display:flex ;
		justify-content: space-between;
		margin-top: 5px;
	}

	& .published-at, & .commment-count{
		display: flex;
	}

	& img{
		display: block;
	}`