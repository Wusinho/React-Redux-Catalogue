import { combineReducers } from 'redux';
import champReducer from './books';
import filterReducer from './filter';
import selectReducer from './champion';

export default combineReducers({
  champ: champReducer,
  filter: filterReducer,
  champion: selectReducer,
});
