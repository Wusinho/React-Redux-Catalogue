import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Category from '../../components/Category';
import categoriesList from '../../components/categoriesList';
import configureStoreApp from '../../store/configureStore';

test('renders content', () => {
  const store = configureStoreApp();
  render(
    <Provider store={store}>
      <Category categoriesList={categoriesList} />
    </Provider>,
  );
});
