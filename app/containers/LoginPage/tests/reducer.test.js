/* eslint-disable no-param-reassign */
import produce from 'immer';

import loginReducer from '../reducer';
import {
  setLoginDetails,
  getValidCredSuccess,
  getValidCredFailure,
} from '../actions';

describe('loginReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      validPassword: '',
      validMail: '',
      email: '',
      password: '',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(loginReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the setLoginDetails action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.email = 'anu@gmail.com';
    });

    expect(
      loginReducer(state, setLoginDetails('email', 'anu@gmail.com')),
    ).toEqual(expectedResult);
  });
  it('should handle the getValidCredSuccess correctly', () => {
    const details = {
      email: 'admin12@gmail.com',
      password: 'admin@123',
    };
    const expectedResult = produce(state, draft => {
      draft.validMail = details.email;
      draft.validPassword = details.password;
    });

    expect(loginReducer(state, getValidCredSuccess(details))).toEqual(
      expectedResult,
    );
  });
  it('should handle the getValidCredFailure correctly', () => {
    const error = new Error();
    const expectedResult = produce(state, draft => {
      draft.error = error;
    });

    expect(loginReducer(state, getValidCredFailure(error))).toEqual(
      expectedResult,
    );
  });
});
