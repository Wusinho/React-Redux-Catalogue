import axios from 'axios';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const signIn = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);
  const {
    data, onStart, onSuccess, onError,
  } = action.payload;
  const { username, password } = data;
  if (onStart) dispatch({ type: onStart });
  next(action);
  axios
    .post(
      // "https://shielded-waters-88645.herokuapp.com/login/",
      'http://localhost:3000/login',
      {
        username,
        password,
      },
    )
    .then((response) => {
      dispatch(actions.apiCallSuccess(response));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    })
    .catch((error) => {
      dispatch(actions.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    });
};

export default signIn;
