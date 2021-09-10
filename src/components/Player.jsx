import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadcoach, selectCurrentUserToken } from '../store/sessionSlice';
import Appointment from './Appointment'

const Player = () => {
  // const [ coaches, setCoaghes ] = useState('');
  const dispatch = useDispatch();

  const currentUserToken = useSelector(selectCurrentUserToken);
  const coachList = useSelector((state) => state.entities.session.coachList);
  // const coachList = useSelector(selectCoachList);

  console.log(coachList);

  useEffect(() => {
    dispatch(loadcoach(currentUserToken));
  }, []);

  return (
    <div className="home">
      <Appointment />
    </div>
  );
};

export default Player;
