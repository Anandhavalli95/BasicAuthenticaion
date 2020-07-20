import React from 'react';
import { render, screen } from '@testing-library/react';

import Dashboard from '../index';

describe('Input', () => {
  test('render Field', () => {
    render(<Dashboard />);
    expect(screen.getByText('Welcome to dashboard!!!')).toBeTruthy();
  });
});
