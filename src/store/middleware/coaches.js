import axios from 'axios';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const coaches = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.coachCallBegan.type) return next(action);

  const {
    url, token, onStart, onSuccess, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  const headers = {
    Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  };

  axios
    .get(
      `${url}coaches`,
      headers,
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

export default coaches;
