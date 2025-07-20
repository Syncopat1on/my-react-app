import { render, screen } from '@testing-library/react';
import { Header } from '../Header/Header';
import { CartItem } from '../../type';
import React from 'react';
import '@testing-library/jest-dom';

const mockCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Brocolli - 1 Kg',
    price: 120,
    image: 'mock-image-url',
    quantity: 2,
  },
];

test('отображает количество товаров в корзине', () => {
  render(<Header cartItems={mockCartItems} toggleCart={() => {}} />);
  expect(screen.getByText('2')).toBeInTheDocument();
});

test('не отображает количество, если корзина пуста', () => {
  render(<Header cartItems={[]} toggleCart={() => {}} />);
  expect(screen.queryByText('0')).not.toBeInTheDocument();
});
