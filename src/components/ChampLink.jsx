import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Book.scss';

const ChampLink = ({ champs }) => {
  if (typeof champs === 'undefined') return;

  const getChamps = Object.entries(champs).map((item) => (item[1]));
  const getPicture = (name) => `url("http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg")`;

  // eslint-disable-next-line consistent-return
  return getChamps.map((champ) => (
    <div
      className="card m-2 rounded-3 link__card"
      key={champ.key}
      style={{
        minWidth: '300px',
        backgroundImage: getPicture(champ.id),
        backgroundColor: 'black',
      }}
    >
      <Link to={`/champs/${champ.id}`} key={champ.id}>

        <div
          className="card-body"
        >
          <h5 className="card-title">{champ.title}</h5>
          <h2 className="card-title">{champ.name}</h2>
        </div>
      </Link>

    </div>
  ));
};

export default ChampLink;

ChampLink.defaultProps = {
  book: {
    id: '',
    name: '',
    title: '',
  },
};

ChampLink.propTypes = {
  book: PropTypes.objectOf(Object),
};
