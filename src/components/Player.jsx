import React from 'react';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { isloading } from '../store/sessionSlice';
import Appointment from './Appointment';

const Player = () => {
  // const [ coaches, setCoaghes ] = useState('');

  // const coachList = useSelector((state) => state.entities.session.coachList);
  const loaded = useSelector(isloading);

  console.log(loaded);

  return (
    <div className="home">
      <Appointment />
    </div>
  );
};

export default Player;
