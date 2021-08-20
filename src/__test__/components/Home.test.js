import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/Home';

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />);
    screen.getByText(/Heber Lazo/);
  });

  test('it is not in the text', () => {
    const { getByText } = render(<Home />);
    expect(() => getByText(/definitely not in the document/i)).toThrow();
  });
});
