import React from 'react';
import PropTypes from 'prop-types';

function Card({ card }) {
  // const appCard = Object.entries(card).map((item) => (item[1]));
  console.log(card.appointments);
  return card.appointments.map((data) => (
    <div
      key={data.key}
    >
      <div>
        App
        <h4>{data.date}</h4>
        <h6>{data.coach_id}</h6>
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
  card: PropTypes.objectOf(Object),
};
