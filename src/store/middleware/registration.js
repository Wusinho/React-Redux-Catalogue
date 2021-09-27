import axios from 'axios';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const registration = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.regCallBegan.type) return next(action);

  const {
    url, data, onStart, onSuccess, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  const headers = {
    'Access-Control-Allow-Origin': '*',
  };

  const cors = {
    mode: 'cors',
  };

  axios
    .post(
      `${url}users`,
      data,
      headers,
      cors,
    )
    .then((response) => {
      dispatch(actions.regCallSuccess(response));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    })
    .catch((error) => {
      dispatch(actions.regCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    });
};

export default registration;
