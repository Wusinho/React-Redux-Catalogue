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
  // const [app, setApp] = useState('');

  const getAppointments = useSelector(selectAppointments);
  // setApp(getAppointments);

  useEffect(() => {
    dispatch(usersAppointments(token));
  }, []);

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
