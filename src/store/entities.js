import { combineReducers } from 'redux';
import bookReducer from './books';
import bookFilter from './filter';

export default combineReducers({
  books: bookReducer,
  filter: bookFilter,
});
