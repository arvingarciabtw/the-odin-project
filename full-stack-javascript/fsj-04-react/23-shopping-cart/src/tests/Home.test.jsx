import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from '../pages/Home';
import Hero from '../components/Hero';
import routes from '../routes';

const router = createBrowserRouter(routes);

describe('Home page', () => {
  it('renders page', () => {
    const result = render(
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>,
    );
    expect(result).toMatchSnapshot();
  });
});

describe('Hero component', () => {
  it('renders hero component', () => {
    const result = render(
      <RouterProvider router={router}>
        <Hero />
      </RouterProvider>,
    );
    expect(result).toMatchSnapshot();
  });

  it('renders correct heading', () => {
    render(
      <RouterProvider router={router}>
        <Hero />
      </RouterProvider>,
    );
    expect(
      screen.getByText('Find your perfect device').textContent,
    ).toBeTruthy();
  });

  it('renders shop now button', () => {
    render(
      <RouterProvider router={router}>
        <Hero />
      </RouterProvider>,
    );
    const button = screen.getByRole('button', { name: 'Shop Now' });
    expect(button).toBeTruthy();
  });

  it('verify link points to /shop', async () => {
    render(
      <RouterProvider router={router}>
        <Hero />
      </RouterProvider>,
    );

    const link = screen.getByRole('link', { name: 'Shop Now' });
    expect(link).toHaveAttribute('href', '/shop');
  });
});
