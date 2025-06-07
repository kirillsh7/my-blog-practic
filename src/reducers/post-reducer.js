const InitialPostState = {};

export const postReducer = (state = InitialPostState, action) => {
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
