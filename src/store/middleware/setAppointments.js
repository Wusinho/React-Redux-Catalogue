import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentUserToken } from '../sessionSlice';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const setAppointments = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.setappointmentCallBegan.type) return next(action);

  const {
    data, onStart, onSuccess, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  const currentUserToken = useSelector(selectCurrentUserToken);

  const headers = {
    Authorization: `Bearer ${currentUserToken}`,
  };

  axios
    .post(
      // 'https://shielded-waters-88645.herokuapp.com/appointments',
      'http://localhost:3000/appointments',
      data,
      headers,
      { mode: 'cors' },
    )
    .then((response) => {
      dispatch(actions.setappointmentCallSuccess(response));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    })
    .catch((error) => {
      dispatch(actions.setappointmentCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    });
};

export default setAppointments;
