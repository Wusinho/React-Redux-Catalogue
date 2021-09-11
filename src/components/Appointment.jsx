import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setAppointments,
  selectCurrentUserID,
  selectCurrentUserToken,
} from '../store/sessionSlice';

const AppointmentForm = ({ coaches }) => {
  const dispatch = useDispatch();

  const currentUserID = useSelector(selectCurrentUserID);
  const currentUserToken = useSelector(selectCurrentUserToken);
  const [app, setApp] = useState({
    user_id: currentUserID,
    coach_id: '',
    date: '',
  });

  const handleSubmit = (e) => {
    dispatch(setAppointments(currentUserToken, app));
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
          <option key="0" disabled>Choose</option>
          {coaches.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.country}
            </option>
          ))}
        </select>
        {/* <input type="text" name='country' placeholder="country" onChange={handleChange}/> */}
        <input type="date" name="date" onChange={handleChange} />
        <button type="submit">Add booking</button>
      </form>
    </div>
  );
};

export default AppointmentForm;

AppointmentForm.defaultProps = {
  coaches: {
    key: '',
    country: '',
    name: '',
  },
};

AppointmentForm.propTypes = {
  coaches: PropTypes.objectOf(Object),
};
