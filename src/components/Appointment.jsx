import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadcoach, selectCurrentUserToken } from "../store/sessionSlice";

const AppointmentForm = () => {
  const [ appointment, setAppointment ] = useState([])
  const dispatch = useDispatch();

  const currentUserToken = useSelector(selectCurrentUserToken);
  const coachList = useSelector((state) => state.entities.session.coachList);

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })

  useEffect(() => {
    dispatch(loadcoach(currentUserToken));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <select className="form-control" onChange={handleChange} name="coach_id">
        {/* <option key="0" disabled> Choose </option> */}
        {coachList.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.country}
          </option>
        ))}
      </select>
      <input type="date" name="date" onChange={handleChange} />
      <button type="submit">Add booking</button>
    </form>
  );
}

export default AppointmentForm;
