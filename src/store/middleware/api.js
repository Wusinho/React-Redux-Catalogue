/* eslint-disable */
import axios from "axios";
import * as actions from '../api'

const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;

    // try {
    //   const response = await axios.request({
    //     baseUrl: "https://rickandmortyapi.com/api/character/1",
    //     // url,
    //     // method,
    //     // data
    //   })
    //     dispatch({ type: onSuccess, payload: response.data})
    // } catch (error) {
    //   dispatch({ type: onError, payload: error });
    // }

    axios
      .get(
      "https://rickandmortyapi.com/api/character/",
        // url,
        // method,
        // data,
      )
      .then(response => {
        dispatch(actions.apiCallSuccess(response.data));
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data })})
      // })
      .catch(error => {
        dispatch(actions.apiCallFailed(error))
        if (onError) dispatch({ type: onError, payload: error} )});
  };

export default api;
