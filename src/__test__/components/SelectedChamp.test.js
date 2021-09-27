import React from 'react';
import { Provider } from 'react-redux';
import { act, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectedChamp from '../../components/SelectedChamp';
import store from '../../store/configureStore';

test('renders content', () => {
  const match = {
    path: '/champs/:id',
    url: '/champs/Ahri',
    isExact: true,
    params: {
      id: 'Ahri',
    },
  };

  act(() => {
    render(
      <Provider store={store}>
        <SelectedChamp match={match} />
      </Provider>,
    );
  });

  // expect(component);
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
