import { ACTION_TYPE } from './action-type'
export const setErrorPost = (error) => {
	return {
		type: ACTION_TYPE.SET_ERROR_POST,
		payload: error
	}
}