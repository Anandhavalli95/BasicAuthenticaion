/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  SET_LOGIN_DETAILS,
  GET_VALID_CREDS_FAILURE,
  GET_VALID_CREDS_SUCCESS,
} from './constants';

export const initialState = {
  validPassword: '',
  validMail: '',
  email: '',
  password: '',
};

const loginReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    switch (action.type) {
      case SET_LOGIN_DETAILS:
        draft[action.field] = action.value;
        break;
      case GET_VALID_CREDS_SUCCESS:
        draft.validMail = action.details.email;
        draft.validPassword = action.details.password;
        break;
      case GET_VALID_CREDS_FAILURE:
        draft.error = action.error;
        break;
      default:
        return state;
    }
  });

export default loginReducer;
