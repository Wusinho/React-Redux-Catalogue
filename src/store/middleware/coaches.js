import axios from 'axios';
import { useSelector } from 'react-redux';
import * as actions from '../api';
import { selectCurrentUserToken } from '../sessionSlice';

// eslint-disable-next-line consistent-return
const coaches = ({ dispatch }) => (next) => (action) => {
  if (action.type !== actions.coachCallBegan.type) return next(action);

  const {
    onStart, onSuccess, onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  next(action);

  const currentUserToken = useSelector(selectCurrentUserToken);

  const headers = {
    Authorization: `Bearer ${currentUserToken}`,
  };

  axios
    .get(
      // 'https://shielded-waters-88645.herokuapp.com/coaches/',
      'http://localhost:3000/coaches',
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

export default coaches;
