import axios from 'axios';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const setAppointments = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.setappointmentCallBegan.type) return next(action);

  const {
    url, token, data, onStart, onSuccess, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .post(
      `${url}appointments`,
      data,
      { headers },
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
