import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import ChampLink from '../../components/ChampLink';

describe('Champ', () => {
  test('renders when passed an object', () => {
    const champs = {
      Aatrox: {
        blur: 'Something',
        id: 'Aatrox',
        title: 'the Dark',
        key: 2,
      },
      Ahri: {
        blur: 'Something',
        id: 'Ahri',
        title: 'the Fox',
        key: 1,
      },
    };
    const element = render(
      <Router>
        <ChampLink champs={champs} />
      </Router>,
    );
    expect(element).toMatchSnapshot();
  });
  test('nothing is render if undefined object', () => {
    const champs = {};
    const element = render(
      <ChampLink champs={champs} />,
    );
    expect(element.container).toMatchObject({});
  });
});
