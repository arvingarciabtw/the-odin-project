import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import routes from '../routes';

const router = createBrowserRouter(routes);

describe('App component', () => {
  it('renders app', () => {
    const result = render(
      <RouterProvider router={router}>
        <App />
      </RouterProvider>,
    );
    expect(result).toMatchSnapshot();
  });
});
