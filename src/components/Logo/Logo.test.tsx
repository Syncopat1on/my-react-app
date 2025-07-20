import { render } from '@testing-library/react';
import React from 'react';
import { Logo } from '../Logo/Logo';
import '@testing-library/jest-dom';

test('рендер логотипа Vegetable SHOP', () => {
  const { getByText } = render(<Logo />);
  expect(getByText('Vegetable')).toBeInTheDocument();
  expect(getByText('SHOP')).toBeInTheDocument();
});
