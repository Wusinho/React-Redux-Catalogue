import axios from 'axios';
import { useSelector } from 'react-redux';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const userAppointments = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.appointmentCallBegan.type) return next(action);

  const {
    onStart, onSuccess, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  const getToken = useSelector((state) => state.entities.session.user.token);
  const getID = useSelector((state) => state.entities.session.user.user.id);

  const headers = {
    Authorization: `Bearer ${getToken}`,
  };

  axios
    .get(
      // 'https://shielded-waters-88645.herokuapp.com/user/${getID}',
      `http://localhost:3000/users/${getID}`,
      headers,
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
