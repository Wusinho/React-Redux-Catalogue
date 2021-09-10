import axios from 'axios';
import { useSelector } from 'react-redux';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const signIn = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.coachCallBegan.type) return next(action);

  const {
    data, onStart, onSuccess, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  const getToken = useSelector((state) => state.entities.session.user.token);

  const headers = {
    Authorization: `Bearer ${getToken}`,
  };

  axios
    .post(
      // 'https://shielded-waters-88645.herokuapp.com/coaches/',
      'http://localhost:3000/coaches',
      data,
      { headers },
      { mode: 'cors' },
    )
    .then((response) => {
      dispatch(actions.coachCallSuccess(response));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    })
    .catch((error) => {
      dispatch(actions.coachCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    });
};

export default signIn;
