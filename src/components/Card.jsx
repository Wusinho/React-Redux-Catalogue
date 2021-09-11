import React from 'react';
import PropTypes from 'prop-types';

function Card({ card }) {
  return card.map((appointment) => (
    <div
      key={appointment.id}
    >
      <div>
        App
        <h4>{appointment.date}</h4>
        <h6>{appointment.coach_id}</h6>
      </div>

    </div>
  ));
}

export default Card;

Card.defaultProps = {
  card: {
    key: '',
    title: '',
    name: '',
    lore: '',
    allytips: '',
    enemytips: '',
  },
};

Card.propTypes = {
  card: PropTypes.arrayOf(Object),
};
