import { ACTION_TYPE } from '../actions'

export const InitialPostState = {
  res: {
    id: '',
    title: '',
    imageUrl: '',
    content: '',
    publishedAt: '',
    comments: [],
  },
  error: null
}

export const postReducer = (state = InitialPostState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_POST_DATA: {
      return {
        ...state,
        res: { ...action.payload },
      }
    }
    case ACTION_TYPE.RESET_POST_DATA: {
      return InitialPostState
    }
    case ACTION_TYPE.SET_ERROR_POST: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case ACTION_TYPE.RESET_POST_DATA: {
      return {
        ...state,
        error: null
      }
    }
    default: {
      return state
    }
  }
}
