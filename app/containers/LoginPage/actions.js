import {
  SET_LOGIN_DETAILS,
  GET_VALID_CREDS,
  GET_VALID_CREDS_FAILURE,
  GET_VALID_CREDS_SUCCESS,
} from './constants';

export function setLoginDetails(field, value) {
  return {
    type: SET_LOGIN_DETAILS,
    field,
    value,
  };
}

export function getValidCred() {
  return {
    type: GET_VALID_CREDS,
  };
}

export function getValidCredSuccess(details) {
  return {
    type: GET_VALID_CREDS_SUCCESS,
    details,
  };
}

export function getValidCredFailure(error) {
  return {
    type: GET_VALID_CREDS_FAILURE,
    error,
  };
}
