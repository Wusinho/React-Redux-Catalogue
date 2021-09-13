import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentUserToken,
  selectAppointments,
  usersAppointments,
  selectIsLoggedIn,
} from '../store/sessionSlice';
import Loading from './Loading';
import Card from './Card';

const Player = () => {
  const token = useSelector(selectCurrentUserToken);
  const appointment = useSelector(selectAppointments);
  const loggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersAppointments(token));
  }, []);

  if (!loggedIn) {
    return <Redirect to="/champs" />;
  }

  return (
    <div className="home">
      { token
        ? (
          <div className="card-group">
            {appointment && <Card appointment={appointment} />}
          </div>
        )
        : <Loading /> }
    </div>
  );
};

export default Player;
