import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';
import championReducer from './champion';

export default combineReducers({
  books: bookReducer,
  filter: filterReducer,
  champion: championReducer,
});
