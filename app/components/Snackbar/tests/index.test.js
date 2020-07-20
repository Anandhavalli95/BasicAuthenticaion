import React from 'react';
import { render, screen } from '@testing-library/react';

import Toast from '../index';

describe('Toast', () => {
  test('render Toast', () => {
    render(<Toast open msg="Invalid Password" timeout={3000} type="error" />);
    expect(screen.getByText('Invalid Password')).toBeTruthy();
    expect(screen.getByRole('alert')).toBeTruthy();
  });
  test('do not render Toast if open prop is false', () => {
    render(<Toast open={false} msg="Invalid Password" timeout={3000} />);
    expect(screen.queryByText('Invalid Password')).toBeNull();
  });
});
