import React from 'react';
import PropTypes from 'prop-types';

function Card({ appointment }) {
  const getPicture = (name) => `url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg")`;
  return appointment.map((app) => (
    <div
      key={app.id}
      className="card m-2 rounded-3 link__card"
      style={{
        minWidth: '300px',
        backgroundColor: 'black',
        backgroundImage: getPicture(app.role),
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{app.champion}</h5>
        <h3 className="card-subtitle mb-2 text-muted">Appointment date:</h3>
        <h3 className="card-subtitle mb-2 text-muted">{app.date}</h3>
        <h5 className="card-text">Coach :</h5>
        <h5 className="card-text">{app.coach.name}</h5>
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
  card: PropTypes.objectOf(Object),
};
