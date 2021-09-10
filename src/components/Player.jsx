// import React, { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { loadcoach } from '../store/sessionSlice';
import Appointment from './Appointment';
import Loading from './Loading';

const Player = () => {
  // const [ user, setUser ] = useState('');
  // const dispatch = useDispatch();
  // const loadingState = useSelector(isloading);
  const coaches = useSelector(loadcoach);
  // useEffect(() => {
  //   dispatch(usersAppointments());
  // });

  // const coachList = useSelector((state) => state.entities.session.coachList);
  return (
    <div className="home">
      { coaches ? <Appointment coaches={coaches} /> : <Loading /> }

    </div>
  );
};

export default Player;
