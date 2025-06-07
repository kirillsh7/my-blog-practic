import { ACTION_TYPE } from '../actions/action-type'
import { ROLE } from '../constants/role'

const InitialUserState = {
  session: null,
  id: null,
  login: null,
  roleId: ROLE.GUEST,
}

export const userReducer = (state = InitialUserState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        ...action.payload,
      }

    case ACTION_TYPE.LOGOUT:
      return InitialUserState

    default: {
      return state
    }
  }
}
