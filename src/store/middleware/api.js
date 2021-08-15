/* eslint-disable */
import axios from "axios";
import * as actions from '../api'

const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart});
    next(action);

    // try {
    //   const response = await axios.request({
    //     baseUrl: "https://rickandmortyapi.com/api/character/",
    //     url,
    //     method,
    //     data
    //   })
    //     dispatch({ type: onSuccess, payload: response.data})
    // } catch (error) {
    //     dispatch(actions.apiCallFailed(error.message));
    //     if (onError) dispatch({ type: onError, payload: error.message} );
    // }

    axios
      .get(
      // "https://rickandmortyapi.com/api/character/",
      "http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json",
        // url,
        // method,
        // data,
      )
      .then(response => {
        dispatch(actions.apiCallSuccess(response.data));
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data })})
      // })
      .catch(error => {
        dispatch(actions.apiCallFailed(error.message));
        if (onError) dispatch({ type: onError, payload: error.message} )});
  };

export default api;
