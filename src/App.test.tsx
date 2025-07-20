import { render, screen } from '@testing-library/react';
import { App } from './App';
import { Product } from './type';
import React from 'react';
import '@testing-library/jest-dom';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Brocolli - 1 Kg',
    price: 120,
    image: 'mock-image-url',
  },
];

test('рендерит заголовок и карточки при переданных данных', async () => {
  render(<App initialCards={mockProducts} />);
  expect(screen.getByText('Catalog')).toBeInTheDocument();
  expect(screen.getByText('Brocolli')).toBeInTheDocument();
});

test('не рендерит спиннеры загрузки, если данные переданы', async () => {
  const { queryAllByTestId } = render(<App initialCards={mockProducts} />);
  expect(queryAllByTestId('skeleton-loader')).toHaveLength(0);
});

test('рендерит спиннеры загрузки, если данные не переданы', async () => {
  const { getAllByTestId } = render(<App />);
  expect(getAllByTestId('skeleton-loader')).toHaveLength(30);
});
