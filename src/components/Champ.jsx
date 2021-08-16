import React from 'react';
import PropTypes from 'prop-types';

function Champ({ champ, img }) {
  const char = Object.entries(champ).map((item) => (item[1]));
  const getPicture = () => `url("${img}")`;

  return char.map((demacia) => (
    <div
      key={demacia.key}
      style={{
        backgroundImage: getPicture(),
      }}
      className="card"
    >
      <div
        className="card-body"
        key={demacia.key}
      >
        <h5 className="card-title">{demacia.title}</h5>
        <h2 className="card-title">{demacia.name}</h2>
        <p className="card-title">{demacia.lore}</p>
      </div>

    </div>
  ));
}

export default Champ;

Champ.defaultProps = {
  champ: 'hello',
};

Champ.propTypes = {
  champ: PropTypes.objectOf(Object),
};
