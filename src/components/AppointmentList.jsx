import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  usersAppointments,
  selectAppointments,
} from '../store/sessionSlice';
import Card from './Card';

const AppointmentList = ({ token }) => {
  const dispatch = useDispatch();

  const getAppointments = useSelector(selectAppointments);

  useEffect(() => {
    dispatch(usersAppointments(token));
  }, []);

  return (
    <>
      {getAppointments ? <Card card={getAppointments} /> : null}
    </>
  );
};

export default AppointmentList;

AppointmentList.defaultProps = {
  token: '',
};

AppointmentList.propTypes = {
  token: PropTypes.string,
};
