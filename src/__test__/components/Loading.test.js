import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '../../components/Loading';

describe('Home', () => {
  test('renders Home component', () => {
    render(<Loading />);
    screen.getByText(/Loading/);
  });

  test('it is not in the text', () => {
    const { getByText } = render(<Loading />);
    expect(() => getByText(/definitely not in the document/i)).toThrow();
  });
});
