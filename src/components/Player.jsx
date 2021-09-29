import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentUserToken,
  selectAppointments,
  usersAppointments,
  selectIsLoggedIn,
  userID,
} from '../store/sessionSlice';
import Loading from './Loading';
import Card from './Card';
import '../style/Player.scss';

const Player = () => {
  const token = useSelector(selectCurrentUserToken);
  const ID = useSelector(userID);
  const appointment = useSelector(selectAppointments);
  const loggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersAppointments(token, ID));
  }, []);

  if (!loggedIn) {
    return <Redirect to="/champs" />;
  }

  return (
    <div className="player-page">
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
