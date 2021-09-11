import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card }) => (
  <div key={card.id}>
    App
  </div>
);

export default Card;

Card.defaultProps = {
  card: {
    id: '',
    title: '',
    category: '',
  },
};

Card.propTypes = {
  card: PropTypes.objectOf(Object),
};
