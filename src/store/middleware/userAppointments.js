import axios from 'axios';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const userAppointments = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.appointmentCallBegan.type) return next(action);

  const {
    token, onStart, onSuccess, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(
      // 'https://polar-dawn-64735.herokuapp.com/appointments/',
      'http://localhost:3000/appointments',
      { headers },
      { mode: 'cors' },
    )
    .then((response) => {
      dispatch(actions.appointmentCallSuccess(response));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    })
    .catch((error) => {
      dispatch(actions.appointmentCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    });
};

export default userAppointments;
