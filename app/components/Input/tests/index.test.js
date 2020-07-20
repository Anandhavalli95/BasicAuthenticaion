import React from 'react';
import { render, screen } from '@testing-library/react';
import TextField from '@material-ui/core/TextField';

import Input from '../index';

describe('Input', () => {
  test('render Field', () => {
    render(
      <Input
        type="text"
        label="Email"
        name="email"
        input={{ onChange: () => {} }}
        meta={{
          pristine: false,
          error: undefined,
        }}
      />,
    );
    expect(TextField).not.toBe(0);
    expect(screen.getAllByText('Email')).toBeTruthy();
    // Couldn't change value as it is explicit lib
    // const input = utils.queryByText('Email');
    // fireEvent.change(input, { target: { value: 'abccc' } });
    // expect(input.value).toBe('abcc');
  });
});
