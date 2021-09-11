import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  loadcoach,
  selectCurrentUserToken,
  selectCoachList,
  selectCurrentUserID,
  selectIsLoggedIn,
} from '../store/sessionSlice';
import Appointment from './Appointment';
import AppointmentList from './AppointmentList';
import Loading from './Loading';

const Player = () => {
  const dispatch = useDispatch();
  const coaches = useSelector(selectCoachList);
  const token = useSelector(selectCurrentUserToken);
  const userID = useSelector(selectCurrentUserID);
  const loggedIn = useSelector(selectIsLoggedIn);
  console.log(loggedIn);

  if (!loggedIn) {
    return <Redirect to="/champs" />;
  }

  useEffect(() => {
    dispatch(loadcoach(token));
  }, []);

  return (
    <div className="home">
      { coaches && token && userID
        ? (
          <div>
            <Appointment coaches={coaches} token={token} />
            <AppointmentList token={token} userID={userID} />
          </div>
        )
        : <Loading /> }
    </div>
  );
};

export default Player;
