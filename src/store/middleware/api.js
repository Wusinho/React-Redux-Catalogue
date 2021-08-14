/* eslint-disable */
import axios from 'axios';

const api = ({ dispatch }) => (next) => (action) => {
  if (action.type !== 'apiCallBegan') return next(action);

  next(action);
  const {
    url, method, data, onSuccess, onError,
  } = action.payload;

    const response = async () => {
    try {
      const response = await axios.request({
        baseUrl: 'https://rickandmortyapi.com/api/character/1',
        url,
        method,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data })
    } catch (error) {
      dispatch({ type: onError, payload: error })
    }
  
  }
  response
};

export default api;
