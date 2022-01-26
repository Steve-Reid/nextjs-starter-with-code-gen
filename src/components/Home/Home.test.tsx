import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home';

describe('Home', () => {
  it('renders a title', () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent('Home');

  });
});
