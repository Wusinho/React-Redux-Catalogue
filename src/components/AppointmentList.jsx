import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  usersAppointments,
  selectAppointments,
  selectCurrentUserID,
  selectCurrentUserToken,
} from '../store/sessionSlice';
import Card from './Card';

const AppointmentList = () => {
  const dispatch = useDispatch();

  const getAppointments = useSelector(selectAppointments);
  const currentUserToken = useSelector(selectCurrentUserToken);
  const currentUserID = useSelector(selectCurrentUserID);

  useEffect(() => {
    dispatch(usersAppointments(currentUserToken, currentUserID));
  }, []);

  // console.log(getAppointments);
  return (
    <div>
      {getAppointments ? <Card card={getAppointments} /> : null}
      hello
    </div>
  );
};

export default AppointmentList;
