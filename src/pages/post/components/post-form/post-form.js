import styled from 'styled-components'
import { Icon, Input } from '../../../../components'
import { SpecialPanel } from '../special-panel/special-panel'
import { useLayoutEffect, useRef, useState } from 'react'
import { sanitizeContent } from './utils'
import { useDispatch } from 'react-redux'
import { savePostAsync } from '../../../../actions'
import { useServerRequest } from '../../../../hooks'
import { useNavigate } from 'react-router-dom'
import { PROP_TYPE } from '../../../../constants'

const PostFormContainer = ({ className, post: { id, title, imageUrl, content, publishedAt } }) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl)
	const [titleValue, setTitleValue] = useState(title)
	const contentRef = useRef(null)
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const navigate = useNavigate()

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl)
		setTitleValue(title)
	}, [imageUrl, title])

	const onSave = () => {

		const content = sanitizeContent(contentRef.current.innerHTML)

		dispatch(savePostAsync(requestServer, { id, imageUrlValue, titleValue, content }))
			.then(({ id }) => {
				navigate(`/post/${id}`)

			})
	}

	return (
		<div className={className} >
			<Input onChange={({ target }) => setImageUrlValue(target.value)} placeholder='URL картинки' value={imageUrlValue} />
			<Input onChange={({ target }) => setTitleValue(target.value)} placeholder='Заголовок' value={titleValue} />
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin='20px 0'
				editButton={
					<Icon id='fa-floppy-o' margin={publishedAt ? '0 10px 0 0' : '0'} size='21px' isButton onClick={onSave} />
				}
			/>
			<div
				ref={contentRef}
				suppressContentEditableWarning={true}
				contentEditable={true}
				className='post-text'>{content}</div>

		</div>
	)
}
export const PostForm = styled(PostFormContainer)`
	& .post-text{
		font-size: 18px;
		white-space: pre-line;
		border: 1px solid #000;
		min-height: 80px;
		padding: 10px;
	}
	
	
`
PostForm.propTypes = {
	post: PROP_TYPE.POST
}