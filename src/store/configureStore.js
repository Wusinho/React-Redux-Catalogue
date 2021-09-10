import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './middleware/api';
import champApi from './middleware/champApi';
import signIn from './middleware/login';
import registration from './middleware/registration';

const store = configureStore({
  reducer,
  middleware: [
    api,
    champApi,
    signIn,
    registration,
  ],
});

export default store;
