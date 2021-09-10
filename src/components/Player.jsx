// import React, { useEffect } from 'react';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectAppointments, usersAppointments } from '../store/sessionSlice';
import Appointment from './Appointment';

const Player = () => {
  // const [ user, setUser ] = useState('');
  // const dispatch = useDispatch();
  // const getAppointments = useSelector(selectAppointments);

  // useEffect(() => {
  //   dispatch(usersAppointments());
  // });

  console.log('try');

  // const coachList = useSelector((state) => state.entities.session.coachList);
  return (
    <div className="home">
      <Appointment />
    </div>
  );
};

export default Player;
