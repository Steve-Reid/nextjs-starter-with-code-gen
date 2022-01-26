import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from './About';

describe('About', () => {
  it('renders a title', () => {
    const { container } = render(<About />);

    expect(container).toHaveTextContent('About');

  });
});
