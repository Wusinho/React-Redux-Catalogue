import * as actions from './actions';

const champSelection = (category) => ({
  type: actions.CHANGE_CHAMPION,
  payload: category,
});

export default champSelection;
