import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Cart from '../pages/Cart';
import CartProducts from '../components/CartProducts';
import routes from '../routes';

const router = createBrowserRouter(routes);

describe('Cart page', () => {
  it('renders page', () => {
    const result = render(
      <RouterProvider router={router}>
        <Cart />
      </RouterProvider>,
    );
    expect(result).toMatchSnapshot();
  });
});

describe('CartProducts component', () => {
  it('renders cart products component', () => {
    const result = render(
      <RouterProvider router={router}>
        <CartProducts />
      </RouterProvider>,
    );
    expect(result).toMatchSnapshot();
  });
});
