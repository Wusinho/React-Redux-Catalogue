import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadcoach, selectCurrentUserToken, selectCoachList } from '../store/sessionSlice';
import Appointment from './Appointment';
import Loading from './Loading';

const Player = () => {
  const dispatch = useDispatch();
  const coaches = useSelector(selectCoachList);
  const token = useSelector(selectCurrentUserToken);

  useEffect(() => {
    dispatch(loadcoach(token));
  }, []);

  return (
    <div className="home">
      { coaches && token ? <Appointment coaches={coaches} /> : <Loading /> }

    </div>
  );
};

export default Player;
