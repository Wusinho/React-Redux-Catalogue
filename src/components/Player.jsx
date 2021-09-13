import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUserToken, selectAppointments, usersAppointments } from '../store/sessionSlice';
import Loading from './Loading';
import Card from './Card';

const Player = () => {
  const token = useSelector(selectCurrentUserToken);
  const appointment = useSelector(selectAppointments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersAppointments(token));
  }, []);

  return (
    <div>
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
