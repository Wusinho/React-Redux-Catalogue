import React from 'react';
import PropTypes from 'prop-types';

function Card({ card }) {
  return card.map((appointment) => (
    <div key={appointment.id} className="card">
      <div className="card-body">
        <h5 className="card-title">{appointment.user.username}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{appointment.date}</h6>
        <p className="card-text">{appointment.coach.name}</p>
      </div>
    </div>
  ));
}

export default Card;

Card.defaultProps = {
  card: {
    id: '',
    user: '',
    date: '',
    coach: '',
  },
};

Card.propTypes = {
  card: PropTypes.arrayOf(Object),
};
