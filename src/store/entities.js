import { combineReducers } from 'redux';
import champReducer from './books';

export default combineReducers({
  champ: champReducer,
});
