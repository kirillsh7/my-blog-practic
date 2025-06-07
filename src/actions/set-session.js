import { ACTION_TYPE } from './action-type';
export const setSESSION = (session) => ({
  type: ACTION_TYPE.SET_SESSION,
  payload: session,
});
