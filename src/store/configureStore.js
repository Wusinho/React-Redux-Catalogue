import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';
import champApi from './middleware/champApi';
import SignIn from './middleware/login';

const store = configureStore({
  reducer,
  middleware: [
    api,
    champApi,
    SignIn,
  ],
});

export default store;
