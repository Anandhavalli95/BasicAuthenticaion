import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import configureStore from '../../../configureStore';
import Login from '../index';

describe('<Login />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('render Login view Components', () => {
    const { getByText, getByTitle, getAllByText } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <Login />
        </IntlProvider>
      </Provider>,
    );
    expect(getByText('Welcome Back!')).toBeTruthy();
    expect(getByText('Sign in')).toBeTruthy();
    expect(getAllByText('Email Address')).toBeTruthy();
    expect(getAllByText('Password')).toBeTruthy();
    expect(getByText('Remember me')).toBeTruthy();
    expect(getByTitle('Sign in')).toBeTruthy();
  });
});
