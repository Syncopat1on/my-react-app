import { render } from '@testing-library/react';
import { CartModal } from '../Modal/CartModal';
import { CartItem } from '../../type';
import React from 'react';
import '@testing-library/jest-dom';

const mockCartItem: CartItem[] = [
  {
    id: 1,
    name: 'Brocolli - 1 Kg',
    price: 120,
    image: 'mock-image-url',
    quantity: 2,
  },
];

test('отображает пустую корзину', () => {
  const { getByText } = render(
    <CartModal cartItems={[]} onClose={() => {}} onUpdateQuantity={() => {}} />
  );
  expect(getByText('Your cart is empty!')).toBeInTheDocument();
});

test('отображает товары в корзине', () => {
  const { getByText } = render(
    <CartModal
      cartItems={mockCartItem}
      onClose={() => {}}
      onUpdateQuantity={() => {}}
    />
  );
  expect(getByText('Brocolli - 1 Kg')).toBeInTheDocument();
  expect(getByText('$ 240')).toBeInTheDocument();
});
