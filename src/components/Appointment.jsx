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
  const dispatch = useDispatch();
  const currentUserToken = useSelector(selectCurrentUserToken);

  useEffect(() => {
    dispatch(loadcoach(currentUserToken));
  }, []);

  const coachList = useSelector(selectCoachList);

  const currentUserID = useSelector(selectCurrentUserID);

  const [app, setApp] = useState({
    user_id: currentUserID,
    coach_id: '',
    date: '',
  });

  const handleSubmit = (e) => {
    dispatch(setAppointments(app));
    e.preventDefault();
  };

  const handleChange = (e) => {
    setApp({
      ...app,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
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
    </>
  );
};

export default AppointmentForm;
