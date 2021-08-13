const action = {
  type: 'apiCallBengan',
  payload: {
    url: '',
    method: 'get',
    data: {},
    onSuccess: 'apiReceived',
    onError: 'apiRequestFailed',
  },
};

const api = (store) => (next) => (action) => {
  if (action.type !== 'apiCallBegan') {
    return next(action);
  }
};

export default api;
