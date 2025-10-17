import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Shop from '../pages/Shop';
import Products from '../components/Products';
import routes from '../routes';

const router = createBrowserRouter(routes);

describe('Shop page', () => {
  it('renders page', () => {
    const result = render(
      <RouterProvider router={router}>
        <Shop />
      </RouterProvider>,
    );
    expect(result).toMatchSnapshot();
  });
});

describe('Products component', () => {
  it('renders products component', () => {
    const result = render(
      <RouterProvider router={router}>
        <Products />
      </RouterProvider>,
    );
    expect(result).toMatchSnapshot();
  });
});
