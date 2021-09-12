import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setAppointments,
} from '../store/sessionSlice';

const AppointmentForm = ({ coaches, token }) => {
  const dispatch = useDispatch();

  const [app, setApp] = useState({
    coach_id: '',
    date: '',
  });

  const handleSubmit = (e) => {
    console.log(app);
    dispatch(setAppointments(token, app));
    e.preventDefault();
  };

  const handleChange = (e) => {
    setApp({
      ...app,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          className="form-control"
          onChange={handleChange}
          name="coach_id"
        >
          <option key="0" disabled>
            Choose
          </option>
          {coaches.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.country}
            </option>
          ))}
        </select>
        <input type="date" name="date" onChange={handleChange} />
        <button type="submit">Add booking</button>
      </form>
    </div>
  );
};

export default AppointmentForm;

AppointmentForm.defaultProps = {
  token: '',
  coaches: '',
};

AppointmentForm.propTypes = {
  token: PropTypes.string,
  coaches: PropTypes.arrayOf(Object),
};
