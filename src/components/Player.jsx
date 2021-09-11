import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadcoach, selectCurrentUserToken } from '../store/sessionSlice';
import Appointment from './Appointment';
import Loading from './Loading';

const Player = () => {
  // const [ user, setUser ] = useState('');
  const dispatch = useDispatch();
  // const loadingState = useSelector(isloading);
  // const coaches = useSelector(selectCoachList);
  const coaches = useSelector((state) => state.entities.session.coachList);
  const token = useSelector(selectCurrentUserToken);

  useEffect(() => {
    dispatch(loadcoach(token));
  }, []);

  return (
    <div className="home">
      { coaches && token ? <Appointment coaches={coaches} token={token} /> : <Loading /> }

    </div>
  );
};

export default Player;
