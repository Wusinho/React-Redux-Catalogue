import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Category from '../../components/Category';
import configureStoreApp from '../../store/configureStore';

test('renders content', () => {
  const store = configureStoreApp();
  const component = render(
    <Provider store={store}>
      <Category />
    </Provider>,
  );
  expect(component);
});
