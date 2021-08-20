import * as actions from './actions';

const changeFilter = (category) => ({
  type: actions.CHANGE_FILTER,
  payload: category,
});

export default changeFilter;
