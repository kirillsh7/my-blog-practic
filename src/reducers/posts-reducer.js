const InitialPostsState = {};

export const postsReducer = (state = InitialPostsState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
