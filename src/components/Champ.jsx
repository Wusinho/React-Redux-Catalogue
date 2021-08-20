import React from 'react';
import PropTypes from 'prop-types';
import '../style/Champ.scss';

function Champ({ champ }) {
  const char = Object.entries(champ).map((item) => (item[1]));
  const getPicture = (name) => `url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg")`;

  return char.map((demacia) => (
    <div
      key={demacia.key}
      style={{
        backgroundImage: getPicture(demacia.id),
      }}
      className="champ__card border-0 rounded-0"
    >
      <div
        className="champ__body"
        key={demacia.key}
      >
        <h5 className="card-title">{demacia.title}</h5>
        <h2 className="card-title">{demacia.name}</h2>
        <p className="card-title">{demacia.lore}</p>
        <div className="champ__tips">
          <div className="card-title">{demacia.allytips}</div>
          <div className="card-title">{demacia.enemytips}</div>
        </div>
      </div>

    </div>
  ));
}

export default Champ;

Champ.defaultProps = {
  champ: {
    key: '',
    title: '',
    name: '',
    lore: '',
    allytips: '',
    enemytips: '',
  },
};

Champ.propTypes = {
  champ: PropTypes.objectOf(Object),
};
