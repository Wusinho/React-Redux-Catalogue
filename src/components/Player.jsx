import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrentUserToken,
  selectCoachList,
} from '../store/sessionSlice';
import Appointment from './Appointment';
import AppointmentList from './AppointmentList';
import Loading from './Loading';

const Player = () => {
  const coaches = useSelector(selectCoachList);
  const token = useSelector(selectCurrentUserToken);

  return (
    <div className="home">
      { coaches && token
        ? (
          <div>
            <Appointment coaches={coaches} token={token} />
            <AppointmentList token={token} />
          </div>
        )
        : <Loading /> }
    </div>
  );
};

export default Player;
