import {
  SET_LOGIN_DETAILS,
  GET_VALID_CREDS,
  GET_VALID_CREDS_SUCCESS,
  GET_VALID_CREDS_FAILURE,
} from '../constants';

import {
  setLoginDetails,
  getValidCred,
  getValidCredFailure,
  getValidCredSuccess,
} from '../actions';

describe('Login Actions', () => {
  describe('setLoginDetails', () => {
    it('should return the correct type, passed field and value', () => {
      const field = 'email';
      const value = 'anu@getFormInitialValues.com';
      const expectedResult = {
        type: SET_LOGIN_DETAILS,
        field,
        value,
      };

      expect(setLoginDetails(field, value)).toEqual(expectedResult);
    });
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_VALID_CREDS,
      };

      expect(getValidCred()).toEqual(expectedResult);
    });
    it('should return the correct type, passed payload', () => {
      const payload = {
        email: 'abc@gmail.com',
        password: 'asdghf1',
      };
      const expectedResult = {
        type: GET_VALID_CREDS_SUCCESS,
        details: payload,
      };

      expect(getValidCredSuccess(payload)).toEqual(expectedResult);
    });
    it('should return the correct type, error', () => {
      const error = new Error();
      const expectedResult = {
        type: GET_VALID_CREDS_FAILURE,
        error,
      };

      expect(getValidCredFailure(error)).toEqual(expectedResult);
    });
  });
});
