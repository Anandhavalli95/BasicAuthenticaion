import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = state => state.login || initialState;

const makeSelectValidEmail = () =>
  createSelector(
    selectLogin,
    loginState => loginState.validMail,
  );

const makeSelectValidPassword = () =>
  createSelector(
    selectLogin,
    loginState => loginState.validPassword,
  );

const makeSelectEmail = () =>
  createSelector(
    selectLogin,
    loginState => loginState.email,
  );
const makeSelectPassword = () =>
  createSelector(
    selectLogin,
    loginState => loginState.password,
  );
export {
  selectLogin,
  makeSelectValidEmail,
  makeSelectValidPassword,
  makeSelectEmail,
  makeSelectPassword,
};
