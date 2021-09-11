import axios from 'axios';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const userAppointments = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.appointmentCallBegan.type) return next(action);

  const {
    token, userID, onStart, onSuccess, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(
      // 'https://shielded-waters-88645.herokuapp.com/user/${getID}',
      `http://localhost:3000/users/${userID}`,
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
