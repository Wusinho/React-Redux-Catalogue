import React from 'react';
import PropTypes from 'prop-types';

function Card({ appointment }) {
  return appointment.map((app) => (
    <div key={app.id} className="card m-2 rounded-3 link__card">
      <div className="card-body">
        <h3 className="card-title">{app.user.username}</h3>
        <h6 className="card-subtitle mb-2 text-muted">{app.date}</h6>
        <p className="card-text">{app.coach.name}</p>
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
