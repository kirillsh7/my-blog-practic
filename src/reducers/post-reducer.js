import { ACTION_TYPE } from '../actions'

const InitialPostState = {
  id: '',
  title: '',
  imageUrl: '',
  content: '',
  publishedAt: '',
  comments: [],
}

export const postReducer = (state = InitialPostState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_POST_DATA: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default: {
      return state
    }
  }
}
