import axios from 'axios';
import * as actions from '../api';

// eslint-disable-next-line consistent-return
const champApi = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.champCallBegan.type) return next(action);

  const { ID, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  axios
    .get(`https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/${ID}.json`)
    .then((response) => {
      dispatch(actions.champCallSuccess(response.data.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data.data });
    })
    .catch((error) => {
      dispatch(actions.champCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    });
};

export default champApi;
