import { render, fireEvent } from '@testing-library/react';
import { CardItemSkeleton } from '../CartItemSkeleton/CardItemSkeleton';
import { CartItem } from '../../../type';
import React from 'react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

const mockItem: CartItem = {
  id: 1,
  name: 'Brocolli - 1 Kg',
  price: 120,
  image: 'mock-image-url',
  quantity: 2,
};

test('увеличивает количество товара при нажатии на +', () => {
  const onUpdateQuantity = vi.fn();
  const { getByTestId } = render(
    <CardItemSkeleton item={mockItem} onUpdateQuantity={onUpdateQuantity} />
  );
  fireEvent.click(getByTestId('plus-btn'));
  expect(onUpdateQuantity).toHaveBeenCalledWith(1, 3);
});

test('уменьшает количество товара при нажатии на -', () => {
  const onUpdateQuantity = vi.fn();
  const { getByTestId } = render(
    <CardItemSkeleton item={mockItem} onUpdateQuantity={onUpdateQuantity} />
  );
  fireEvent.click(getByTestId('minus-btn'));
  expect(onUpdateQuantity).toHaveBeenCalledWith(1, 1);
});
