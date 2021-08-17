import axios from 'axios';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const api = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  axios
    .get('http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json')
    .then((response) => {
      dispatch(actions.apiCallSuccess(response.data.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data.data });
    })
    .catch((error) => {
      dispatch(actions.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    });
};

export default api;
