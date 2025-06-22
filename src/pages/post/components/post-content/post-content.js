import styled from 'styled-components'
import { H2, Icon } from '../../../../components'
import { SpecialPanel } from '../special-panel/special-panel'
import { useNavigate } from 'react-router-dom'
import { PROP_TYPE } from '../../../../constants'

const PostContentContainer = ({ className, post: { id, title, imageUrl, content, publishedAt } }) => {
	const navigate = useNavigate()
	return (
		<div className={className} >
			<img src={imageUrl || null} alt={title} />
			<H2>{title}</H2>
			<SpecialPanel id={id} publishedAt={publishedAt} margin='0 0 20px 0' editButton={
				<Icon id='fa-pencil-square-o' margin='0 10px 0 0' isButton size='21px' onClick={() => { navigate(`/post/${id}/edit`) }} />
			} />
			<div className='post-text'>{content}</div>
		</div>
	)
}
export const PostContent = styled(PostContentContainer)`
 	& img{
		max-width: 200px;
		float: left ;
		margin: 0 20px  10px 0;
 	}
	
	& .post-text{
		font-size: 18px;
	}
`

PostContent.propTypes = {
	post: PROP_TYPE.POST
}