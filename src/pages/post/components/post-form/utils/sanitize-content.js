export const sanitizeContent = (content) =>
	content
		.replace(/\s+/g, ' ')
		.replaceAll('<div><br></div>', '\n')
		.replaceAll('<div>', '\n')
		.replaceAll('</div>', '')
		.replaceAll('<br>', '\n')