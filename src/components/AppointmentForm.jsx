import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAppointments,
  selectCoachList,
  selectCurrentUserToken,
} from '../store/sessionSlice';
import { selectCategory, selectChamp } from '../store/books';

const AppointmentForm = () => {
  const dispatch = useDispatch();
  const role = useSelector(selectCategory);
  const champion = useSelector(selectChamp);
  const coaches = useSelector(selectCoachList);
  const token = useSelector(selectCurrentUserToken);

  const [app, setApp] = useState({
    coach_id: '',
    date: '',
    role,
    champion,
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
