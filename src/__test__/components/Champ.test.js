import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import Champ from '../../components/Champ';

describe('Champ', () => {
  test('renders when passed an object', () => {
    const champ = {};
    const img = {};
    render(
      <Champ champ={champ} img={img} />,
    );
  });
  test('when passed an empty object', () => {
    const champ = {};
    const img = {};
    const element = render(
      <Provider store={store}>
        <Champ champ={champ} img={img} />
      </Provider>,
    );
    expect(element.container.querySelector('champ__card')).toEqual(null);
  });
});
