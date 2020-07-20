import {
  selectLogin,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectValidEmail,
  makeSelectValidPassword,
} from '../selector';

describe('selectLoginSatte', () => {
  it('should select the login state', () => {
    const loginState = {
      validPassword: '',
      validMail: '',
      email: '',
      password: '',
    };
    const mockedState = {
      loginState,
    };
    expect(selectLogin(mockedState)).toEqual(loginState);
  });
});

const mockedState = {
  login: {
    validPassword: 'admin@123',
    validMail: 'admin@gmail.com',
    email: 'anu@gmail.com',
    password: 'password@12',
  },
};
describe('makeSelectEmail', () => {
  const emailSelector = makeSelectEmail();
  it('should select the email', () => {
    const email = 'anu@gmail.com';
    expect(emailSelector(mockedState)).toEqual(email);
  });
});

describe('makeSelectPassword', () => {
  const passwordSelector = makeSelectPassword();
  it('should select the Password', () => {
    const password = 'password@12';
    expect(passwordSelector(mockedState)).toEqual(password);
  });
});
describe('makeSelectValidPassword', () => {
  const validPasswordSelector = makeSelectValidPassword();
  it('should select the validPassword', () => {
    const validPassword = 'admin@123';
    expect(validPasswordSelector(mockedState)).toEqual(validPassword);
  });
});

describe('makeSelectValidEmail', () => {
  const validEmailSelector = makeSelectValidEmail();
  it('should select the validEmail', () => {
    const validEmail = 'admin@gmail.com';
    expect(validEmailSelector(mockedState)).toEqual(validEmail);
  });
});
