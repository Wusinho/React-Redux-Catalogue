import * as actions from './actions';

const filterReducer = (option = 'All', action) => {
  if (action.type === actions.CHANGE_FILTER) {
    return action.payload;
  }
  return option;
};

export default filterReducer;
