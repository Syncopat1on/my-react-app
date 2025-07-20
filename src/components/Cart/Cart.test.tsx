import { render } from '@testing-library/react';
import { Cart } from '../Cart/Cart';
import React from 'react';
import '@testing-library/jest-dom';

test('рендерит количество товаров в корзине', () => {
  const { getByText } = render(<Cart quantity={3} onClick={() => {}} />);
  expect(getByText('3')).toBeInTheDocument();
});
