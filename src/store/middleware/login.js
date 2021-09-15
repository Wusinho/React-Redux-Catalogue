import axios from 'axios';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const login = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.sessionCallBegan.type) return next(action);

  const {
    data, onStart, onSuccess, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  axios
    .post(
      'https://sheltered-plains-89590.herokuapp.com/login',
      // 'http://localhost:3000/login',
      data,
    )
    .then((response) => {
      dispatch(actions.sessionCallSuccess(response));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    })
    .catch((error) => {
      dispatch(actions.sessionCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    });
};

export default login;
