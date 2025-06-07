import { ROLE } from '../constants/role';

const InitialUserState = {
  session: null,
  id: null,
  login: null,
  roleId: ROLE.GUEST,
};

export const userReducer = (state = InitialUserState, action) => {
  switch (action.type) {
    case 'SET_SESSION': {
      return {
        ...state,
        session: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
