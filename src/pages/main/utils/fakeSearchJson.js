export const fakeSearchJson = (searchPhase, data) => {
	const newData = data.filter(({ title }) => title.toLowerCase().trim().includes(searchPhase.toLowerCase().trim()))
	return newData
}