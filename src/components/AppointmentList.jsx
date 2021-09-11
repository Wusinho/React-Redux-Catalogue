import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  usersAppointments,
  selectAppointments,
  selectCurrentUserID,
} from '../store/sessionSlice';
import Card from './Card';

const AppointmentList = ({ token }) => {
  const dispatch = useDispatch();

  const getAppointments = useSelector(selectAppointments);
  const currentUserID = useSelector(selectCurrentUserID);

  useEffect(() => {
    dispatch(usersAppointments(token, currentUserID));
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

AppointmentList.defaultProps = {
  token: '',
};

AppointmentList.propTypes = {
  token: PropTypes.string,
};
