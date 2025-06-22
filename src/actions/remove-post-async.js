export const removePostAsync = (requestServer, id, navigate) => () =>
	requestServer('removePost', id).then(() => navigate('/'))
