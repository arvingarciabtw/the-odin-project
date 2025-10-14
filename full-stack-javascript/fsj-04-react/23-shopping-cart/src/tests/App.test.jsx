import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import App from '../App.jsx';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();
  });
});
