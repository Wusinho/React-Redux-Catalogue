import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import '@testing-library/jest-dom';
import Nav from '../../components/Nav';

describe('Rendering Nav', () => {
  it('should match with snapshot', () => {
    const element = render(
      <Provider store={store}>
        <Router>
          <Nav />
        </Router>
      </Provider>,
    );
    expect(element).toMatchSnapshot();
  });
});
