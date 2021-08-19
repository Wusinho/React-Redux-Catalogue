import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectedChamp from '../../components/SelectedChamp';
import configureStoreApp from '../../store/configureStore';

const store = configureStoreApp();

test('renders content', () => {
  const match = {
    path: '/champs/:id',
    url: '/champs/Ahri',
    isExact: true,
    params: {
      id: 'Ahri',
    },
  };
  const component = render(
    <Provider store={store}>
      <SelectedChamp match={match} />
    </Provider>,
  );
  expect(component);
});

// test('renders content', () => {
//   const match = {};
//   const component = render(
//     <Provider store={store}>
//       <SelectedChamp match={match} />
//     </Provider>,
//   );
//   expect(component);
// });
