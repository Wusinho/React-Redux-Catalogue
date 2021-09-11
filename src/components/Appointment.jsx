import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setAppointments,
  selectCurrentUserID,
  loadcoach,
} from '../store/sessionSlice';
import Loading from './Loading';

const AppointmentForm = ({ coaches, token }) => {
  const dispatch = useDispatch();

  const currentUserID = useSelector(selectCurrentUserID);

  const [app, setApp] = useState({
    user_id: currentUserID,
    coach_id: '',
    date: '',
  });

  const handleSubmit = (e) => {
    dispatch(setAppointments(token, app));
    e.preventDefault();
  };

  const handleChange = (e) => {
    setApp({
      ...app,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(loadcoach(token));
  }, []);

  return (
    <div>
      {coaches && token ? (
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
          {/* <input type="text" name='country' placeholder="country" onChange={handleChange}/> */}
          <input type="date" name="date" onChange={handleChange} />
          <button type="submit">Add booking</button>
        </form>
      ) : (
        <Loading />
      )}
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
