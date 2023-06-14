import { combineReducers } from 'redux';
import champReducer from './books';
import sessionReducer from './sessionSlice';

export default combineReducers({
  champs: champReducer,
  session: sessionReducer,
});
