import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  usersAppointments,
  selectAppointments,
  selectCurrentUserID,
  selectCurrentUserToken,
} from '../store/sessionSlice';

const AppointmentList = () => {
  const dispatch = useDispatch();

  const getAppointments = useSelector(selectAppointments);
  const currentUserToken = useSelector(selectCurrentUserToken);
  const currentUserID = useSelector(selectCurrentUserID);

  useEffect(() => {
    dispatch(usersAppointments(currentUserToken, currentUserID));
  });

  return (
    <div>
      {getAppointments.map((app) => (
        <div key={app.id}>
          app
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
