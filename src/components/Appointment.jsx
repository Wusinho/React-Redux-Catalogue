import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadcoach,
  selectCurrentUserToken,
  setAppointments,
  selectCoachList,
  selectCurrentUserID,
} from '../store/sessionSlice';
import Loading from './Loading';

const AppointmentForm = () => {
  const currentUserID = useSelector(selectCurrentUserID);

  const [appointment, setAppointment] = useState({
    user_id: currentUserID,
    coach_id: '',
    date: '',
  });
  const dispatch = useDispatch();

  const currentUserToken = useSelector(selectCurrentUserToken);
  const coachList = useSelector(selectCoachList);

  const handleSubmit = (e) => {
    dispatch(setAppointments(appointment));
    e.preventDefault();
  };

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    dispatch(loadcoach(currentUserToken));
  }, []);

  return (
    <div className="home">
      {coachList ? (
        <form onSubmit={handleSubmit}>
          <select
            className="form-control"
            onChange={handleChange}
            name="coach_id"
          >
            <option key="0" disabled>Choose</option>
            {coachList.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.country}
              </option>
            ))}
          </select>
          {/* <input type="text" name='country' placeholder="country" onChange={handleChange}/> */}
          <input type="date" name="date" onChange={handleChange} />
          <button type="submit">Add booking</button>
        </form>
      )
        : (<Loading />)}
    </div>
  );
};

export default AppointmentForm;
