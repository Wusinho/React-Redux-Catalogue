import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../../components/Nav';

describe('Rendering Nav', () => {
  it('should match with snapshot', () => {
    const element = render(
      <Router>
        <Nav />
      </Router>,
    );
    expect(element).toMatchSnapshot();
  });
});
