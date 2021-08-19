import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectedChamp from '../../components/SelectedChamp';
import configureStoreApp from '../../store/configureStore';

const match = {
  path: '/champs/:id',
  url: '/champs/Ahri',
  isExact: true,
  params: {
    id: 'Ahri',
  },
};

const store = configureStoreApp();

test('renders content', () => {
  const component = render(
    <Provider store={store}>
      <SelectedChamp match={match} />
    </Provider>,
  );
  expect(component);
});
