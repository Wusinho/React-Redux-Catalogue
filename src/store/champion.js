import * as actions from './actions';

const championReducer = (option = 'All', action) => {
  if (action.type === actions.CHANGE_CHAMPION) {
    return action.payload;
  }
  return option;
};

export default championReducer;
