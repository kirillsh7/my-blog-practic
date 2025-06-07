const InitialUsersState = {};

export const usersReducer = (state = InitialUsersState, action) => {
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
